const router = require("express").Router();
const { Word, Phrase, Hint, User, Highscore } = require("../../models");

//route for choosing between word or phrase(?)
//GET route for words and associated hint
//GET route for phrases and associated hint
//POST route for highscore logging

router.get("/");

module.exports = router;
