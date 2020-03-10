var database = firebase.database(); //Leaderboard stuff
var ref = database.ref('scores');
ref.on('value', gotData, errData);
var key;
var viewingLeaderboard = false;
var list = [];

var difficultyAmplifier = 1.2;

var hunger = 50;
var health = 50;
var sanity = 50;

var animating = false;

var score = 0;
var daysSurvived = 0;

var currentScenario = 0;
var lastScenario;

const scenarios = JSON.parse(rawData).scenarios;
/*
const rawData = `

var rawJson = `{
"array": 
*/
var availableRandomEvents = [];
var availableStoryEvents = [];

scenarios.forEach((scene, i) => {
    if (scene.story && !scene.locked) {
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

var leaderboardTemplate = {
    text: "ERROR: TEXT NOT SET",
    choices: [
        {
            "text": "Restart",
            "chained": "restart"
        }
    ]
};

function choice(cID) {
    if (animating) return;
    if (health === undefined || isNaN(health)) health = 50;
    if (sanity === undefined || isNaN(sanity)) sanity = 50;
    if (hunger === undefined || isNaN(hunger)) hunger = 50;

    //if (lastScenario === currentScenario) { alert('ERROR: SAME EVENT TWICE IN A ROW'); return; }
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
    else if (sanity >= 100) { endGame(customDeathMessage ? customDeathMessage : "You fall into a state of bliss and stop caring about survival believing everything is great. This leads you to run into some bad guys, thinking they would help, but you�ve only provided them with a nice dinner meal. You have died."); }
    else {

        daysSurvived += Math.floor(Math.random() * 5 + 2);
        score += 100;
        submitScore();

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
        } else if (((randomCount === 0 || Math.random() > 0.35) && randomCount <= 2) || availableStoryEvents.length === 0) { //chance of getting another random event or story

            var events = [];
            availableRandomEvents.forEach((value)=>{events.push(value)});
            index = events.indexOf(currentScenario);//remove current event so it doesnt repeat
            if (index !== -1) events.splice(index, 1);

            if (events.length === 0) { alert("ERROR: OUT OF RANDOM EVENTS"); }

            currentScenario = events[Math.floor(Math.random() * events.length)];
            randomCount++;
        } else {
            if (availableStoryEvents.length === 0) { alert("ERROR: OUT OF STORY EVENTS"); }
            currentScenario = availableStoryEvents[0];
            randomCount = 0;
        }

        if (scenarios[lastScenario].choices[cID].unlocks) {//if contains events to unlock, make them available !!! Did not make to work with unlocking story events !!!
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
    document.getElementById("body").style.backgroundImage = "none";
    viewingLeaderboard = true;
    newCard(0, leaderboardTemplate, true);
}

function restart() {
    document.getElementById("body").style.backgroundImage = "none";

    viewingLeaderboard = false;

    key = "";

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
        if (scene.story && !scene.locked) {
            availableStoryEvents.push(i);
        } else if (!scene.locked) {
            availableRandomEvents.push(i);
        }
    });

    randomCount = 0;

    attempt++;

    newCard(0);
}

function newCard(sID, custom, leaderboard) {
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
    if (leaderboard) {
        infoElem.innerHTML = `<h2>Leaderboard</h2><ol class="w3-border w3-topbar w3-bottombar w3-leftbar w3-rightbar w3-border-dark-gray" id="leaderboard" style="height:350px;overflow-y:scroll"></ol>`;
        updateLeaderboard();
    }

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
        return num + (changes[idx] * difficultyAmplifier);
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

function username(name) {
    var err = document.getElementById("usernameError");
    var nameList = [];
    list.forEach((item, i) => {
        nameList.push(item.name);
    });

    if (name.replace(/ /g, "") === "") {
        err.innerHTML = "May not be blank";
    } else if (name.split("").length > 32) {
        err.innerHTML = "Name may not be more than 32 characters";
    } else if (nameList.includes(name)) {
        err.innerHTML = "That name is already taken";
    } else {
        playerName = name;
        document.getElementById('name').innerHTML = name;
        document.getElementById('prompt').style.display = 'none';
        document.getElementById('tutorial').style.display = 'block';
        submitScore();
    }
}


function updateLeaderboard() {
    var leaderboardElem = document.getElementById("leaderboard");
    leaderboardElem.innerHTML = '';
    list.forEach((item, i) => {
        leaderboardElem.innerHTML += `<li class="w3-display-container w3-margin-right w3-margin-left">${item.name}<span class="w3-display-right">${item.score}</span></li>`;
    });
}

function gotData(data) {
    data = data.val();
    console.log(data);
    list = [];


    Object.keys(data).forEach((key)=>{
        list.push({ name: data[key].name, score: data[key].score });
    });
    list.sort(function (a, b) {
        return b.score - a.score;
    });

    if (viewingLeaderboard) {
        updateLeaderboard();
    }
}

function errData(err) {
    console.log(err);
}

function submitScore() {
    var data = {
        name: playerName,
        score: score
    };
    var ref;
    if (!key) {
        ref = database.ref('scores');
        var result = ref.push(data);
        key = result.key;
    } else {
        ref = database.ref('scores/'+key);
        ref.update(data);
    }
}

newCard(0);