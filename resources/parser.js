var d = JSON.parse(rawJson).array;

var s = [];

var c = 0;

var out;

d.forEach((d, i) => {
    if (d.scenario || d.choices) {
        if (d.id || d.id === 0) {
            c = d.id;
            s.push({});
            s[c].text = d.scenario;
            s[c].image = d.image ? d.image : false;
            s[c].choices = [{ "text": d.choices, "affects": d.effectsHungerHealthSanity, "unlocks": d.unlocksId ? [d.unlocksId] : false, "locks": d.unlocksId ? [d.unlocksId] : false, "chained": d.chainedId ? typeof d.chainedId === "string" || d.chainedId instanceof String ? d.chainedId : [d.chainedId] : false}];
            s[c].repeatable = d.repeatable ? d.repeatable : false;
            s[c].story = d.story ? d.story : false;
            s[c].locked = d.locked ? d.locked : false;
        } else {
            s[c].choices.push({ "text": d.choices, "affects": d.effectsHungerHealthSanity, "unlocks": d.unlocksId ? [d.unlocksId] : false, "locks": d.unlocksId ? [d.unlocksId] : false, "chained": d.chainedId ? typeof d.chainedId === "string" || d.chainedId instanceof String ? d.chainedId : [d.chainedId] : false });
        }
    }


});

out = JSON.stringify({ "scenarios": s }, null, 2).replace(/"\[/g, "[").replace(/]"/g, "]");
console.log(out);
document.getElementById("a").innerHTML = out;