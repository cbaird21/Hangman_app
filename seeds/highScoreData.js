const { Highscore } = require("../models");

const highScoreData = [
    {
        "username": "jman",
        "score": 10,
        "user_id": 1
    },
    {
        "username": "mattyb",
        "score": 11,
        "user_id": 2
    },
    {
        "username": "jose1",
        "score": 12,
        "user_id": 3
    },
];

const seedHighScore = () => Highscore.bulkCreate(highScoreData)

module.exports = seedHighScore;