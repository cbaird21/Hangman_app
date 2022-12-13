const { Phrase } = require('../models');

const phraseData = [
    {
        phrase: "saddle bum",
    },
    {
        phrase: "salt lick",
    },
    {
        phrase: "sheepherder's delight",
    },
]

const seedPhrases = () => Phrase.bulkCreate(phraseData);

module.exports = seedPhrases;