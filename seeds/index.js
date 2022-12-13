const sequelize = require("../config/connection");
const seedUser = require('./userData');
const seedHighScore = require('./highScoreData');
const seedWords = require('./wordData');
const seedHints = require('./hintData');
const seedPhrases = require('./phraseData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUser();

    await seedHighScore();

    await seedWords();

    await seedHints();

    await seedPhrases();

    process.exit(0);
};

seedAll();