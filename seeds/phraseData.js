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
  {
    phrase: "ace-in-the-hole",
  },
  {
    phrase: "acknowledge-the-corn",
  },
  {
    phrase: "fair-to-middlin",
  },
  {
    phrase: "fine-as-cream-gravy",
  }
];

const seedPhrases = () => Phrase.bulkCreate(phraseData);

module.exports = seedPhrases;
