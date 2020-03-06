const rawData = `
{
  "scenarios": [
    {
      "text": "Test scenario 1",
      "image": "",
      "choices": [
        {
          "text": "+10 +40 +25",
          "affects": [ 10, 40, 25 ],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "-49 -49 -49",
          "affects": [ -49, -49, -49 ],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "+5 -5 +5",
          "affects": [ 5, -5, 5 ],
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
      "text": "Test scenario 2",
      "image": "",
      "choices": [
        {
          "text": "-100 0 0",
          "affects": [ -100, 0, 0 ],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "0 -100 0",
          "affects": [ 0, -100, 0 ],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "0 0 -100",
          "affects": [ 0, 0, -100 ],
          "unlocks": false,
          "locks": false,
          "chained": false
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
      "story": false,
      "locked": false
    },
    {
      "text": "Test scenario 3",
      "image": "",
      "choices": [
        {
          "text": "+100 0 0",
          "affects": [ 100, 0, 0 ],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "0 +100 0",
          "affects": [ 0, 100, 0 ],
          "unlocks": false,
          "locks": false,
          "chained": false
        },
        {
          "text": "0 0 +100",
          "affects": [ 0, 0, 100 ],
          "unlocks": false,
          "locks": false,
          "chained": false
        }
      ],
      "repeatable": false,
      "story": false,
      "locked": false
    }
  ]
}
`;