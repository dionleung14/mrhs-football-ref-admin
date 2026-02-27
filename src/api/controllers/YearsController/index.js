const express = require("express");
const router = express.Router();
const db = require("../../models/index.js").default;

// endpoint is POST(/years/one)
router.post("/one", async (req, res) => {
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

// endpoint is POST(/years/many)
router.post("/many", async (req, res) => {
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
