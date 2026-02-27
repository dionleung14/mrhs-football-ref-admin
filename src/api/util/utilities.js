const buildPlayerData = (
  playerId,
  player,
  receivingData,
  defensiveData,
  rushingData,
  passingData,
  kickingData,
) => {
  console.log("Building player data...");
  // console.log(defensiveData.toString("utf8"));

  return {
    playerId,
    player,
    receivingData: {
      type: "receiving",
      data: receivingData ? JSON.parse(receivingData?.toString("utf8")) : null,
    },
    defensiveData: {
      type: "defensive",
      data: defensiveData ? JSON.parse(defensiveData.toString("utf8")) : null,
    },
    rushingData: {
      type: "rushing",
      data: rushingData ? JSON.parse(rushingData.toString("utf8")) : null,
    },
    passingData: {
      type: "passing",
      data: passingData ? JSON.parse(passingData.toString("utf8")) : null,
    },
    kickingData: {
      type: "kicking",
      data: kickingData ? JSON.parse(kickingData.toString("utf8")) : null,
    },
  };
};

const buildYearData = yearData => {
  console.log("Building year data...");
  return {
    type: "year",
    data: yearData ? JSON.parse(yearData.toString("utf8")) : null,
  };
};
module.exports = {
  buildPlayerData,
  buildYearData,
};
