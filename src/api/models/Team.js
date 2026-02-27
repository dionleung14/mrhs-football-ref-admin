import sequelize from "../../config/connection.js";
import { DataTypes } from "sequelize";

const Team = sequelize.define(
  "team",
  {
    teamId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    season: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gradYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    yearsActive: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  },
  { timestamps: false },
);

// associate to Players for foreign key - each team has many players, and each player can be on many teams (many-to-many relationship)
Team.associate = function (models) {
  Team.belongsToMany(models.Player, {
    through: "PlayerTeams",
    foreignKey: "teamId",
    otherKey: "playerId",
  });
};

export default Team;
