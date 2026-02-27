const express = require("express");
const router = express.Router();

const players = require("./PlayersController/index.js");
const years = require("./YearsController/index.js");
const games = require("./GamesController/index.js");

router.use("/players", players);
router.use("/years", years);
router.use("/games", games);

router.use("/test", require("./test.js"));

module.exports = router;
