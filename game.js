var hunger = 50;
var health = 50;
var sanity = 50;

var score = 0;
var daySurvived = 0;    

var currentScenario = 0;

var scenarios = JSON.parse(rawData).scenarios;

var availableRandomEvents = [];
var availableStoryEvents = [];

var randomCount = 0;

scenarios.forEach((scene,i)=>{
if (scene.story) {
    availableStoryEvents.push(i);
} else if (!scene.locked){
    availableRandomEvents.push(i);
}
});

function choice(cID) {
    var lastScenario = currentScenario;
    
    changeStats(scenarios[currentScenario].choices[cID].affects);

    if (hunger <= 0) { endGame("you loose because you starved to death"); }
    else if (hunger >= 100) { endGame("you loose because you got too damn fat"); }
    else if (health <= 0) { endGame("you loose because you got too sick"); }
    else if (health >= 100) { endGame("you loose because you were too healthy????? maybe some bad guys see your good health and eat your fresh meat up? idk"); }
    else if (sanity <= 0) { endGame("you loose because you went insane"); }
    else if (sanity >= 100) { endGame("you loose because you fall into a state of bliss and stop caring about survival believing everything is great, and die"); }
    else {

        //increment days and score

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
            currentScenario = scenarios[currentScenario].choices[cID].chained;
        } else if (randomCount === 0 || randomCount >= 4 || Math.random() > 0.2) { //chance of getting another random event or story
            currentScenario = availableRandomEvents[Math.floor(Math.random() * availableRandomEvents.length)];
            randomCount++;
        } else {
            currentScenario = availableStoryEvents[0];
            randomCount = 0;
        }

        if (scenarios[lastScenario].choices[cID].unlocks) {//if contains events to unlock, make them available !! Did not make to work with unnlocking story events !!
            scenarios[lastScenario].choices[cID].unlocks.forEach((unlockID) => {
                if (!availableRandomEvents.includes(unlockID)) {
                    availableRandomEvents.push(unlockID);
                }
            });
        }
        newCard(currentScenario);
    }
}

function endGame(reason) {
    document.getElementById("card").remove();
    document.getElementById("body").style.backgroundImage = "url('resources/tenor.gif')";
    setTimeout(endScreen,2500);
    function endScreen() {
        alert(reason);
        location.reload();
    }
}


function newCard(sID,custom) {
    var scenario;
    if (custom){
        scenario = custom;
    } else {
        scenario = scenarios[sID];
    }
    
    var cardElem = document.getElementById("card");

    var newCardElem = cardElem.cloneNode(true);
    cardElem.parentNode.append(newCardElem);
    cardElem.remove();

    var infoElem = document.getElementById("cardInfo");
    var choiceElem = document.getElementById("cardChoices");

    infoElem.innerHTML = `<p>${scenario.text}</p>`;

    if (scenario.image) {
        //IMAGE FORMAT
    }

    choiceElem.innerHTML = "";
    scenario.choices.forEach((choice, i) => {
        choiceElem.innerHTML += `
            <p class="w3-btn w3-margin-top w3-left-align w3-ripple w3-block" onclick="choice(${i});">
            ${choice.text}
            </p>`;
    });
}

function changeStats(changes = []) {
    var stats = [hunger, health, sanity];
    var tStats = stats.map(function (num, idx) {
        return num + changes[idx];
    });
    hunger = tStats[0];
    health = tStats[1];
    sanity = tStats[2];

    elems = [document.getElementById("hunger"), document.getElementById("health"), document.getElementById("sanity")];

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
            }
    }
}

newCard(0);
