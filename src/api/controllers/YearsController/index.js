const express = require("express");
const router = express.Router();
const fs = require("fs");
const db = require("../../models/index.js").default;

const { buildYearData } = require("../../util/utilities");

// endpoint is GET(/years)
// GET all Seasons in database
router.get("/", async (req, res) => {
  console.log("Retrieving all seasons from the database...");

  try {
    db.sequelize.models.Season.findAll().then(seasons => {
      console.log("Found all seasons");
      res.status(200).send(seasons);
    });
  } catch (err) {
    console.error("Error retrieving seasons from the database:", err);
    res
      .status(500)
      .send({ error: "An error occurred while retrieving seasons." });
  }
});

// endpoint is GET(/years/:year)
router.get("/:year", async (req, res) => {
  const { year } = req.params;

  let yearData;

  try {
    yearData = fs.readFileSync(
      `${process.cwd()}/src/resources/sample_payloads/years/mrhs-${year}.json`,
      (err, jsonData) => {
        if (err) {
          console.log("oh nooooooooo");
          console.error(err);
          return null;
        }
        console.log(`reading ${year} data successfull`);
        let year = JSON.parse(jsonData);
        return year;
      },
    );
  } catch (err) {
    console.log("Error with readFileSync");
    if (err.code === "ENOENT") {
      console.log("Year data file not found, proceeding without it.");
    }
    console.error(err);
    yearData = null;
  }

  if (yearData !== null) {
    res.status(200).send(buildYearData(yearData));
  } else {
    res.status(500).send({ message: "Year data not found" });
  }
});

module.exports = router;
