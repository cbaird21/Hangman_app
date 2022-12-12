const sequelize = require("../config/connection");
const seedWords = require('./wordData');
const seedHints = require('./hintData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedWords();

    await seedHints();

    process.exit(0);
};

seedAll();