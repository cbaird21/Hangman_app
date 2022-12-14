const router = require("express").Router();

//Homepage
router.get("/", async (req, res) => {
  res.render("landing", {
    layout: "home",
  });
});

//login page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

//Signup page
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

//Highscores page
router.get("/highscores", (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login").status(400).json({
      message: "You must be logged in to view highscores, ya varmint!",
    });
  } else {
    res.render("highscores");
  }
});

// can you guys please make a logout route for us? :) thanks, chan!

//Github repo
router.get("/github", (req, res) => {
  res.redirect("https://github.com/cbaird21/Hangman_app");
});

//Button to game
router.get("/game", (req, res) => {
  if (!req.session.loggedIn) {
    res
      .redirect("/login")
      .status(400)
      .json({ message: "You must be logged in to play, partner!" });
    return;
  } else {
    res.render("game");
  }
});

module.exports = router;
