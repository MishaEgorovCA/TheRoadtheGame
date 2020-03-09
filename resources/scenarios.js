const rawData = `
{
  "scenarios": [
    {
      "text": "You, the father, and your boy are walking down a road south in an apocalyptic landscape. You push your cart of items and salvage what sources of food you can. Your goal is to survive. This means keeping your sanity as well.",
      "image": false,
      "choices": [
        {
          "text": "Begin",
          "customDeath": false,
          "affects": [0, 0, 0],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": false,
      "story": true,
      "locked": false
    },
    {
      "text": "You see a grocery store amongst the rubble. You want to enter but the ground is too rough to bring your cart in.",
      "image": false,
      "choices": [
        {
          "text": "Leave your cart in the lot and enter the store",
          "customDeath": false,
          "affects": [5, -10, -10],
          "unlocks": false,
          "locks": false,
          "chained": [
            2
          ]
        },
        {
          "text": "Leave the store behind and continue on your journey",
          "customDeath": false,
          "affects": [-5, 0, 10],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": false,
      "story": true,
      "locked": false
    },
    {
      "text": "You find a vending machine. Using your arm, you run your hand inside the machine and pull out a can of Coca Cola.",
      "image": false,
      "choices": [
        {
          "text": "Give the can of coca cola to the son",
          "customDeath": false,
          "affects": [10, 10, 20],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "Drink it yourself",
          "customDeath": false,
          "affects": [10, -10, 20],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": false,
      "story": true,
      "locked": false
    },
    {
      "text": "You open your eyes to your wife standing in a white dress, wearing a white veil. ",
      "image": false,
      "choices": [
        {
          "text": "Approach her and lift the veil",
          "customDeath": false,
          "affects": [0, 10, -10],
          "unlocks": false,
          "locks": false,
          "chained": [
            4
          ]
        },
        {
          "text": "Remain still",
          "customDeath": false,
          "affects": [0, 10, 10],
          "unlocks": false,
          "locks": false,
          "chained": [
            4
          ]
        }
      ],
      "repeatable": false,
      "story": true,
      "locked": false
    },
    {
      "text": "Another dream. This time you are caring for her as she is sick and lying in bed.",
      "image": false,
      "choices": [
        {
          "text": "You wish you were still with her",
          "customDeath": false,
          "affects": [0, -10, -10],
          "unlocks": false,
          "locks": false,
          "chained": [
            5
          ]
        },
        {
          "text": "Now you must care for your son",
          "customDeath": false,
          "affects": [0, -10, 10],
          "unlocks": false,
          "locks": false,
          "chained": [
            5
          ]
        }
      ],
      "repeatable": false,
      "story": true,
      "locked": false
    },
    {
      "text": "You open your wallet on the road, holding a picture of your wife in your hands.",
      "image": false,
      "choices": [
        {
          "text": "Hold the picture to your chest ",
          "customDeath": "You cannot live without her. You die with her picture in hand.",
          "affects": [0, 0, -100],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "Leave the photo on the road",
          "customDeath": false,
          "affects": [0, 0, 10],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": false,
      "story": true,
      "locked": false
    },
    {
      "text": "You wake up to the sound of a truck and people marching down the road. Terrified, you quickly look around to find an escape.",
      "image": false,
      "choices": [
        {
          "text": "Run away as fast as you can. Leave the cart as it is not as valuable as your son’s life.",
          "customDeath": false,
          "affects": [-100, -100, -100],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "Hide and wait. ",
          "customDeath": false,
          "affects": [-10, 0, 0],
          "unlocks": false,
          "locks": false,
          "chained": [
            7
          ]
        }
      ],
      "repeatable": false,
      "story": true,
      "locked": false
    },
    {
      "text": "One man walks off the road and notices your presence. You both freeze, eyes locked onto each other.",
      "image": false,
      "choices": [
        {
          "text": "Gesture him to come towards you while locking your pistol onto his head.",
          "customDeath": false,
          "affects": [0, 0, -10],
          "unlocks": false,
          "locks": false,
          "chained": [
            8
          ]
        },
        {
          "text": "Run away with your son as you have already been spotted",
          "customDeath": "He shouts to the others and they hunt you down for a nice dinner meal.",
          "affects": [-100, -100, 0],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": false,
      "story": true,
      "locked": false
    },
    {
      "text": "The rough looking man comes towards you and offers to feed your son  if you both come on the truck.",
      "image": false,
      "choices": [
        {
          "text": "Believe him and go to the truck with your son",
          "customDeath": "As soon as you get there they grab you and your son and kill you for a nice dinner meal.",
          "affects": [0, -100, -100],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "Don’t believe him and attempt to take the man up the road. This way, you can turn him loose and escape with a head start.",
          "customDeath": false,
          "affects": [0, 0, 20],
          "unlocks": false,
          "locks": false,
          "chained": [
            9
          ]
        }
      ],
      "repeatable": false,
      "story": true,
      "locked": false
    },
    {
      "text": "Not agreeing with you, the man lunges at the boy, knife in hand.",
      "image": false,
      "choices": [
        {
          "text": "Shoot him.",
          "customDeath": false,
          "affects": [0, 0, -30],
          "unlocks": false,
          "locks": false,
          "chained": [
            10
          ]
        },
        {
          "text": "Don’t waste a bullet. You can take him on with your fists.",
          "customDeath": "He ends up overpowering you, killing you. What were you thinking, using fists in a knife fight?!",
          "affects": [0, -100],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": false,
      "story": true,
      "locked": false
    },
    {
      "text": "Alerting the other men, you grab your son and begin to run into the woods.",
      "image": false,
      "choices": [
        {
          "text": "I must keep the boy alive.I need to run faster.",
          "customDeath": false,
          "affects": [0, -10, 20],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "I’m tired. I don’t think I can carry the boy any faster.",
          "customDeath": false,
          "affects": [0, 0, -20],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": false,
      "story": true,
      "locked": false
    },
    {
      "text": "You are hungry and tired! You come across a once grand house high above the road. Tall with its white doric columns, the home dominated the field of dead grass.",
      "image": false,
      "choices": [
        {
          "text": "Risk it and go in for shelter",
          "customDeath": false,
          "affects": [0, 0, -5],
          "unlocks": false,
          "locks": false,
          "chained": [
            12
          ]
        },
        {
          "text": "Leave it. People might live there.",
          "customDeath": false,
          "affects": [-10, 0, 0],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": false,
      "story": true,
      "locked": false
    },
    {
      "text": "As you explore the home you come across a room with a hatch in the floor. Its locked with a padlock.",
      "image": false,
      "choices": [
        {
          "text": "Open the door",
          "customDeath": false,
          "affects": [0, 0, -5],
          "unlocks": false,
          "locks": false,
          "chained": [
            13
          ]
        },
        {
          "text": "Leave the home",
          "customDeath": false,
          "affects": [0, -10, 0],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": false,
      "story": true,
      "locked": false
    },
    {
      "text": "You open the door and see absolute darkness.",
      "image": false,
      "choices": [
        {
          "text": "Use your light to go in and explore",
          "customDeath": false,
          "affects": [0, 0, -5],
          "unlocks": false,
          "locks": false,
          "chained": [
            14
          ]
        },
        {
          "text": "Close the door and avoid the darkness",
          "customDeath": false,
          "affects": [0, -10, 0],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": false,
      "story": true,
      "locked": false
    },
    {
      "text": "As you walk in through the cold and damp dark cellar you feel the ungodly stench in the air. As you walk around you see strange shapes in the darkness.",
      "image": false,
      "choices": [
        {
          "text": "Shine the light on them",
          "customDeath": false,
          "affects": [0, 0, -5],
          "unlocks": false,
          "locks": false,
          "chained": [
            15
          ]
        },
        {
          "text": "Avoid them. It could mean trouble",
          "customDeath": false,
          "affects": [0, 0, 0],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": false,
      "story": true,
      "locked": false
    },
    {
      "text": "As you shined the light on the figurines you see a man with legs gone to the hip. The remaining blackened and burned stumps hurt your eyes. ",
      "image": false,
      "choices": [
        {
          "text": "Eat them as well. Food will sate the hunger",
          "customDeath": false,
          "affects": [20, 5, -45],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "Free them. It is the moral thing to do.",
          "customDeath": false,
          "affects": [0, 0, 0],
          "unlocks": false,
          "locks": false,
          "chained": [16, 17, 18]
        },
        {
          "text": "Leave them be. Its the survivor move.",
          "customDeath": false,
          "affects": [0, 0, 0],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": false,
      "story": true,
      "locked": false
    },
    {
      "text": "As you try to help the prisoners, the cannibals catch you and imprison you in this very cellar. You will continue to be eaten until the day you die.",
      "image": false,
      "choices": [
        {
          "text": "Oh no.",
          "customDeath": "The cannibals made a nice dinner out of you.",
          "affects": [0, -100, 0],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": false,
      "story": true,
      "locked": false
    },
    {
      "text": "As you try to help the prisoners, they attack and eat you. There are no good guys in the world.",
      "image": false,
      "choices": [
        {
          "text": "Oh no.",
          "customDeath": "The prisoners made a nice dinner out of you.",
          "affects": [0, -100, 0],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": false,
      "story": true,
      "locked": false
    },
    {
      "text": "You made the moral and pragmatic choice. The prisoners thank you and offer you supplies to aid in your journey.",
      "image": false,
      "choices": [
        {
          "text": "YES",
          "customDeath": false,
          "affects": [5, 5, 25],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": false,
      "story": true,
      "locked": false
    },
    {
      "text": "Exploring homes in your surroundings, you come across a strange piece of plywood randomly placed on the grass field. Upon moving it, you discover another hatch.",
      "image": false,
      "choices": [
        {
          "text": "Leave it. You do not know what could be in there",
          "customDeath": false,
          "affects": [-5, 0, 5],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "Explore it. Maybe it will help.",
          "customDeath": false,
          "unlocks": false,
          "locks": false,
          "chained": [
            20
          ]
        }
      ],
      "repeatable": false,
      "story": true,
      "locked": false
    },
    {
      "text": "As you enter the hatch through the ground you discover that the risk brought rewards. You see a bunker with beds and food. ",
      "image": false,
      "choices": [
        {
          "text": "Take a risk and stay the night for safe shelter.",
          "customDeath": false,
          "affects": [10, 10, -5],
          "unlocks": false,
          "locks": false,
          "chained": [22, 21]
        },
        {
          "text": "Run and hide. The person who stocked this bunker hid it for a reason",
          "customDeath": false,
          "affects": [-10, -10, 5],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": false,
      "story": true,
      "locked": false
    },
    {
      "text": "The cannibals found you and eat you",
      "image": false,
      "choices": [
        {
          "text": "Oh no.",
          "customDeath": "The cannibals made a nice dinner out of you.",
          "affects": [0, -100, 0],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": false,
      "story": true,
      "locked": false
    },
    {
      "text": "You stayed a night and have gotten some rest. ",
      "image": false,
      "choices": [
        {
          "text": "Risk another night ",
          "customDeath": false,
          "affects": [5, 5, -5],
          "unlocks": false,
          "locks": false,
          "chained": [22, 21]
        },
        {
          "text": "Leave and give up the shelter and food source. The owner of the bunker could come back.",
          "customDeath": false,
          "affects": [-5, 0, 5],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": false,
      "story": true,
      "locked": false
    },
    {
      "text": "You see an old man walking down the road",
      "image": false,
      "choices": [
        {
          "text": "Steal from him",
          "customDeath": false,
          "affects": [5, 0, -10],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "Hide from him",
          "customDeath": false,
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "Offer to help him",
          "customDeath": false,
          "affects": [-5, 0, 10],
          "unlocks": false,
          "locks": false,
          "chained": [
            24
          ]
        }
      ],
      "repeatable": false,
      "story": true,
      "locked": false
    },
    {
      "text": "As you sit and eat with the old man, he speaks of how he lost faith in humanity. firmly stating that there is no God, he explains that he trusts no one.",
      "image": false,
      "choices": [
        {
          "text": "Hopelessly agree with the man that God is gone ",
          "customDeath": false,
          "affects": [0, 0, -10],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "Argue with the man that God is still watching over you",
          "customDeath": false,
          "affects": [0, 0, 10],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": false,
      "story": true,
      "locked": false
    },
    {
      "text": "As you progress on you journey down the road, you come to a beach and see the gray ocean with despair. ",
      "image": false,
      "choices": [
        {
          "text": "Explore the beach, maybe you will find something ",
          "customDeath": false,
          "affects": [0, 0, 0],
          "unlocks": false,
          "locks": false,
          "chained": [
            26
          ]
        },
        {
          "text": "Avoid the beach. Tides and quicksand could be very dangerous.",
          "customDeath": false,
          "affects": [0, 0, 0],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": false,
      "story": true,
      "locked": false
    },
    {
      "text": "You walk down the shoreline and see an abandoned ship ",
      "image": false,
      "choices": [
        {
          "text": "Investigate it",
          "customDeath": false,
          "affects": [0, 0, 0],
          "unlocks": false,
          "locks": false,
          "chained": [
            27
          ]
        },
        {
          "text": "Leave it alone",
          "customDeath": false,
          "affects": [0, 0, 0],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": false,
      "story": true,
      "locked": false
    },
    {
      "text": "Upon investigation you discover food and a flare gun that can aid you in your journey",
      "image": false,
      "choices": [
        {
          "text": "Take the food and go find shelter",
          "customDeath": false,
          "affects": [10, 0, 0],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "Stay a night on the ship",
          "customDeath": false,
          "affects": [10, 10, 10],
          "unlocks": false,
          "locks": false,
          "chained": [
            28
          ]
        }
      ],
      "repeatable": false,
      "story": true,
      "locked": false
    },
    {
      "text": "Upon the next morning, you wake up and see that the ship is mainly damaged on the deck and that the hull is intact. Your instincts tells you to take advantage of this",
      "image": false,
      "choices": [
        {
          "text": "Make the necessary repairs and sail to the seas. The ocean has less cannibals than the road.",
          "customDeath": "Your lack of experience in sailing causes the ship to capsize, drowning you at the bottom of the sea.",
          "affects": [0, -100, 0],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "Leave the ship alone. You do not want to tempt fate.",
          "customDeath": false,
          "affects": [0, 0, 0],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": false,
      "story": true,
      "locked": false
    },
    {
      "text": "You get shot with an arrow.",
      "image": false,
      "choices": [
        {
          "text": "Quickly retaliate with whatever weapon you have in your possession",
          "customDeath": false,
          "affects": [0, -10, 0],
          "unlocks": false,
          "locks": false,
          "chained": [
            30
          ]
        },
        {
          "text": "Withdraw and run away",
          "customDeath": false,
          "affects": [0, 0, 0],
          "unlocks": false,
          "locks": false,
          "chained": [
            30
          ]
        }
      ],
      "repeatable": false,
      "story": true,
      "locked": false
    },
    {
      "text": "The arrow wound is dripping with blood. How will you act to deal with this",
      "image": false,
      "choices": [
        {
          "text": "Keep the arrow in, you can handle it",
          "customDeath": "Nope. Turns out you can't handle it. You die from the arrow.",
          "affects": [0, -100, 0],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "Take the arrow out and operate on the wound",
          "customDeath": "Your lack of experience with medical practices caused the wound to become infected and you die.",
          "affects": [[0, 5, 0],[ 0, -100, 0]],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": false,
      "story": true,
      "locked": false
    },
    {
      "text": "The wheel on your cart begins to loosen and is not working very efficiently, making it difficult to push around. Looks like it needs to be “bolted”(pg.17).",
      "image": false,
      "choices": [
        {
          "text": "Find some tools and being working on the wheel.",
          "customDeath": false,
          "affects": [-20, 0, 20],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "Continue on without fixing the wheel.",
          "customDeath": false,
          "affects": [10, -20, -20],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": true,
      "story": false,
      "locked": false
    },
    {
      "text": "You go to a smokehouse and find a “ham gambreled up in a high corner”(pg.17).",
      "image": false,
      "choices": [
        {
          "text": "Grab it and begin feasting with your son.",
          "customDeath": false,
          "affects": [[30, 20, 30],[-30, -20, -30]],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "Study it and put it back. No way the ham is still good.",
          "customDeath": false,
          "affects": [-10, -10, -10],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": true,
      "story": false,
      "locked": false
    },
    {
      "text": "Looking over a valley you and your son see a dam down below, which intrigues him. He wants to “go down there and see it”(pg.20).",
      "image": false,
      "choices": [
        {
          "text": "Tell him that it is too far and that the view from here is good enough.",
          "customDeath": false,
          "affects": [20, 10, -10],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "Listen to your son and make your way down the hill to take a closer look at the dam.",
          "customDeath": false,
          "affects": [-20, -20, 20],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": false,
      "story": false,
      "locked": false
    },
    {
      "text": "Walking into a home, you see three cans of “home canned tomatoes”(pg.22). You study them carefully.",
      "image": false,
      "choices": [
        {
          "text": "Home canned tomatoes are not trustworthy.",
          "customDeath": false,
          "affects": [-20, 10, -10],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "Food is food. You have to take advantage of what you find.",
          "customDeath": false,
          "affects": [[20, 30, 20],[-20, -30, -20]],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": true,
      "story": false,
      "locked": false
    },
    {
      "text": "The sound of an “earthquake”(pg.28) wakes both of you up. Your son cries due to the violent sounds it makes.",
      "image": false,
      "choices": [
        {
          "text": "Hug your son and tell him that it’s alright.",
          "customDeath": false,
          "affects": [0, -10, 30],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "Ignore the noises that the earthquake and your son are making. Go back to sleep. It’s more important.",
          "customDeath": false,
          "affects": [0, 10, -30],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": true,
      "story": false,
      "locked": false
    },
    {
      "text": "You see a forest fire, “flaring and shimmering”(pg.31) in the intense cold. However, you feel like the colours triggered a memory that has been “long forgotten”",
      "image": false,
      "choices": [
        {
          "text": "Ponder into deep thoughts as you stare at the fire.",
          "customDeath": false,
          "affects": [-10, -20, 20],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "Remove yourself from the trance and continue on the road.",
          "customDeath": false,
          "affects": [10, 10, 0],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": false,
      "story": false,
      "locked": false
    },
    {
      "text": "You decide to make some hot chocolate with one of the last remaining packets of “cocoa”(pg. 34).",
      "image": false,
      "choices": [
        {
          "text": "Divide the hot cocoa between you and your son.",
          "customDeath": false,
          "affects": [10, 10, 10],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "Give it all to your son.",
          "customDeath": false,
          "affects": [-10, -10, -10],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": false,
      "story": false,
      "locked": false
    },
    {
      "text": "You come across a long patch macadam(pg.49) on the road that is still warm and sticks to your shoes as you try to walk through it.",
      "image": false,
      "choices": [
        {
          "text": "Backtrack and wait for the macadam to cool before trudging on.",
          "customDeath": false,
          "affects": [10, 20, 0],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "Don’t lose hope! Continue to walk through the sticky substance in order to maintain good time.",
          "customDeath": false,
          "affects": [-10, -20, 0],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": false,
      "story": false,
      "locked": false
    },
    {
      "text": "You spot a man who has “been struck by lightning”(pg.51). The boy, feeling pity, insists on helping the man.",
      "image": false,
      "choices": [
        {
          "text": "You are one of the good guys! Help the man in need.",
          "customDeath": false,
          "affects": [-20, -20, 20],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "Your son is the number one priority.",
          "customDeath": false,
          "affects": [10, 10, -20],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": false,
      "story": false,
      "locked": false
    },
    {
      "text": "Your son randomly becomes eager to spend time with you. He asks if you want to play “cards”(pg.53).",
      "image": false,
      "choices": [
        {
          "text": "Cards are a waste of time and you need to continue looting houses.",
          "customDeath": false,
          "affects": [10, 10, -30],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "Spending valuable time with your son is important.",
          "customDeath": false,
          "affects": [-10, -10, 30],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": true,
      "story": false,
      "locked": false
    },
    {
      "text": "The fire you made is quickly diminishing, and will require more wood to stay alive. You want to break up some branches but you’re afraid it might “wake the boy”. (pg.75)",
      "image": false,
      "choices": [
        {
          "text": "A fire is necessary for the boy’s survival and so waking him up won’t be a big deal.",
          "customDeath": false,
          "affects": [0, 10, -10],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "Waking him up would ruin his sleep.",
          "customDeath": false,
          "affects": [0, -10, 10],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": true,
      "story": false,
      "locked": false
    },
    {
      "text": "You hear the sound of a truck and you’re afraid that the snow tracks that you’ve made will get traced. ",
      "image": false,
      "choices": [
        {
          "text": "Go the extra mile, literally. Walk around in circles to confuse them.",
          "customDeath": false,
          "affects": [-10, -10, 10],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "They won’t be able to find the tracks anyways.Save your stamina.",
          "customDeath": false,
          "affects": [10, 10, -10],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": false,
      "story": false,
      "locked": false
    },
    {
      "text": "You find a dog with it's tail between it's legs seemingly asking for food. Your son asks you if you can give it some food.",
      "image": false,
      "choices": [
        {
          "text": "Pet the dog an let it go.",
          "customDeath": false,
          "affects": [0, -5, 10],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "Leave the dog alone.",
          "customDeath": false,
          "affects": [0, 0, -10],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "Give the dog some food.",
          "customDeath": false,
          "affects": [-20, 0, 10],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "Keep the dog.",
          "customDeath": false,
          "affects": [-20, -5, 30],
          "unlocks": [
            44
          ],
          "locks": [
            44
          ],
          "chained": false
        },
        {
          "text": "Eat the dog.",
          "customDeath": false,
          "affects": [50, 0, -10],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": true,
      "story": false,
      "locked": false
    },
    {
      "text": "YOU ARE HUNGRY. What do you do?",
      "image": false,
      "choices": [
        {
          "text": "Eat the dog.",
          "customDeath": false,
          "affects": [50, 0, -20],
          "unlocks": [
            43
          ],
          "locks": [
            43
          ],
          "chained": false
        },
        {
          "text": "Keep going.",
          "customDeath": false,
          "affects": [-20, 0, 10],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": true,
      "story": false,
      "locked": true
    }
  ]
}
`;