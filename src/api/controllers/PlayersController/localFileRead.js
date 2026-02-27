const fs = require("fs");

const getLocalFileData = (statType, playerId) => {
  console.log(`getting local file data for ${statType} - ${playerId}`);
  let returnData = {};
  try {
    returnData = fs.readFileSync(
      `${process.cwd()}/src/resources/sample_payloads/players/${statType}/${playerId}.json`,
      (err, jsonData) => {
        if (err) {
          console.log(`Error reading ${statType} data for ${playerId}`);
          // console.error(err);
          returnData = null;
        }
        console.log(`Reading ${playerId}'s ${statType} data successful`);
        let player = JSON.parse(jsonData);
        returnData = player;
      },
    );
  } catch (err) {
    console.log("Error with readFileSync");
    if (err.code === "ENOENT") {
      console.log(`${statType} data file not found, proceeding without it.`);
    }
    // console.error(err);
    returnData = null;
  }

  return returnData;
};

module.exports = { getLocalFileData };
