const sequelize = require("../config/connection");
const seedUser = require('./userData');
const seedHighScore = require('./highScoreData');
const seedWords = require('./wordData');
const seedPhrases = require('./phraseData');
const seedHints = require('./hintData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUser();

    await seedHighScore();

    await seedWords();

    await seedPhrases();

    await seedHints();


    process.exit(0);
};

seedAll();