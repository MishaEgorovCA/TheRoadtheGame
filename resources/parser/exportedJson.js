rawJson = `{
"array": [
    {
        "id": 0,
        "scenario": "You, the father, and your boy are walking down a road south in an apocalyptic landscape. You push your cart of items and salvage what sources of food you can. Your goal is to survive. This means keeping your sanity as well.",
        "imageNameOfFile": "0.gif",
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
        "imageNameOfFile": "1.gif",
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
        "imageNameOfFile": "2.gif",
        "repeatable": false,
        "story": true,
        "locked": false,
        "choices": "Give the can of coca cola to the son",
        "effectsHungerHealthSanity": "[10, 10, 20]"
    },
    {
        "choices": "Drink it yourself",
        "effectsHungerHealthSanity": "[10, -10, 20]"
    },
    {
        "id": 3,
        "scenario": "You open your eyes to your wife standing in a white dress, wearing a white veil. ",
        "imageNameOfFile": "3.gif",
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
        "imageNameOfFile": "4.gif",
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
        "imageNameOfFile": "5.gif",
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
        "imageNameOfFile": "6.gif",
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
        "imageNameOfFile": "7.gif",
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
        "imageNameOfFile": "8.gif",
        "repeatable": false,
        "story": true,
        "locked": false,
        "choices": "Believe him and go to the truck with your son",
        "customDeath": "As soon as you get there they grab you and your son and kill you for a nice dinner meal.",
        "effectsHungerHealthSanity": "[0, -100, -100]"
    },
    {
        "choices": "Don’t believe him and attempt to take the man up the road. This way, you can turn him loose and escape with a head start.",
        "effectsHungerHealthSanity": "[0, 0, 20]",
        "chainedId": 9
    },
    {
        "id": 9,
        "scenario": "Not agreeing with you, the man lunges at the boy, knife in hand.",
        "imageNameOfFile": "9.gif",
        "repeatable": false,
        "story": true,
        "locked": false,
        "choices": "Shoot him.",
        "effectsHungerHealthSanity": "[0, 0, -30]",
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
        "imageNameOfFile": "10.gif",
        "repeatable": false,
        "story": true,
        "locked": false,
        "choices": "I must keep the boy alive.I need to run faster.",
        "effectsHungerHealthSanity": "[0, -10, 20]"
    },
    {
        "choices": "I’m tired. I don’t think I can carry the boy any faster.",
        "effectsHungerHealthSanity": "[0, 0, -20]"
    },
    {
        "id": 11,
        "scenario": "You are hungry and tired! You come across a once grand house high above the road. Tall with its white doric columns, the home dominated the field of dead grass.",
        "imageNameOfFile": "11.gif",
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
        "imageNameOfFile": "12.gif",
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
        "imageNameOfFile": "13.gif",
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
        "imageNameOfFile": "14.gif",
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
        "imageNameOfFile": "15.gif",
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
        "imageNameOfFile": "16.gif",
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
        "imageNameOfFile": "17.gif",
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
        "imageNameOfFile": "18.gif",
        "repeatable": false,
        "story": true,
        "locked": false,
        "choices": "YES",
        "effectsHungerHealthSanity": "[5, 5, 25]"
    },
    {
        "id": 19,
        "scenario": "Exploring homes in your surroundings, you come across a strange piece of plywood randomly placed on the grass field. Upon moving it, you discover another hatch.",
        "imageNameOfFile": "19.gif",
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
        "imageNameOfFile": "20.gif",
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
        "imageNameOfFile": "21.gif",
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
        "imageNameOfFile": "22.gif",
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
        "imageNameOfFile": "23.gif",
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
        "imageNameOfFile": "24.gif",
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
        "imageNameOfFile": "25.gif",
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
        "imageNameOfFile": "26.gif",
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
        "imageNameOfFile": "27.gif",
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
        "imageNameOfFile": "28.gif",
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
        "imageNameOfFile": "29.gif",
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
        "imageNameOfFile": "30.gif",
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
        "imageNameOfFile": "31.gif",
        "repeatable": true,
        "story": false,
        "storySection": false,
        "locked": false,
        "choices": "Find some tools and being working on the wheel.",
        "effectsHungerHealthSanity": "[-20, 0, 20]"
    },
    {
        "choices": "Continue on without fixing the wheel.",
        "effectsHungerHealthSanity": "[10, -20, -20]"
    },
    {
        "id": 32,
        "scenario": "You go to a smokehouse and find a “ham gambreled up in a high corner”(pg.17).",
        "imageNameOfFile": "32.gif",
        "repeatable": true,
        "story": false,
        "storySection": false,
        "locked": false,
        "choices": "Grab it and begin feasting with your son.",
        "effectsHungerHealthSanity": "[[30, 20, 30],[-30, -20, -30]]"
    },
    {
        "choices": "Study it and put it back. No way the ham is still good.",
        "effectsHungerHealthSanity": "[-10, -10, -10]"
    },
    {
        "id": 33,
        "scenario": "Looking over a valley you and your son see a dam down below, which intrigues him. He wants to “go down there and see it”(pg.20).",
        "imageNameOfFile": "33.gif",
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
        "imageNameOfFile": "34.gif",
        "repeatable": true,
        "story": false,
        "storySection": false,
        "locked": false,
        "choices": "Home canned tomatoes are not trustworthy.",
        "effectsHungerHealthSanity": "[-20, 10, -10]"
    },
    {
        "choices": "Food is food. You have to take advantage of what you find.",
        "effectsHungerHealthSanity": "[[20, 30, 20],[-20, -30, -20]]"
    },
    {
        "id": 35,
        "scenario": "The sound of an “earthquake”(pg.28) wakes both of you up. Your son cries due to the violent sounds it makes.",
        "imageNameOfFile": "35.gif",
        "repeatable": true,
        "story": false,
        "storySection": false,
        "locked": false,
        "choices": "Hug your son and tell him that it’s alright.",
        "effectsHungerHealthSanity": "[0, -10, 30]"
    },
    {
        "choices": "Ignore the noises that the earthquake and your son are making. Go back to sleep. It’s more important.",
        "effectsHungerHealthSanity": "[0, 10, -30]"
    },
    {
        "id": 36,
        "scenario": "You see a forest fire, “flaring and shimmering”(pg.31) in the intense cold. However, you feel like the colours triggered a memory that has been “long forgotten”",
        "imageNameOfFile": "36.gif",
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
        "imageNameOfFile": "37.gif",
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false,
        "choices": "Divide the hot cocoa between you and your son.",
        "effectsHungerHealthSanity": "[10, 10, 10]"
    },
    {
        "choices": "Give it all to your son.",
        "effectsHungerHealthSanity": "[-10, -10, -10]"
    },
    {
        "id": 38,
        "scenario": "You come across a long patch macadam(pg.49) on the road that is still warm and sticks to your shoes as you try to walk through it.",
        "imageNameOfFile": "38.gif",
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false,
        "choices": "Backtrack and wait for the macadam to cool before trudging on.",
        "effectsHungerHealthSanity": "[10, 20, 0]"
    },
    {
        "choices": "Don’t lose hope! Continue to walk through the sticky substance in order to maintain good time.",
        "effectsHungerHealthSanity": "[-10, -20, 0]"
    },
    {
        "id": 39,
        "scenario": "You spot a man who has “been struck by lightning”(pg.51). The boy, feeling pity, insists on helping the man.",
        "imageNameOfFile": "39.gif",
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false,
        "choices": "You are one of the good guys! Help the man in need.",
        "effectsHungerHealthSanity": "[-20, -20, 20]"
    },
    {
        "choices": "Your son is the number one priority.",
        "effectsHungerHealthSanity": "[10, 10, -20]"
    },
    {
        "id": 40,
        "scenario": "Your son randomly becomes eager to spend time with you. He asks if you want to play “cards”(pg.53).",
        "imageNameOfFile": "40.gif",
        "repeatable": true,
        "story": false,
        "storySection": false,
        "locked": false,
        "choices": "Cards are a waste of time and you need to continue looting houses.",
        "effectsHungerHealthSanity": "[10, 10, -30]"
    },
    {
        "choices": "Spending valuable time with your son is important.",
        "effectsHungerHealthSanity": "[-10, -10, 30]"
    },
    {
        "id": 41,
        "scenario": "The fire you made is quickly diminishing, and will require more wood to stay alive. You want to break up some branches but you’re afraid it might “wake the boy”. (pg.75)",
        "imageNameOfFile": "41.gif",
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
        "imageNameOfFile": "42.gif",
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false,
        "choices": "Go the extra mile, literally. Walk around in circles to confuse them.",
        "effectsHungerHealthSanity": "[-10, -10, 10]"
    },
    {
        "choices": "They won’t be able to find the tracks anyways.Save your stamina.",
        "effectsHungerHealthSanity": "[10, 10, -10]"
    },
    {
        "id": 43,
        "scenario": "You find a dog with it's tail between it's legs seemingly asking for food. Your son asks you if you can give it some food.",
        "imageNameOfFile": "43.gif",
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
        "effectsHungerHealthSanity": "[-20, -5, 30]",
        "unlocksId": 44,
        "locksId": 43
    },
    {
        "choices": "Eat the dog.",
        "effectsHungerHealthSanity": "[15, 0, -10]"
    },
    {
        "id": 44,
        "scenario": "YOU ARE HUNGRY. What do you do?",
        "imageNameOfFile": "44.gif",
        "repeatable": true,
        "story": false,
        "storySection": false,
        "locked": true,
        "choices": "Eat the dog.",
        "effectsHungerHealthSanity": "[20, 0, -20]",
        "unlocksId": 43,
        "locksId": 44
    },
    {
        "choices": "Keep going.",
        "effectsHungerHealthSanity": "[-20, 0, 10]"
    },
    {
        "id": 45,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 46,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 47,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 48,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 49,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 50,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 51,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 52,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 53,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 54,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 55,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 56,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 57,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 58,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 59,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 60,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
    },
    {
        "id": 61,
        "repeatable": false,
        "story": false,
        "storySection": false,
        "locked": false
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
]
}`;