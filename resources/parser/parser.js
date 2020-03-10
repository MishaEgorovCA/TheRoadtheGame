//var d = JSON.parse(rawJson).array;


function parse(d) {
    var s = [];

    var c = 0;

    d.forEach((d) => {
        if (d.scenario || d.choices) {
            if (d.id || d.id === 0) {
                c = d.id;
                s.push({});
                s[c].text = d.scenario;
                s[c].image = d.image ? d.image : false;
                s[c].choices = [{
                    text: d.choices,
                    customDeath: d.customDeath ? d.customDeath : false,
                    affects: d.effectsHungerHealthSanity ? JSON.parse(d.effectsHungerHealthSanity) : [0, 0, 0],
                    unlocks: d.unlocksId ? typeof d.unlocksId === "string" || d.unlocksId instanceof String ? d.unlocksId.replace("[", "").replace("]", "").split(", ").map(Number) : [d.unlocksId] : false,
                    locks: d.locksId ? typeof d.locksId === "string" || d.locksId instanceof String ? d.locksId.replace("[", "").replace("]", "").split(", ").map(Number) : [d.locksId] : false,
                    chained: d.chainedId ? typeof d.chainedId === "string" || d.chainedId instanceof String ? d.chainedId.replace("[", "").replace("]", "").split(", ").map(Number) : [d.chainedId] : false
                }];
                s[c].repeatable = d.repeatable ? d.repeatable : false;
                s[c].story = d.story ? d.story : false;
                s[c].locked = d.locked ? d.locked : false;
            } else {
                s[c].choices.push({
                    text: d.choices,
                    customDeath: d.customDeath ? d.customDeath : false,
                    affects: d.effectsHungerHealthSanity ? JSON.parse(d.effectsHungerHealthSanity) : [0, 0, 0],
                    unlocks: d.unlocksId ? typeof d.unlocksId === "string" || d.unlocksId instanceof String ? d.unlocksId.replace("[", "").replace("]", "").split(", ").map(Number) : [d.unlocksId] : false,
                    locks: d.locksId ? typeof d.locksId === "string" || d.locksId instanceof String ? d.locksId.replace("[", "").replace("]", "").split(", ").map(Number) : [d.locksId] : false,
                    chained: d.chainedId ? typeof d.chainedId === "string" || d.chainedId instanceof String ? d.chainedId.replace("[", "").replace("]", "").split(", ").map(Number) : [d.chainedId] : false
                });
            }
        }


    });

    var out = `const rawData = \`${JSON.stringify({ "scenarios": s }, null, 2)}\`;`;
    console.log(out);
    document.getElementById("o").innerHTML = out;
}