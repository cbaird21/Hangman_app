const router = require("express").Router();
const { Highscore, User } = require("../models");

//Homepage
//http://localhost:3001
router.get("/", async (req, res) => {
  res.render("landing", {
    layout: "home",
  });
});

//login page
//http://localhost:3001/login
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login", {
    layout: "logdata",
  });
});

//Signup page
//http://localhost:3001/signup
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup", {
    layout: "logdata",
  });
});

//Highscores page
//http://localhost:3001/highscores
router.get("/highscores", async (req, res) => {
  try {
    const highScoreData = await Highscore.findAll();
    const highScores = highScoreData.map((highScore) =>
      highScore.get({ plain: true })
    );

    // res.json(highScores);

    res.render("highscores", {
      highScores,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// can you guys please make a logout route for us? :) thanks, chan!

//Github repo
router.get("/github", (req, res) => {
  res.redirect("https://github.com/cbaird21/Hangman_app");
});

//Button to game
//http://localhost:3001/game
router.get("/game", (req, res) => {
  if (!req.session.loggedIn) {
    res
      .redirect("/login", {
        layout: "logdata",
      })
      .status(400)
      .json({ message: "You must be logged in to play, partner!" });
    return;
  } else {
    res.render("game", {
      layout: "main",
    });
  }
});

module.exports = router;
