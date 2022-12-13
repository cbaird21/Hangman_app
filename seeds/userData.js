const { User } = require("../models");

const userData = [
    {
        "username": "jman",
        "password": 1234,
    },
    {
        "username": "mattyb",
        "password": 2345,
    },
    {
        "username": "jose1",
        "password": 3456,
    },
];

const seedUser = () => User.bulkCreate(userData)

module.exports = seedUser;