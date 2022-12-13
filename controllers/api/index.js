const router = require("express").Router();

const userRoutes = require("./user-routes");
const highscoreRoutes = require("./highscore-routes");
const gameRoutes = require("./game-routes");

router.use("/users", userRoutes);
router.use("/highscores", highscoreRoutes);
router.use("/game", gameRoutes);

module.exports = router;
