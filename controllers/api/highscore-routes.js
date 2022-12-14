const router = require("express").Router();
const { Highscore, User } = require("../../models");

//Get all high-scores
//http://localhost:3001/api/highscores
//tests good
router.get("/", async (req, res) => {
  try {
    const highScoreData = await Highscore.findAll({
      include: [
        {
          model: User,
        },
      ],
    });
    const highScores = highScoreData.map((highScore) =>
      highScore.get({ plain: true })
    );

    res.json(highScores);

    // res.render("highscores", {
    //   highScores,
    // });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Get high-score per user
//http://localhost:3001/api/highscores/:username
//tests good
router.get("/:username", async (req, res) => {
  try {
    const highScoreData = await Highscore.findOne({
      where: { username: req.params.username },
    });
    if (!highScoreData) {
      //error message works
      res.status(404).json({ message: "No user with this username!" });
      return;
    }

    const highScores = highScoreData.get({ plain: true });

    res.json(highScores);

    //below 'res.render' will be used to display highscores per username to the 'highscores.handlebars' page using the 'highScores' const above

    // res.render('highscores', {
    //     highScores
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Post high-score
//http://localhost:3001/api/highscores
//needs testing, user_id not showing up?
router.post("/", async (req, res) => {
  try {
    const userGet = await User.findAll({
      where: { username: req.body.username },
    });
    console.log(userGet[0].dataValues);
    const userId = userGet[0].dataValues.id;
    //need to acccess the id of the user
    //acess user through session data, logged in, user id
    const newScore = await Highscore.create({
      // User: req.body.User,
      username: req.body.username,
      score: req.body.score,
      user_id: userId,
      //added below req.body to include a user_id tag on posted scores
      // user_id: req.body.user_id,
    });
    // res.status(200).json(newScore);

    res.render("highscores", {
      newScore,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
