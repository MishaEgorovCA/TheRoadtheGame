const rawData = `
{
  "scenarios": [
    {
      "text": "0Welcome this is the first test scenario",
      "image": "",
      "choices": [
        {
          "text": "This will give you: +10 +40 +25 and should be a random event next",
          "affects": [ 10, 40, 25 ],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "This gives: -49 -49 -49 and is chained to scenario #2",
          "affects": [ -49, -49, -49 ],
          "unlocks": false,
          "locks": false,
          "chained": [ 2 ]
        },
        {
          "text": "This gives: +5 -5 +5 and unlocks scenario #3 to happen in the future",
          "affects": [ 5, -5, 5 ],
          "unlocks": [3],
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": false,
      "story": true,
      "locked": false
    },
    {
      "text": "1This is a random scenario non-repeatable (if chained then its exempt)",
      "image": "",
      "choices": [
        {
          "text": "+1 +2 +3",
          "affects": [ 1, 2, 3 ],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "Return to first scenario (chained to #0)",
          "affects": [ 50, 50, 50 ],
          "unlocks": false,
          "locks": false,
          "chained": [ 0 ]
        },
        {
          "text": "+0 +0 +0",
          "affects": [ 0, 0, 0 ],
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
      "text": "2This scenario should only occur after scenario 1 if you chose the second choice",
      "image": "",
      "choices": [
        {
          "text": "-100 -1000 +900",
          "affects": [ -100, -1000, 900 ],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "+100 +100 +100",
          "affects": [ 100, 100, 100 ],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "+3 +3 +3",
          "affects": [ 3, 3, 3 ],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": false,
      "story": false,
      "locked": true
    },
    {
      "text": "3This scenario is repeatable and should only start showing up if you chose the last choice in the first scenario",
      "image": "",
      "choices": [
        {
          "text": "-100 -1000 +900",
          "affects": [ -100, -1000, 900 ],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "+100 +100 -100",
          "affects": [ 100, 100, 100 ],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "+3 +3 +3",
          "affects": [ 3, 3, 3 ],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": true,
      "story": false,
      "locked": true
    },
    {
      "text": "4This is the second story scenario and should not happen right after the first but not more than 5 random after the first. Also since there is no 3rd story the game should break after 5 random scenarios since that should be the max before a story one.",
      "image": "",
      "choices": [
        {
          "text": "-100 -1000 +900",
          "affects": [ -100, -1000, 900 ],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "+100 +100 -100",
          "affects": [ 100, 100, 100 ],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "This takes you to #4 (this one again)",
          "affects": [ 0, 0, 0 ],
          "unlocks": false,
          "locks": false,
          "chained": [ 4 ]
        },
        {
          "text": "0 0 0",
          "affects": [ 0, 0, 0 ],
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
      "text": "5This is a scenario that just occures randomly but only once",
      "image": "",
      "choices": [
        {
          "text": "Take me to scenario 0 (chained)",
          "affects": [ 0, 0, 0 ],
          "unlocks": false,
          "locks": false,
          "chained": [ 0 ]
        },
        {
          "text": "Take me to scenario 1 (chained)",
          "affects": [ 0, 0, 0 ],
          "unlocks": false,
          "locks": false,
          "chained": [ 1 ]
        },
        {
          "text": "Lock all scenarios and unlock 6,7",
          "affects": [ 3, 3, 3 ],
          "unlocks": [ 6, 7 ],
          "locks": [ 0, 1, 2, 3, 4, 5, 8 ],
          "chained": [6]
        }
      ],
      "repeatable": false,
      "story": false,
      "locked": false
    },
    {
      "text": "6This should only occur if you made that one choice to lock all but 6,7 also should now be a loop of only 6 and 7 scenes poping up",
      "image": "",
      "choices": [
        {
          "text": "Unlock all scenes (will have unintentional side effects like stories becoming available)",
          "affects": [ 0, 0, 0 ],
          "unlocks": [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ],
          "locks": false,
          "chained": false
        },
        {
          "text": "Do nothing",
          "affects": [ 0, 0, 0 ],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "Lock all scenes. will probabably breaak the gam",
          "affects": [ 0, 0, 0 ],
          "unlocks": false,
          "locks": [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ],
          "chained": false
        }
      ],
      "repeatable": true,
      "story": false,
      "locked": true
    },
    {
      "text": "7This is a scenario that just occures randomly once unlocked and repeatable",
      "image": "",
      "choices": [
        {
          "text": "Do nothing",
          "affects": [ 0, 0, 0 ],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "Do nothing",
          "affects": [ 0, 0, 0 ],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": true,
      "story": false,
      "locked": true
    },
    {
      "text": "8This is a scenario that just occures randomly and is repeatable",
      "image": "",
      "choices": [
        {
          "text": "Do nothing",
          "affects": [ 0, 0, 0 ],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "Do nothing",
          "affects": [ 0, 0, 0 ],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": true,
      "story": false,
      "locked": false
    }
  ]
}
`;