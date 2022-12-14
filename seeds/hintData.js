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
  {
    hint: "A non-cuss exclamation",
    word_id: 4,
  },
  {
    hint: "The cowboy way of saying “vermin”, usually refers to a small or medium-sized animal, or a disreputable individual",
    word_id: 5,
  },
  {
    hint: "A coward",
    word_id: 6,
  },
  {
    hint: "a drifter",
    phrase_id: 1,
  },
  {
    hint: "a saline spring, where animals resort for drink",
    phrase_id: 2,
  },
  {
    hint: "cheap whiskey",
    phrase_id: 3,
  },
];

const seedHints = () => Hint.bulkCreate(hintData);

module.exports = seedHints;
