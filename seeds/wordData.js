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
  {
    word: "above-board",
  },
  {
    word: "ace-high"
  },
  {
    word: "desert-canary"
  },
  {
    word: "barn-sour"
  },
];

const seedWords = () => Word.bulkCreate(wordData);

module.exports = seedWords;
