const router = require("express").Router();
const { Highscore, User } = require("../../models")
const withAuth = require('../../utils/auth');

//Get all high-scores 
//http://localhost:3001/api/highscores
//tests good
router.get("/", async (req, res) => {
    try {
        const highScoreData = await Highscore.findAll({
            include: [{
                model: User,
                attributes: ["username"],
            }],
        });

        const highScores = highScoreData.map((highScore) =>
            highScore.get({ plain: true })
        );

        res.json(highScores);

        // res.render('highscores', {
        //     highScores
        // });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//Get high-score per user
//http://localhost:3001/api/highscores/username
router.get("/highscores/username", async (req, res) => {
    try {
        const highScoreData = await Highscore.findBy(req.params.username);
        if (!highScoreData) {
            res.status(404).json({ message: "No user with this id!" });
            return;
        }
        const highScores = highScoreData.get({ plain: true });
        // res.render('highscores', highScores);
        res.json(highScores);
    } catch (err) {
        res.status(500).json(err);
    };
});


//Post high-score 
//http://localhost:3001/api/highscores
//tests good
router.post("/", async (req, res) => {
    try {
        const newScore = await Highscore.create({
            username: req.body.username,
            score: req.body.score,
        });
        res.status(200).json(newScore);
    } catch (err) {
        res.status(400).json(err)
    }
});

module.exports = router;