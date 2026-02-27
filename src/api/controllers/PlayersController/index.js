const express = require("express");
const router = express.Router();
const db = require("../../models/index.js").default;

// endpoint is POST(/players/one)
router.post("/one", async (req, res) => {
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

// endpoint is POST(/players/many)
router.post("/many", async (req, res) => {
  console.log("Creating a set of new players...");

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

module.exports = router;
