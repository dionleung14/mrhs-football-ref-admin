import sequelize from "../../config/connection.js";
import { DataTypes } from "sequelize";

const Season = sequelize.define(
  "Season",
  {
    seasonId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    wins: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    losses: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    winPercentage: {
      type: DataTypes.VIRTUAL(DataTypes.STRING),
      get() {
        const totalGames = this.wins + this.losses;
        if (totalGames === 0) {
          return "0.000";
        } else {
          const percentage = this.wins / totalGames;
          return `${percentage.toFixed(3)}`;
        }
      },
      set(value) {
        throw new Error("Do not try to set the `winPercentage` value!");
      },
    },
    pointsFor: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    pointsAgainst: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    games: {
      type: DataTypes.JSON,
      // allowNull: false,
    },
  },
  { timestamps: false },
);

export default Season;
