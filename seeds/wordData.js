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
];

const seedWords = () => Word.bulkCreate(wordData);

module.exports = seedWords;
