const express = require("express");
const router = express.Router();
const db = require("../../models/index.js").default;

// endpoint is POST(/games/one)
router.post("/one", async (req, res) => {
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

module.exports = router;
