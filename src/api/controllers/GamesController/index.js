const express = require("express");
const router = express.Router();
const fs = require("fs");
const db = require("../../models/index.js").default;
// const { getLocalFileData } = require("./localFileRead.js");

// const { buildPlayerData } = require("../../util/utilities");

// endpoint is GET(/game/)
// Gets all games from database for a given season
router.get("/", async (req, res) => {
  console.log("Retrieving all games in a season from the database...");

  console.log(req.query);

  try {
    db.sequelize.models.Game.findAll({
      where: {
        season: req.query.season,
        // season: 2025,
      },
    }).then(games => {
      console.log("Found all games");
      res.status(200).send(games);
    });
  } catch (err) {
    console.error("Error retrieving players from the database:", err);
    res
      .status(500)
      .send({ error: "An error occurred while retrieving players." });
  }
});

// endpoint is GET(/players/:playerId)
router.get("/:playerId", async (req, res) => {
  const { playerId } = req.params;
  console.log(`GET /players/${playerId}/ request received`);

  try {
    db.sequelize.models.Player.findOne({
      where: {
        playerId,
      },
    }).then(player => {
      console.log(`Found player by id - Name: ${player.fullName}`);
      let hyphenatedName = player.fullName.split(" ").join("-").toLowerCase();
      let receivingData = getLocalFileData("receiving", hyphenatedName);
      let defensiveData = getLocalFileData("defensive", hyphenatedName);
      let rushingData = getLocalFileData("rushing", hyphenatedName);
      let passingData = getLocalFileData("passing", hyphenatedName);
      let kickingData = getLocalFileData("kicking", hyphenatedName);

      res
        .status(200)
        .send(
          buildPlayerData(
            playerId,
            player,
            receivingData,
            defensiveData,
            rushingData,
            passingData,
            kickingData,
          ),
        );
    });
  } catch (err) {
    console.log("Error with readFileSync");
    if (err.code === "ENOENT") {
      console.log("Player data file not found, proceeding without it.");
    }
  }
});
// });
// } catch (err) {
//   console.error("Error retrieving players from the database:", err);
//   res
//     .status(500)
//     .send({ error: "An error occurred while retrieving players." });
// }

// res.status(200).send(`Player data for player with ID: ${playerId}`);
// });

// endpoint is GET(/players/testing/:playerId)
router.get("/testing/:playerId", async (req, res) => {
  console.log("hitting the new get player route");
  const { playerId } = req.params;

  console.log(playerId);

  try {
    db.sequelize.models.Player.findOne({
      where: {
        playerId,
      },
    }).then(player => {
      console.log(`Found player by id - Name: ${player.fullName}`);
      fs.readFile(
        `${process.cwd()}/src/resources/sample_payloads/players/${playerId}.json`,
        (err, jsonData) => {
          if (err) {
            console.log("oh nooooooooo");
            console.log(err);
            res.send(500).send("Error reading dexter's data");
            throw err;
          }
          console.log("no error reading dexter's data");
          let player = JSON.parse(jsonData);
          // let parsedObject = handlePlayByPlayResponse(playByPlay);
          // LogGetPlayByPlayForGameIdEnd(gameId, processStartTime);
          // res.status(200).json(player);
          res.status(200).send(player);
        },
      );
      res.status(200).send(player);
    });
  } catch (err) {
    console.error("Error retrieving players from the database:", err);
    res
      .status(500)
      .send({ error: "An error occurred while retrieving players." });
  }

  /*
  // const { playerId } = req.params;

  // console.log(req.params);

  // fs.readFile(
  //   `${process.cwd()}/src/resources/sample_payloads/players/${playerId}.json`,
  //   (err, jsonData) => {
  //     if (err) {
  //       console.log("oh nooooooooo");
  //       res.errored(500).send("Error reading dexter's data");
  //       throw err;
  //     }
  //     console.log("no error reading dexter's data");
  //     let player = JSON.parse(jsonData);
  //     // let parsedObject = handlePlayByPlayResponse(playByPlay);
  //     // LogGetPlayByPlayForGameIdEnd(gameId, processStartTime);
  //     // res.status(200).json(player); // TODO: this should be 200
  //     res.status(200).send(player); // TODO: this should be 200
  //   },
  // );
  // // res.status(200).send(`Player data for player with ID: ${playerId}`);
  */
});

module.exports = router;
