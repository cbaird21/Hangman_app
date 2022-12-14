const { Phrase } = require("../models");

const phraseData = [
  {
    phrase: "saddle-bum",
  },
  {
    phrase: "salt-lick",
  },
  {
    phrase: "sheepherders-delight",
  },
  {
    phrase: "airing-the-lungs",
  },
  {
    phrase: "that-dog-wont-hunt",
  },
  {
    phrase: "too-much-mustard",
  },
];

const seedPhrases = () => Phrase.bulkCreate(phraseData);

module.exports = seedPhrases;
