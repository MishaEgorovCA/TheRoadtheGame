var hunger = 50;
var health = 50;
var sanity = 50;

/*var rawFile = new XMLHttpRequest();
rawFile.open("GET", "resources/scenarios.json", false);
rawFile.onreadystatechange = function ()
{
    if(rawFile.readyState === 4)
    {
        if(rawFile.status === 200 || rawFile.status == 0)
        {
            var allText = rawFile.responseText;
            alert(allText);
        }
    }
}
rawFile.send(null);

var scenarios = JSON.parse(rawFile).scenarios;*/

function choice(cID) {

}

function newCard(sID) {
    var cardElem = document.getElementById("card");

    var newCardElem = cardElem.cloneNode(true);
    cardElem.parentNode.append(newCardElem);
    cardElem.remove();

    var infoElem = document.getElementById("cardInfo");
    var choiceElem = document.getElementById("cardChoices");

    infoElem.innerHTML = `<p>${scenarios[sID].text}</p>`;
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
            stats.forEach((stat,i) => {
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

