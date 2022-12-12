const { Hint } = require("../models");

const hintData = [
  {
    hint: "a hat with a broad, often curled brim and a high crown, typically made of felt",
    word_id: 1,
  },
  {
    hint: "an expression of enthusiasm or exuberance, typically associated with cowboys or rural inhabitants of the southern US",
    word_id: 2,
  },
  {
    hint: "an informal friendly greeting, particularly associated with the western states",
    word_id: 3,
  },
];

const seedHints = () => Hint.bulkCreate(hintData);

module.exports = seedHints;
