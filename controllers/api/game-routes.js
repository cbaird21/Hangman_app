const router = require("express").Router();
const { Word, Phrase, Hint, User, Highscore } = require("../../models");
const { Sequelize } = require("sequelize");

//route for choosing between word or phrase(?)
//GET route for words and associated hint v/
//GET route for phrases and associated hint v/
//POST route for highscore logging

router.get("/word", async (req, res) => {
  try {
    const wordData = await Word.findOne({
      order: Sequelize.fn("RAND"),
      include: [{ model: Hint, attributes: ["hint"] }],
    });
    console.log(wordData);
    res.status(200).json(wordData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/phrase", async (req, res) => {
  try {
    const phraseData = await Phrase.findOne({
      order: Sequelize.fn("RAND"),
      include: [{ model: Hint, attributes: ["hint"] }],
    });
    console.log(phraseData);
    res.status(200).json(phraseData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
