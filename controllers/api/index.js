const router = require("express").Router();

const userRoutes = require("./user-routes");
const highscoreRoutes = require("./highscore-routes");

router.use("/users", userRoutes);
router.use("/highscores", highscoreRoutes);

module.exports = router;
