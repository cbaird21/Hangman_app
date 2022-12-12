const router = require("express").Router();
// const { json } = require("body-parser");
const { Highscore } = require("../../models")
// const withAuth = require('../utils/auth');

//Get all high scores 
//http://localhost:3001/highscores
router.get("/", async (req, res) => {
    try {
        const highScoreData = await Highscore.findAll({
        });

        const highScores = highScoreData.map((highScore) =>
            highScore.get({ plain: true })
        );

        res.render('highScore', {
            highScores,
            loggedIn: req.session.loggedIn,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//Get high-score per user
//http://localhost:3001/highscores/:id
router.get("/highscores/:id", async (req, res) => {
    try {
        const highScoreData = await Highscore.findByPk(req.params.id);
        if (!highScoreData) {
            res.status(404).json({ message: "No user with this id!" });
            return;
        }
        const highScores = highScoreData.get({ plain: true });
        res.render('highScore', highScores);
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;