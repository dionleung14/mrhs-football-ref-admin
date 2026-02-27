import sequelize from "../../config/connection.js";
import { DataTypes } from "sequelize";

const Player = sequelize.define(
  "Player",
  {
    playerId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fullName: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
      set(value) {
        throw new Error("Do not try to set the `fullName` value!");
      },
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
  {
    timestamps: false,
  },
);

// associate to for foreign key - each cost belongs to an event
Player.associate = function (models) {
  Player.belongsTo(models.event);
};

export default Player;
// module.exports = Player;
