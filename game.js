var hunger = 50;
var health = 50;
var sanity = 50;

var currentScenario = 0;

var scenarios = JSON.parse(rawData).scenarios;

function choice(cID) {
    changeStats(scenarios[currentScenario].choices[cID].affects);

    if (hunger <= 0) { endGame("you loose because you starved to death"); }
    else if (hunger >= 100) { endGame("you loose because you got too damn fat"); }
    else if (health <= 0) { endGame("you loose because you got too sick"); }
    else if (health >= 100) { endGame("you loose because you were too health????? maybe some bad guys see your good health and eat your fresh meat up? idk"); }
    else if (sanity <= 0) { endGame("you loose because you went insane"); }
    else if (sanity >= 100) { endGame("you loose because you fall into a state of bliss and stop caring about survival believing everything is great, and die."); }
    else {


        newCard(currentScenario + 1);
        currentScenario++;
    }
}

function endGame(reason) {
    document.getElementById("card").remove();
    setTimeout(endScreen,3000);
    function endScreen() {
        alert(reason);
        location.reload();
    }
}


function newCard(sID) {
    var cardElem = document.getElementById("card");

    var newCardElem = cardElem.cloneNode(true);
    cardElem.parentNode.append(newCardElem);
    cardElem.remove();

    var infoElem = document.getElementById("cardInfo");
    var choiceElem = document.getElementById("cardChoices");

    infoElem.innerHTML = `<p>${scenarios[sID].text}</p>`;

    if (scenarios[sID].image) {
        //IMAGE FORMAT
    }

    choiceElem.innerHTML = "";
    scenarios[sID].choices.forEach((choice, i) => {
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
        if (stats[0] === tStats[0] && stats[1] === tStats[1] && stats[2] === tStats[2]) {
            clearInterval(interval);
        } else {
            stats.forEach((stat, i) => {
                if (stats[i] !== tStats[i]) {
                    if (stats[i] < tStats[i]) {
                        stats[i]++;
                    } else {
                        stats[i]--;
                    }
                    elems[i].style.width = `${stats[i]}%`;
                }
            });

        }
    }
}

newCard(0);