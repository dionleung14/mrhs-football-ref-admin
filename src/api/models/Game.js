import sequelize from "../../config/connection.js";
import { DataTypes } from "sequelize";

const Game = sequelize.define(
  "Game",
  {
    gameId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    season: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      // allowNull: false,
    },
    opponent: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    home: {
      type: DataTypes.BOOLEAN,
    },
    pointsFor: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    pointsAgainst: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    resultWin: {
      type: DataTypes.BOOLEAN,
      // allowNull: false,
    },
    pointsForQ1: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    pointsForQ2: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    pointsForQ3: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    pointsForQ4: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    pointsForOT: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    pointsAgainstQ1: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    pointsAgainstQ2: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    pointsAgainstQ3: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    pointsAgainstQ4: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    pointsAgainstOT: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    plays: {
      type: DataTypes.JSON,
      // allowNull: false,
    },
  },
  {
    // Other model options go here
    // sequelize, // We need to pass the connection instance
    // modelName: "City", // We need to choose the model name
    // tableName: "city",
    timestamps: false, // Disable timestamps if your table doesn't have createdAt and updatedAt fields
  },
);

// // associate to Players for foreign key - each team has many players, and each player can be on many teams (many-to-many relationship)
// Game.associate = function (models) {
//   Game.belongsTo(models.season, {
//     through: "SeasonGames",
//     foreignKey: "gameId",
//     otherKey: "seasonId",
//   });
// };

export default Game;
// module.exports = Game;
