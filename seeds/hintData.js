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
    hint: "Something that is honest and legitimate.",
    word_id: 7,
  },
  {
    hint: "This term comes from poker, but was also used to refer to things that were fine, luxurious, and respectable.",
    word_id: 8,
  },
  {
    hint: "A donkey",
    word_id: 9,
  },
  {
    hint: "When a horse wants nothing more than to be in the barn.",
    word_id: 10,
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
  {
    hint: "A hideout or a hidden gun",
    phrase_id: 7,
  },
  {
    hint: "To admit the truth, to confess a lie, or acknowledge an obvious personal shortcoming.",
    phrase_id: 8,
  },
  {
    hint: "Feeling pretty good.",
    phrase_id: 9,
  },
  {
    hint: "Very good, top-notch.",
    phrase_id: 10,
  },
];

const seedHints = () => Hint.bulkCreate(hintData);

module.exports = seedHints;
