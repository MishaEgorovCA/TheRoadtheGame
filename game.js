var hunger = 50;
var health = 50;
var sanity = 50;

var animating = false;

var score = 0;
var daysSurvived = 0;

var currentScenario = 0;
var lastScenario;

var scenarios = JSON.parse(rawData).scenarios;
/*
const rawData = `

rawJson = `{
"array": 
*/
var availableRandomEvents = [];
var availableStoryEvents = [];

scenarios.forEach((scene, i) => {
    if (scene.story) {
        availableStoryEvents.push(i);
    } else if (!scene.locked) {
        availableRandomEvents.push(i);
    }
});

var randomCount = 0;

var playerName = "";

var attempt = 1;

var deathTemplate = {
    text: "ERROR: TEXT NOT SET",
    image: "Death.gif",
    choices: [
        {
            "text": "View Leaderboard",
            "chained": "leaderboard"
        },
        {
            "text": "Restart",
            "chained": "restart"
        }
    ]
};

function choice(cID) {
    if (animating) return;
    if (lastScenario === currentScenario) { alert('ERROR: SAME EVENT TWICE IN A ROW'); return; }
    lastScenario = currentScenario;

    changeStats(scenarios[currentScenario].choices[cID].affects);

    if (scenarios[currentScenario].choices[cID].customDeath) {
        var customDeathMessage = scenarios[currentScenario].choices[cID].customDeath;
    }

    if (hunger <= 0) { endGame(customDeathMessage ? customDeathMessage : "You have starved to death."); }
    else if (hunger >= 100) { endGame(customDeathMessage ? customDeathMessage : "You and your son have grown fat with your plentiful food which forced your efforts to a halt. Some bad guys going the same direction as you catch up and decide your fat selves would make a wonderful dinner meal."); }
    else if (health <= 0) { endGame(customDeathMessage ? customDeathMessage : "You become very sick. The coughing gets the best of you. You have died."); }
    else if (health >= 100) { endGame(customDeathMessage ? customDeathMessage : "You feel great just like the days before the apocalypse. You feel as though you have no limits. You push yourself, almost running down the road with your cart, but you overwork yourself and die."); }
    else if (sanity <= 0) { endGame(customDeathMessage ? customDeathMessage : "Your sanity drains. You question your choices. Did you do what is morally right? Are you the bad guy? In fear of becoming the bad guy, you suicide."); }
    else if (sanity >= 100) { endGame(customDeathMessage ? customDeathMessage : "You fall into a state of bliss and stop caring about survival believing everything is great. This leads you to run into some bad guys, thinking they would help, but you’ve only provided them with a nice dinner meal. You have died."); }
    else {

        daysSurvived += Math.floor(Math.random() * 5 + 2);
        score += 100;

        var index = 0;
        if (!scenarios[currentScenario].repeatable) {//if non-repeatable or story remove from available
            if (scenarios[currentScenario].story) {
                index = availableStoryEvents.indexOf(currentScenario);
                if (index !== -1) availableStoryEvents.splice(index, 1);
            } else {
                index = availableRandomEvents.indexOf(currentScenario);
                if (index !== -1) availableRandomEvents.splice(index, 1);
            }
        }

        if (scenarios[currentScenario].choices[cID].locks) {//if contains events to lock, make them unavailable !! Did not make to work with locking story events !!
            scenarios[currentScenario].choices[cID].locks.forEach((lockID) => {
                index = availableRandomEvents.indexOf(lockID);
                if (index !== -1) availableRandomEvents.splice(index, 1);
            });
        }

        if (scenarios[currentScenario].choices[cID].chained) { //If chained next scenario is the chained one else
            currentScenario = scenarios[currentScenario].choices[cID].chained[Math.floor(Math.random() * scenarios[currentScenario].choices[cID].chained.length)];//Random chain
        } else if ((randomCount === 0 || Math.random() > 0.2) && randomCount <= 4) { //chance of getting another random event or story
            if (availableRandomEvents.length <= 1) { alert("ERROR: OUT OF RANDOM EVENTS"); }

            var events = availableRandomEvents;
            index = events.indexOf(currentScenario);//remove current event so it doesnt repeat
            if (index !== -1) events.splice(index, 1);

            currentScenario = events[Math.floor(Math.random() * events.length)];
            randomCount++;
        } else {
            if (availableStoryEvents.length === 0) { alert("ERROR: OUT OF STORY EVENTS"); }
            currentScenario = availableStoryEvents[0];
            randomCount = 0;
        }

        if (scenarios[lastScenario].choices[cID].unlocks) {//if contains events to unlock, make them available !! Did not make to work with unlocking story events !!
            scenarios[lastScenario].choices[cID].unlocks.forEach((unlockID) => {
                if (!availableRandomEvents.includes(unlockID)) {
                    availableRandomEvents.push(unlockID);
                }
            });
        }
        newCard(currentScenario);
    }
}

function endGame(deathMessage, image) {
    document.getElementById("card").style.visibility = "hidden";
    setTimeout(endScreen, 2500);

    function endScreen() {
        document.getElementById("body").style.backgroundImage = "url('resources/graphics/fortnite.gif')";
        var deathCard = deathTemplate;
        deathCard.text = `${deathMessage}<br/><br/><br/>You survived a total of <span class="w3-xlarge">${daysSurvived}</span> days.<br/>Your score is <span class="w3-xlarge">${score}</span>`;
        if (image) { deathCard.image = image; }
        newCard(0, deathCard);
    }
}

function leaderboard() {
    alert("Leaderboard under construction still");
}

function restart() {
    document.getElementById("body").style.backgroundImage = "none";

    hunger = 50;
    health = 50;
    sanity = 50;

    document.getElementById("hunger").style.width = `50%`;
    document.getElementById("health").style.width = `50%`;
    document.getElementById("sanity").style.width = `50%`;

    score = 0;
    daysSurvived = 0;

    currentScenario = 0;
    lastScenario = -1;

    availableRandomEvents = [];
    availableStoryEvents = [];

    scenarios.forEach((scene, i) => {
        if (scene.story) {
            availableStoryEvents.push(i);
        } else if (!scene.locked) {
            availableRandomEvents.push(i);
        }
    });

    randomCount = 0;

    attempt++;

    newCard(0);
}

function newCard(sID, custom) {
    var scenario;
    if (custom) {
        scenario = custom;
    } else {
        scenario = scenarios[sID];
    }

    var scoreElem = document.getElementById("score");
    var daysElem = document.getElementById("daysSurvived");

    scoreElem.innerHTML = score; //Show score
    daysElem.innerHTML = daysSurvived;

    var cardElem = document.getElementById("card");
    cardElem.style.visibility = "hidden";

    var newCardElem = cardElem.cloneNode(true);
    cardElem.parentNode.append(newCardElem);
    cardElem.remove();

    var infoElem = document.getElementById("cardInfo");
    var choiceElem = document.getElementById("cardChoices");

    infoElem.innerHTML = `<p>${scenario.text}</p>`;

    if (scenario.image) {
        infoElem.innerHTML += `<div style="height:300px;">
            <img class="w3-display-bottommiddle w3-dark-gray w3-round-large" src="resources/graphics/${scenario.image}" style="width:300px;padding:16px">
            </div>`;
    }

    choiceElem.innerHTML = "";
    scenario.choices.forEach((choice, i) => {
        choiceElem.innerHTML += `
            <p class="w3-btn w3-margin-top w3-left-align w3-ripple w3-block" onclick="${custom ? `${choice.chained}()` : `choice(${i});`}">
            ${choice.text}
            </p>`;
    });
    newCardElem.style.visibility = "visible";
}

function changeStats(changes = []) {
    if (Array.isArray(changes[0])) {
        changes = changes[Math.floor(Math.random() * changes.length)];
    }

    var stats = [hunger, health, sanity];
    var tStats = stats.map(function (num, idx) {
        return num + changes[idx];
    });
    hunger = tStats[0];
    health = tStats[1];
    sanity = tStats[2];

    elems = [document.getElementById("hunger"), document.getElementById("health"), document.getElementById("sanity")];

    animating = true;
    var interval = setInterval(frame, 25);
    function frame() {
        var done = 0;
        stats.forEach((stat, i) => {
            if (stats[i] !== tStats[i] && stats[i] > 0 && stats[i] < 100) {
                if (stats[i] < tStats[i]) {
                    stats[i]++;
                } else {
                    stats[i]--;
                }
                elems[i].style.width = `${stats[i]}%`;
            } else { done++; }
        });
        if (done === 3) {
            clearInterval(interval);
            animating = false;
        }
    }
}

newCard(0);