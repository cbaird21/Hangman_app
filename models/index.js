const User = require("./User");
const Highscore = require("./Highscore");
const Word = require("./Word");
const Phrase = require("./Phrase");
const Hint = require("./Hint");

User.hasMany(Highscore, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Highscore.belongsTo(User, {
  foreignKey: "user_id",
});

Word.hasOne(Hint, {
  foreignKey: "word_id",
  onDelete: "CASCADE",
});

Phrase.hasOne(Hint, {
  foreignKey: "phrase_id",
  onDelete: "CASCADE",
});

Hint.belongsTo(Word, {
  foreignKey: "word_id",
});

Hint.belongsTo(Phrase, {
  foreignKey: "phrase_id",
});

module.exports = { User, Highscore, Word, Phrase, Hint };
