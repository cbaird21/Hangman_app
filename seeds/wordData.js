const { Word } = require("../models");

const wordData = [
  {
    word: "cowboy-hat",
  },
  {
    word: "yeehaw",
  },
  {
    word: "howdy",
  },
  {
    word: "tarnation",
  },
  {
    word: "varmint",
  },
  {
    word: "yellow-belly",
  },
];

const seedWords = () => Word.bulkCreate(wordData);

module.exports = seedWords;
