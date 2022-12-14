const { Hint } = require("../models");

const hintData = [
  {
    hint: "A hat with a broad, often curled brim and a high crown, typically made of felt",
    word_id: 1,
  },
  {
    hint: "An expression of enthusiasm or exuberance, typically associated with cowboys or rural inhabitants of the southern US",
    word_id: 2,
  },
  {
    hint: "An informal friendly greeting, particularly associated with the western states",
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
    hint: "A drifter",
    phrase_id: 1,
  },
  {
    hint: "A saline spring, where animals resort for drink",
    phrase_id: 2,
  },
  {
    hint: "Cheap whiskey",
    phrase_id: 3,
  },
  {
    hint: "Cussing",
    phrase_id: 4,
  },
  {
    hint: "That idea or plan won't work",
    phrase_id: 5,
  },
  {
    hint: "A braggart, or the quality of bragging too much",
    phrase_id: 6,
  },
];

const seedHints = () => Hint.bulkCreate(hintData);

module.exports = seedHints;
