const express = require("express");
const router = express.Router();
const db = require("../models/index.js").default;

// endpoint is POST(/test/game)
router.post("/game", async (req, res) => {
  console.log("Trying to hit the test slash route with a POST");
  // console.log(req.body.points_allowed_overtime);
  const {
    season,
    date,
    opponent,
    home,
    win_loss,
    points_scored_quarter_1,
    points_scored_quarter_2,
    points_scored_quarter_3,
    points_scored_quarter_4,
    total_points_scored,
    points_allowed_quarter_1,
    points_allowed_quarter_2,
    points_allowed_quarter_3,
    points_allowed_quarter_4,
    total_points_allowed,
    points_scored_overtime,
    points_allowed_overtime,
  } = req.body;

  try {
    await db.sequelize.models.Game.create({
      season,
      date,
      opponent,
      home,
      pointsFor: total_points_scored,
      pointsAgainst: total_points_allowed,
      resultWin: win_loss,
      pointsForQ1: points_scored_quarter_1,
      pointsForQ2: points_scored_quarter_2,
      pointsForQ3: points_scored_quarter_3,
      pointsForQ4: points_scored_quarter_4,
      pointsForOT: points_scored_overtime,
      pointsAgainstQ1: points_allowed_quarter_1,
      pointsAgainstQ2: points_allowed_quarter_2,
      pointsAgainstQ3: points_allowed_quarter_3,
      pointsAgainstQ4: points_allowed_quarter_4,
      pointsAgainstOT: points_allowed_overtime,
    }).then(game => {
      console.log("New game created successfully:");
      console.log(game.toJSON());
      res.status(200).send({
        test: "Successfully created a new game.",
        newGame: game.toJSON(),
      });
    });
  } catch (err) {
    console.error("Error creating new game:", err);
    res
      .status(500)
      .send({ error: "An error occurred while creating the game." });
    return;
  }
});

// endpoint is POST(/test/player)
router.post("/player", async (req, res) => {
  console.log("Creating a new player...");
  const { firstName, lastName, gradYear, yearsActive } = req.body;
  let newPlayer;

  try {
    await db.sequelize.models.Player.create({
      firstName,
      lastName,
      gradYear,
      yearsActive,
    }).then(player => {
      console.log("New player created successfully:");
      console.log(player.toJSON());
      newPlayer = player;
      res.status(200).send({
        test: "Successfully created a new player.",
        newPlayer: newPlayer.toJSON(),
      });
    });
  } catch (err) {
    console.error("Error creating new player:", err);
    res
      .status(500)
      .send({ error: "An error occurred while creating the player." });
    return;
  }
});

// endpoint is POST(/test/players)
router.post("/players", async (req, res) => {
  console.log("Creating a set of new players...");

  console.log(req.body);

  try {
    db.sequelize.models.Player.bulkCreate(req.body).then(players => {
      console.log(
        "New players created successfully - query the database to see them",
      );
      res.status(200).send({
        message: "Successfully created new players.",
        newPlayers: players,
      });
    });
  } catch (err) {
    console.error("Error creating new player:", err);
    res
      .status(500)
      .send({ error: "An error occurred while creating the player." });
    return;
  }
});

// endpoint is POST(/test/year)
router.post("/year", async (req, res) => {
  console.log("Creating a new season...");

  console.log(req.body);

  try {
    db.sequelize.models.Season.create(req.body).then(seasons => {
      console.log(
        "New seasons created successfully - query the database to see them",
      );
      console.log(seasons);
      res.status(200).send({
        message: "Successfully created new seasons.",
        newSeasons: seasons,
      });
    });
  } catch (err) {
    console.error("Error creating new seasons:", err);
    res
      .status(500)
      .send({ error: "An error occurred while creating the seasons." });
    return;
  }
});

// endpoint is POST(/test/years)
router.post("/years", async (req, res) => {
  console.log("Creating a new set of new seasons...");

  console.log(req.body);

  try {
    db.sequelize.models.Season.bulkCreate(req.body).then(seasons => {
      console.log(
        "New seasons created successfully - query the database to see them",
      );
      res.status(200).send({
        message: "Successfully created new seasons.",
        newSeasons: seasons,
      });
    });
  } catch (err) {
    console.error("Error creating new seasons:", err);
    res
      .status(500)
      .send({ error: "An error occurred while creating the seasons." });
    return;
  }
});
module.exports = router;
