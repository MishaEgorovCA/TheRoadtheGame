rawJson = `{
"array": [
    {
        "id": 0,
        "scenario": "You, the father, and your boy are walking down a road south in an apocalyptic landscape. You push your cart of items and salvage what sources of food you can. Your goal is to survive. This means keeping your sanity as well.",
        "image": "0.gif",
        "repeatable": false,
        "story": true,
        "storySection": 1,
        "locked": false,
        "choices": "Begin",
        "effectsHungerHealthSanity": "[0, 0, 0]"
    },
    {
        "id": 1,
        "scenario": "You see a grocery store amongst the rubble. You want to enter but the ground is too rough to bring your cart in.",
        "image": "1.gif",
        "repeatable": false,
        "story": true,
        "storySection": 2,
        "locked": false,
        "choices": "Leave your cart in the lot and enter the store",
        "effectsHungerHealthSanity": "[5, -10, -10]",
        "chainedId": 2
    },
    {
        "choices": "Leave the store behind and continue on your journey",
        "effectsHungerHealthSanity": "[-5, 0, 10]"
    },
    {
        "effectsHungerHealthSanity": 1
    },
    {
        "id": 2,
        "scenario": "You find a vending machine. Using your arm, you run your hand inside the machine and pull out a can of Coca Cola.",
        "image": "2.gif",
        "repeatable": false,
        "story": true,
        "locked": false,
        "choices": "Give the can of coca cola to the son",
        "effectsHungerHealthSanity": "[10, 10, 20]"
    },
    {
        "choices": "Drink it yourself",
        "effectsHungerHealthSanity": "[10, -10, -10]"
    },
    {
        "id": 3,
        "scenario": "You open your eyes to your wife standing in a white dress, wearing a white veil. ",
        "image": "3.gif",
        "repeatable": false,
        "story": true,
        "storySection": 3,
        "locked": false,
        "choices": "Approach her and lift the veil",
        "effectsHungerHealthSanity": "[0, 10, -10]",
        "chainedId": 4
    },
    {
        "choices": "Remain still",
        "effectsHungerHealthSanity": "[0, 10, 10]",
        "chainedId": 4
    },
    {
        "id": 4,
        "scenario": "Another dream. This time you are caring for her as she is sick and lying in bed.",
        "image": "4.gif",
        "repeatable": false,
        "story": true,
        "locked": false,
        "choices": "You wish you were still with her",
        "effectsHungerHealthSanity": "[0, -10, -10]",
        "chainedId": 5
    },
    {
        "choices": "Now you must care for your son",
        "effectsHungerHealthSanity": "[0, -10, 10]",
        "chainedId": 5
    },
    {
        "id": 5,
        "scenario": "You open your wallet on the road, holding a picture of your wife in your hands.",
        "image": "5.gif",
        "repeatable": false,
        "story": true,
        "locked": false,
        "choices": "Hold the picture to your chest ",
        "customDeath": "You cannot live without her. You die with her picture in hand.",
        "effectsHungerHealthSanity": "[0, 0, -100]"
    },
    {
        "choices": "Leave the photo on the road",
        "effectsHungerHealthSanity": "[0, 0, 10]"
    },
    {
        "id": 6,
        "scenario": "You wake up to the sound of a truck and people marching down the road. Terrified, you quickly look around to find an escape.",
        "image": "6.gif",
        "repeatable": false,
        "story": true,
        "storySection": 4,
        "locked": false,
        "choices": "Run away as fast as you can. Leave the cart as it is not as valuable as your son’s life.",
        "effectsHungerHealthSanity": "[-100, -100, -100]"
    },
    {
        "choices": "Hide and wait. ",
        "effectsHungerHealthSanity": "[-10, 0, 0]",
        "chainedId": 7
    },
    {
        "id": 7,
        "scenario": "One man walks off the road and notices your presence. You both freeze, eyes locked onto each other.",
        "image": "7.gif",
        "repeatable": false,
        "story": true,
        "locked": false,
        "choices": "Gesture him to come towards you while locking your pistol onto his head.",
        "effectsHungerHealthSanity": "[0, 0, -10]",
        "chainedId": 8
    },
    {
        "choices": "Run away with your son as you have already been spotted",
        "customDeath": "He shouts to the others and they hunt you down for a nice dinner meal.",
        "effectsHungerHealthSanity": "[-100, -100, 0]"
    },
    {
        "id": 8,
        "scenario": "The rough looking man comes towards you and offers to feed your son  if you both come on the truck.",
        "image": "8.gif",
        "repeatable": false,
        "story": true,
        "locked": false,
        "choices": "Believe him and go to the truck with your son",
        "customDeath": "As soon as you get there they grab you and your son and kill you for a nice dinner meal.",
        "effectsHungerHealthSanity": "[0, -100, -100]"
    },
    {
        "choices": "Don’t believe him and attempt to take the man up the road. This way, you can turn him loose and escape with a head start.",
        "effectsHungerHealthSanity": "[0, 0, 10]",
        "chainedId": 9
    },
    {
        "id": 9,
        "scenario": "Not agreeing with you, the man lunges at the boy, knife in hand.",
        "image": "9.gif",
        "repeatable": false,
        "story": true,
        "locked": false,
        "choices": "Shoot him.",
        "effectsHungerHealthSanity": "[0, 0, -20]",
        "chainedId": 10
    },
    {
        "choices": "Don’t waste a bullet. You can take him on with your fists.",
        "customDeath": "He ends up overpowering you, killing you. What were you thinking, using fists in a knife fight?!",
        "effectsHungerHealthSanity": "[0, -100]"
    },
    {
        "id": 10,
        "scenario": "Alerting the other men, you grab your son and begin to run into the woods.",
        "image": "10.gif",
        "repeatable": false,
        "story": true,
        "locked": false,
        "choices": "I must keep the boy alive. I need to run faster.",
        "effectsHungerHealthSanity": "[0, -10, 20]",
        "chainedId": 46
    },
    {
        "choices": "I’m tired. I don’t think I can carry the boy any faster.",
        "effectsHungerHealthSanity": "[0, 0, -20]",
        "chainedId": 46
    },
    {
        "id": 11,
        "scenario": "You are hungry and tired! You come across a once grand house high above the road. Tall with its white doric columns, the home dominated the field of dead grass.",
        "image": "11.gif",
        "repeatable": false,
        "story": true,
        "storySection": 5,
        "locked": false,
        "choices": "Risk it and go in for shelter",
        "effectsHungerHealthSanity": "[0, 0, -5]",
        "chainedId": 12
    },
    {
        "choices": "Leave it. People might live there.",
        "effectsHungerHealthSanity": "[-10, 0, 0]"
    },
    {
        "id": 12,
        "scenario": "As you explore the home you come across a room with a hatch in the floor. Its locked with a padlock.",
        "image": "12.gif",
        "repeatable": false,
        "story": true,
        "locked": false,
        "choices": "Open the door",
        "effectsHungerHealthSanity": "[0, 0, -5]",
        "chainedId": 13
    },
    {
        "choices": "Leave the home",
        "effectsHungerHealthSanity": "[0, -10, 0]"
    },
    {
        "id": 13,
        "scenario": "You open the door and see absolute darkness.",
        "image": "13.gif",
        "repeatable": false,
        "story": true,
        "locked": false,
        "choices": "Use your light to go in and explore",
        "effectsHungerHealthSanity": "[0, 0, -5]",
        "chainedId": 14
    },
    {
        "choices": "Close the door and avoid the darkness",
        "effectsHungerHealthSanity": "[0, -10, 0]"
    },
    {
        "id": 14,
        "scenario": "As you walk in through the cold and damp dark cellar you feel the ungodly stench in the air. As you walk around you see strange shapes in the darkness.",
        "image": "14.gif",
        "repeatable": false,
        "story": true,
        "locked": false,
        "choices": "Shine the light on them",
        "effectsHungerHealthSanity": "[0, 0, -5]",
        "chainedId": 15
    },
    {
        "choices": "Avoid them. It could mean trouble",
        "effectsHungerHealthSanity": "[0, 0, 0]"
    },
    {
        "id": 15,
        "scenario": "As you shined the light on the figurines you see a man with legs gone to the hip. The remaining blackened and burned stumps hurt your eyes. ",
        "image": "15.gif",
        "repeatable": false,
        "story": true,
        "locked": false,
        "choices": "Eat them as well. Food will sate the hunger",
        "effectsHungerHealthSanity": "[20, 5, -45]"
    },
    {
        "choices": "Free them. It is the moral thing to do.",
        "effectsHungerHealthSanity": "[0, 0, 0]",
        "chainedId": "[16, 17, 18]"
    },
    {
        "choices": "Leave them be. Its the survivor move.",
        "effectsHungerHealthSanity": "[0, 0, 0]"
    },
    {
        "id": 16,
        "scenario": "As you try to help the prisoners, the cannibals catch you and imprison you in this very cellar. You will continue to be eaten until the day you die.",
        "image": "16.gif",
        "repeatable": false,
        "story": true,
        "locked": false,
        "choices": "Oh no.",
        "customDeath": "The cannibals made a nice dinner out of you.",
        "effectsHungerHealthSanity": "[0, -100, 0]"
    },
    {
        "id": 17,
        "scenario": "As you try to help the prisoners, they attack and eat you. There are no good guys in the world.",
        "image": "17.gif",
        "repeatable": false,
        "story": true,
        "locked": false,
        "choices": "Oh no.",
        "customDeath": "The prisoners made a nice dinner out of you.",
        "effectsHungerHealthSanity": "[0, -100, 0]"
    },
    {
        "id": 18,
        "scenario": "You made the moral and pragmatic choice. The prisoners thank you and offer you supplies to aid in your journey.",
        "image": "18.gif",
        "repeatable": false,
        "story": true,
        "locked": false,
        "choices": "YES",
        "effectsHungerHealthSanity": "[5, 5, 25]"
    },
    {
        "id": 19,
        "scenario": "Exploring homes in your surroundings, you come across a strange piece of plywood randomly placed on the grass field. Upon moving it, you discover another hatch.",
        "image": "19.gif",
        "repeatable": false,
        "story": true,
        "storySection": 6,
        "locked": false,
        "choices": "Leave it. You do not know what could be in there",
        "effectsHungerHealthSanity": "[-5, 0, 5]"
    },
    {
        "choices": "Explore it. Maybe it will help.",
        "chainedId": 20
    },
    {
        "id": 20,
        "scenario": "As you enter the hatch through the ground you discover that the risk brought rewards. You see a bunker with beds and food. ",
        "image": "20.gif",
        "repeatable": false,
        "story": true,
        "locked": false,
        "choices": "Take a risk and stay the night for safe shelter.",
        "effectsHungerHealthSanity": "[10, 10, -5]",
        "chainedId": "[22, 21]"
    },
    {
        "choices": "Run and hide. The person who stocked this bunker hid it for a reason",
        "effectsHungerHealthSanity": "[-10, -10, 5]"
    },
    {
        "id": 21,
        "scenario": "The cannibals found you and eat you",
        "image": "21.gif",
        "repeatable": false,
        "story": true,
        "locked": false,
        "choices": "Oh no.",
        "customDeath": "The cannibals made a nice dinner out of you.",
        "effectsHungerHealthSanity": "[0, -100, 0]"
    },
    {
        "id": 22,
        "scenario": "You stayed a night and have gotten some rest. ",
        "image": "22.gif",
        "repeatable": false,
        "story": true,
        "locked": false,
        "choices": "Risk another night ",
        "effectsHungerHealthSanity": "[5, 5, -5]",
        "chainedId": "[22, 21]"
    },
    {
        "choices": "Leave and give up the shelter and food source. The owner of the bunker could come back.",
        "effectsHungerHealthSanity": "[-5, 0, 5]"
    },
    {
        "id": 23,
        "scenario": "You see an old man walking down the road",
        "image": "23.gif",
        "repeatable": false,
        "story": true,
        "storySection": 7,
        "locked": false,
        "choices": "Steal from him",
        "effectsHungerHealthSanity": "[5, 0, -10]"
    },
    {
        "choices": "Hide from him"
    },
    {
        "choices": "Offer to help him",
        "effectsHungerHealthSanity": "[-5, 0, 10]",
        "chainedId": 24
    },
    {
        "id": 24,
        "scenario": "As you sit and eat with the old man, he speaks of how he lost faith in humanity. firmly stating that there is no God, he explains that he trusts no one.",
        "image": "24.gif",
        "repeatable": false,
        "story": true,
        "locked": false,
        "choices": "Hopelessly agree with the man that God is gone ",
        "effectsHungerHealthSanity": "[0, 0, -10]"
    },
    {
        "choices": "Argue with the man that God is still watching over you",
        "effectsHungerHealthSanity": "[0, 0, 10]"
    },
    {
        "id": 25,
        "scenario": "As you progress on you journey down the road, you come to a beach and see the gray ocean with despair. ",
        "image": "25.gif",
        "repeatable": false,
        "story": true,
        "storySection": 8,
        "locked": false,
        "choices": "Explore the beach, maybe you will find something ",
        "effectsHungerHealthSanity": "[0, 0, 0]",
        "chainedId": 26
    },
    {
        "choices": "Avoid the beach. Tides and quicksand could be very dangerous.",
        "effectsHungerHealthSanity": "[0, 0, 0]"
    },
    {
        "id": 26,
        "scenario": "You walk down the shoreline and see an abandoned ship ",
        "image": "26.gif",
        "repeatable": false,
        "story": true,
        "locked": false,
        "choices": "Investigate it",
        "effectsHungerHealthSanity": "[0, 0, 0]",
        "chainedId": 27
    },
    {
        "choices": "Leave it alone",
        "effectsHungerHealthSanity": "[0, 0, 0]"
    },
    {
        "id": 27,
        "scenario": "Upon investigation you discover food and a flare gun that can aid you in your journey",
        "image": "27.gif",
        "repeatable": false,
        "story": true,
        "locked": false,
        "choices": "Take the food and go find shelter",
        "effectsHungerHealthSanity": "[10, 0, 0]"
    },
    {
        "choices": "Stay a night on the ship",
        "effectsHungerHealthSanity": "[10, 10, 10]",
        "chainedId": 28
    },
    {
        "id": 28,
        "scenario": "Upon the next morning, you wake up and see that the ship is mainly damaged on the deck and that the hull is intact. Your instincts tells you to take advantage of this",
        "image": "28.gif",
        "repeatable": false,
        "story": true,
        "locked": false,
        "choices": "Make the necessary repairs and sail to the seas. The ocean has less cannibals than the road.",
        "customDeath": "Your lack of experience in sailing causes the ship to capsize, drowning you at the bottom of the sea.",
        "effectsHungerHealthSanity": "[0, -100, 0]"
    },
    {
        "choices": "Leave the ship alone. You do not want to tempt fate.",
        "effectsHungerHealthSanity": "[0, 0, 0]"
    },
    {
        "id": 29,
        "scenario": "You get shot with an arrow.",
        "image": "29.gif",
        "repeatable": false,
        "story": true,
        "storySection": 9,
        "locked": false,
        "choices": "Quickly retaliate with whatever weapon you have in your possession",
        "effectsHungerHealthSanity": "[0, -10, 0]",
        "chainedId": 30
    },
    {
        "choices": "Withdraw and run away",
        "effectsHungerHealthSanity": "[0, 0, 0]",
        "chainedId": 30
    },
    {
        "id": 30,
        "scenario": "The arrow wound is dripping with blood. How will you act to deal with this",
        "image": "30.gif",
        "repeatable": false,
        "story": true,
        "locked": false,
        "choices": "Keep the arrow in, you can handle it",
        "customDeath": "Nope. Turns out you can't handle it. You die from the arrow.",
        "effectsHungerHealthSanity": "[0, -100, 0]"
    },
    {
        "choices": "Take the arrow out and operate on the wound",
        "customDeath": "Your lack of experience with medical practices caused the wound to become infected and you die.",
        "effectsHungerHealthSanity": "[[0, 5, 0],[ 0, -100, 0]]"
    },
    {
        "id": 31,
        "scenario": "The wheel on your cart begins to loosen and is not working very efficiently, making it difficult to push around. Looks like it needs to be “bolted”(pg.17).",
        "image": "31.gif",
        "repeatable": true,
        "story": false,
        "storySection": false,
        "locked": false,
        "choices": "Find some tools and being working on the wheel.",
        "effectsHungerHealthSanity": "[-20, 0, 20]"
    },
    {
        "choices": "Continue on without fixing the wheel.",
        "effectsHungerHealthSanity": "[10, -15, -15]"
    },
    {
        "id": 32,
        "scenario": "You go to a smokehouse and find a “ham gambreled up in a high corner”(pg.17).",
        "image": "32.gif",
        "repeatable": true,
        "story": false,
        "storySection": false,
        "locked": false,
        "choices": "Grab it and begin feasting with your son.",
        "effectsHungerHealthSanity": "[[20, 15, 15],[-20, -15, -15]]"
    },
    {
        "choices": "Study it and put it back. No way the ham is still good.",
        "effectsHungerHealthSanity": "[-10, -10, -10]"
    },
    {
        "id": 33,
        "scenario": "Looking over a valley you and your son see a dam down below, which intrigues him. He wants to “go down there and see it”(pg.20).",
        "image": "33.gif",
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false,
        "choices": "Tell him that it is too far and that the view from here is good enough.",
        "effectsHungerHealthSanity": "[20, 10, -10]"
    },
    {
        "choices": "Listen to your son and make your way down the hill to take a closer look at the dam.",
        "effectsHungerHealthSanity": "[-20, -20, 20]"
    },
    {
        "id": 34,
        "scenario": "Walking into a home, you see three cans of “home canned tomatoes”(pg.22). You study them carefully.",
        "image": "34.gif",
        "repeatable": true,
        "story": false,
        "storySection": false,
        "locked": false,
        "choices": "Home canned tomatoes are not trustworthy.",
        "effectsHungerHealthSanity": "[-20, 10, -10]"
    },
    {
        "choices": "Food is food. You have to take advantage of what you find.",
        "effectsHungerHealthSanity": "[[20, 25, 10],[-20, -25, -10]]"
    },
    {
        "id": 35,
        "scenario": "The sound of an “earthquake”(pg.28) wakes both of you up. Your son cries due to the violent sounds it makes.",
        "image": "35.gif",
        "repeatable": true,
        "story": false,
        "storySection": false,
        "locked": false,
        "choices": "Hug your son and tell him that it’s alright.",
        "effectsHungerHealthSanity": "[0, -10, 20]"
    },
    {
        "choices": "Ignore the noises that the earthquake and your son are making. Go back to sleep. It’s more important.",
        "effectsHungerHealthSanity": "[0, 10, -20]"
    },
    {
        "id": 36,
        "scenario": "You see a forest fire, “flaring and shimmering”(pg.31) in the intense cold. However, you feel like the colours triggered a memory that has been “long forgotten”",
        "image": "36.gif",
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false,
        "choices": "Ponder into deep thoughts as you stare at the fire.",
        "effectsHungerHealthSanity": "[-10, -20, 20]"
    },
    {
        "choices": "Remove yourself from the trance and continue on the road.",
        "effectsHungerHealthSanity": "[10, 10, 0]"
    },
    {
        "id": 37,
        "scenario": "You decide to make some hot chocolate with one of the last remaining packets of “cocoa”(pg. 34).",
        "image": "37.gif",
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false,
        "choices": "Divide the hot cocoa between you and your son.",
        "effectsHungerHealthSanity": "[10, -10, 10]"
    },
    {
        "choices": "Give it all to your son.",
        "effectsHungerHealthSanity": "[-10, 10, -10]"
    },
    {
        "id": 38,
        "scenario": "You come across a long patch macadam(pg.49) on the road that is still warm and sticks to your shoes as you try to walk through it.",
        "image": "38.gif",
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false,
        "choices": "Backtrack and wait for the macadam to cool before trudging on.",
        "effectsHungerHealthSanity": "[10, 10, 0]"
    },
    {
        "choices": "Don’t lose hope! Continue to walk through the sticky substance in order to maintain good time.",
        "effectsHungerHealthSanity": "[-10, -10, 0]"
    },
    {
        "id": 39,
        "scenario": "You spot a man who has “been struck by lightning”(pg.51). The boy, feeling pity, insists on helping the man.",
        "image": "39.gif",
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false,
        "choices": "You are one of the good guys! Help the man in need.",
        "effectsHungerHealthSanity": "[-10, -15, 15]"
    },
    {
        "choices": "Your son is the number one priority.",
        "effectsHungerHealthSanity": "[10, 10, -20]"
    },
    {
        "id": 40,
        "scenario": "Your son randomly becomes eager to spend time with you. He asks if you want to play “cards”(pg.53).",
        "image": "40.gif",
        "repeatable": true,
        "story": false,
        "storySection": false,
        "locked": false,
        "choices": "Cards are a waste of time and you need to continue looting houses.",
        "effectsHungerHealthSanity": "[10, 10, -20]"
    },
    {
        "choices": "Spending valuable time with your son is important.",
        "effectsHungerHealthSanity": "[-10, -10, 20]"
    },
    {
        "id": 41,
        "scenario": "The fire you made is quickly diminishing, and will require more wood to stay alive. You want to break up some branches but you’re afraid it might “wake the boy”. (pg.75)",
        "image": "41.gif",
        "repeatable": true,
        "story": false,
        "storySection": false,
        "locked": false,
        "choices": "A fire is necessary for the boy’s survival and so waking him up won’t be a big deal.",
        "effectsHungerHealthSanity": "[0, 10, -10]"
    },
    {
        "choices": "Waking him up would ruin his sleep.",
        "effectsHungerHealthSanity": "[0, -10, 10]"
    },
    {
        "id": 42,
        "scenario": "You hear the sound of a truck and you’re afraid that the snow tracks that you’ve made will get traced. ",
        "image": "42.gif",
        "repeatable": true,
        "story": false,
        "storySection": false,
        "locked": false,
        "choices": "Go the extra mile, literally. Walk around in circles to confuse them.",
        "effectsHungerHealthSanity": "[-5, -5, 10]"
    },
    {
        "choices": "They won’t be able to find the tracks anyways.Save your stamina.",
        "effectsHungerHealthSanity": "[10, 10, -10]",
        "unlocksId": 53,
        "locksId": 42
    },
    {
        "id": 43,
        "scenario": "You find a dog with it's tail between it's legs seemingly asking for food. Your son asks you if you can give it some food.",
        "image": "43.gif",
        "repeatable": true,
        "story": false,
        "storySection": false,
        "locked": false,
        "choices": "Pet the dog an let it go.",
        "effectsHungerHealthSanity": "[0, -5, 10]"
    },
    {
        "choices": "Leave the dog alone.",
        "effectsHungerHealthSanity": "[0, 0, -10]"
    },
    {
        "choices": "Give the dog some food.",
        "effectsHungerHealthSanity": "[-20, 0, 10]"
    },
    {
        "choices": "Keep the dog.",
        "effectsHungerHealthSanity": "[-20, -5, 35]",
        "unlocksId": "[44, 51, 52]",
        "locksId": 43
    },
    {
        "choices": "Eat the dog.",
        "effectsHungerHealthSanity": "[20, 0, -20]"
    },
    {
        "id": 44,
        "scenario": "YOU ARE HUNGRY. What do you do?",
        "image": "44.gif",
        "repeatable": true,
        "story": false,
        "storySection": false,
        "locked": true,
        "choices": "Eat your dog.",
        "effectsHungerHealthSanity": "[15, 0, -25]",
        "unlocksId": 43,
        "locksId": "[44, 51, 52]"
    },
    {
        "choices": "Keep going.",
        "effectsHungerHealthSanity": "[-10, 0, 10]"
    },
    {
        "id": 45,
        "scenario": "While the boy's sleeping, you decide to investigate a nearby farm. You find that there are rotting apples scattered around an orcid.",
        "image": "45.gif",
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false,
        "choices": "Eat some of the apples.",
        "effectsHungerHealthSanity": "[20, -10, -10]"
    },
    {
        "choices": "Collect the apples and bring them back to the boy to the boy to eat together.",
        "effectsHungerHealthSanity": "[20, -20, 10]"
    },
    {
        "choices": "Leave the apples.",
        "effectsHungerHealthSanity": "[-10, 0, -10]"
    },
    {
        "id": 46,
        "scenario": "You narrowly escape and slowly bring yourself and the boy back around to where you left the cart.",
        "image": "46.gif",
        "repeatable": false,
        "story": true,
        "storySection": 4,
        "locked": false,
        "choices": "Carry on down the road",
        "effectsHungerHealthSanity": "[5, -5, 5]"
    },
    {
        "choices": "Rest here for a bit.",
        "effectsHungerHealthSanity": "[10, 10, -5]"
    },
    {
        "id": 47,
        "scenario": "Its getting dark and you are tired from a long journey.",
        "image": "47.gif",
        "repeatable": true,
        "story": false,
        "storySection": false,
        "locked": false,
        "choices": "Sleep on the road",
        "effectsHungerHealthSanity": "[0, 10, -10]"
    },
    {
        "choices": "Get off the road and sleep in the plains",
        "effectsHungerHealthSanity": "[-5, 10, 10]"
    },
    {
        "id": 48,
        "scenario": "You are hungry and see a family in the distance.",
        "image": "48.gif",
        "repeatable": true,
        "story": false,
        "storySection": false,
        "locked": false,
        "choices": "Attack and eat them",
        "effectsHungerHealthSanity": "[15, 5, -10]"
    },
    {
        "choices": "Introduce youself. They look friendly, They might have food.",
        "effectsHungerHealthSanity": "[10, 10, 10]"
    },
    {
        "choices": "Stay away from them. You must not trust anyone",
        "effectsHungerHealthSanity": "[-5, 0, 0]"
    },
    {
        "id": 49,
        "scenario": "You see a group of men walk buy with shotguns.",
        "image": "49.gif",
        "repeatable": true,
        "story": false,
        "storySection": false,
        "locked": false,
        "choices": "Attack and eat them",
        "customDeath": "The men were noticed you sneakign up on them and shot you dead",
        "effectsHungerHealthSanity": "[0, -100, 0]"
    },
    {
        "choices": "Hide",
        "effectsHungerHealthSanity": "[0, 0, 10]"
    },
    {
        "choices": "Introduce yourself. They could be allies",
        "effectsHungerHealthSanity": "[0, 0, 0]",
        "chainedId": 50
    },
    {
        "id": 50,
        "scenario": "The men saw your self-introuction as weakness and decided to beat you up to teach you a lesson",
        "image": "50.gif",
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": true,
        "choices": "Owch!",
        "effectsHungerHealthSanity": "[0, -15, -5]"
    },
    {
        "id": 51,
        "scenario": "Your dog leads you to an abandoned home with perfectly preserved canned food. ",
        "image": "51.gif",
        "repeatable": true,
        "story": false,
        "storySection": false,
        "locked": true,
        "choices": "Eat the food and thank your dog; it as a great idea to bring him.",
        "effectsHungerHealthSanity": "[10, 10, 10]"
    },
    {
        "choices": "Leave the food. You have enough",
        "effectsHungerHealthSanity": "[-10, 0, 0]"
    },
    {
        "id": 52,
        "scenario": "Your dog is injured. He scratched his paw. He will need a few weeks rest.",
        "image": "52.gif",
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": true,
        "choices": "Put the dog on the cart and fix his paw. He is family",
        "effectsHungerHealthSanity": "[-10, -5, 15]",
        "locksId": 52
    },
    {
        "choices": "Kill him and put him of his misery.",
        "effectsHungerHealthSanity": "[0, 0, -15]",
        "unlocksId": 43,
        "locksId": "[44, 51, 52]"
    },
    {
        "choices": "Leave him behind",
        "effectsHungerHealthSanity": "[0, 0, -15]",
        "unlocksId": 43,
        "locksId": "[44, 51, 52]"
    },
    {
        "choices": "Eat him now",
        "effectsHungerHealthSanity": "[15, 0, -25]",
        "unlocksId": 43,
        "locksId": "[44, 51, 52]"
    },
    {
        "id": 53,
        "scenario": "The men from the truck found you and are closing in on your position.",
        "image": "53.gif",
        "repeatable": true,
        "story": false,
        "storySection": false,
        "locked": true,
        "choices": "Run off the road for saftey",
        "effectsHungerHealthSanity": "[-5, -5, 5]"
    },
    {
        "choices": "Stay and fight. You could ty to hijack the truck.",
        "customDeath": "You used a cadaver to stop the truck, but as you attacked the drivers, a group of men jumped out from the back of the truck and captured you for later consumption. ",
        "effectsHungerHealthSanity": "[0, -100, 0]"
    },
    {
        "id": 54,
        "scenario": "On the road, you pass a sleeping man with supplies.",
        "image": "54.gif",
        "repeatable": true,
        "story": false,
        "storySection": false,
        "locked": false,
        "choices": "Kill him and take his supplies",
        "effectsHungerHealthSanity": "[10, 10, -10]"
    },
    {
        "choices": "Leave him alone",
        "effectsHungerHealthSanity": "[0, 0, 0]"
    },
    {
        "choices": "Leave him some of your food and supplies",
        "effectsHungerHealthSanity": "[-10, -10, 10]"
    },
    {
        "id": 55,
        "scenario": "You spot a kitten on your jounrey.",
        "image": "55.gif",
        "repeatable": true,
        "story": false,
        "storySection": false,
        "locked": false,
        "choices": "Follow it",
        "effectsHungerHealthSanity": "[0, 0, 0]",
        "chainedId": 56
    },
    {
        "choices": "Ignore it",
        "effectsHungerHealthSanity": "[0, 0, 0]"
    },
    {
        "id": 56,
        "scenario": "That cat leads you to a store with supplies. As you sit and rest, you see him playing with shoelaces. Upon investigation you see it has an entire collection of shoes.",
        "image": "56.gif",
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": true,
        "choices": "Take some supplies and new shoes",
        "effectsHungerHealthSanity": "[10, 10, 15]"
    },
    {
        "choices": "Take new shoes",
        "effectsHungerHealthSanity": "[0, 10, 15]"
    },
    {
        "choices": "Leave everything",
        "effectsHungerHealthSanity": "[0, -5, 0]"
    },
    {
        "id": 57,
        "scenario": "You come upon the ruins of Atlanta.",
        "image": "57.gif",
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false,
        "choices": "Explore them",
        "effectsHungerHealthSanity": "[0, -5, 10]",
        "chainedId": 58
    },
    {
        "choices": "Cities arent safe. Keep travelling.",
        "effectsHungerHealthSanity": "[0, 0, -5]"
    },
    {
        "id": 58,
        "scenario": "As you explore it you see the end of a once great city. Everything is gray and in ruins.",
        "image": "58.gif",
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": true,
        "choices": "Go to the library and read some books. You must preserve the flame.",
        "effectsHungerHealthSanity": "[0, 0, 15]",
        "chainedId": 59
    },
    {
        "choices": "Go to find some safe place to stay over night",
        "effectsHungerHealthSanity": "[0, 0, 0]",
        "chainedId": 61
    },
    {
        "choices": "Go find a store for food",
        "effectsHungerHealthSanity": "[10, 5, 5]",
        "chainedId": 60
    },
    {
        "choices": "Run away. The city looks dangrous. ",
        "effectsHungerHealthSanity": "[-5, 0 ,5]"
    },
    {
        "id": 59,
        "scenario": "You found the destroyed library. Some walls are gone and the building is crumbling. Howevr, you deicde to read some books. You had some laugh and even found a survival guide. However, it is getting dark and late.",
        "image": "59.gif",
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": true,
        "choices": "Stay in the library",
        "customDeath": "The building is old and crumbling. During the night, a support beam failed and a tonne of rubble crashed down on you.",
        "effectsHungerHealthSanity": "[0, -100, 0]"
    },
    {
        "choices": "Go find shelter elsewhere",
        "effectsHungerHealthSanity": "[0, 0, 0]",
        "chainedId": 61
    },
    {
        "choices": "Leave the city"
    },
    {
        "id": 60,
        "scenario": "You find a supermarket and some food. However, it is getting dark and late.",
        "image": "60.gif",
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": true,
        "choices": "Stay in the store",
        "customDeath": "Although you the pragmatic choice by staying in an intact building with food, the bad guys have thought of that too. They found you and attacked you.",
        "effectsHungerHealthSanity": "[0, -100, 0]"
    },
    {
        "choices": "Go find shelter elsewhere",
        "effectsHungerHealthSanity": "[0, 0, 0]",
        "chainedId": 61
    },
    {
        "choices": "Leave the city"
    },
    {
        "id": 61,
        "scenario": "You find a nice intact looking home. ",
        "image": "61.gif",
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": true,
        "choices": "Stay the night and sleep in bed for saftey",
        "customDeath": "You took a chance and slept in bed. Turns out, the bad guys live in this home. They found you in their bed and decided to kill you.",
        "effectsHungerHealthSanity": "[[0, -100, 0],[0, 10, 10]]"
    },
    {
        "choices": "Stay the night but hide. You might not get much sleep.",
        "effectsHungerHealthSanity": "[0, 0, -5]"
    },
    {
        "choices": "Leave the city. The house looks suspicious.",
        "effectsHungerHealthSanity": "[0, -5, -10]"
    },
    {
        "id": 62,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 63,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 64,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 65,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 66,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 67,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 68,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 69,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 70,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 71,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 72,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 73,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 74,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 75,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 76,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 77,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 78,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 79,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 80,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 81,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 82,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 83,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 84,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 85,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 86,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 87,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 88,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 89,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 90,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 91,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 92,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 93,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 94,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 95,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 96,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 97,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 98,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 99,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 100,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 101,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 102,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 103,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 104,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 105,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 106,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 107,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 108,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 109,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 110,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 111,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 112,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 113,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 114,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 115,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 116,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 117,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 118,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 119,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 120,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 121,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 122,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 123,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 124,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 125,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 126,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 127,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 128,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 129,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    }
]}`;