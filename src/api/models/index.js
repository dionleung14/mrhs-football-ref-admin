"use strict";

const db = {};

import "./Player.js";
import "./Season.js";
import "./Team.js";
import "./Game.js";

import sequelize from "../../config/connection.js";

db.sequelize = sequelize;
// db.Sequelize = Sequelize;
console.log(db.sequelize.models);

export default db;
// const User = sequelize.define("user", {
//   name: DataTypes.TEXT,
//   favoriteColor: {
//     type: DataTypes.TEXT,
//     defaultValue: "green",
//   },
//   age: DataTypes.INTEGER,
//   cash: DataTypes.INTEGER,
// });

// (async () => {
//   await sequelize.sync({ force: true });
//   // Code here
// })();
/*
const City = sequelize.define(
  "City",
  {
    // Model attributes are defined here
    ID: {
      // type: DataTypes.INTEGER,
      // allowNull: false,
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    Name: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    CountryCode: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    District: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    Population: {
      type: DataTypes.INTEGER,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "City", // We need to choose the model name
    tableName: "city",
    timestamps: false, // Disable timestamps if your table doesn't have createdAt and updatedAt fields
  },
);
*/
// try {
//   console.log("Trying to query the database...");
//   // const cities = await City.findAll();
//   const cities = City.findAll();
//   Promise.resolve(cities).then(cities => {
//     console.log(cities[0].dataValues);
//   });
// } catch (error) {
//   console.error("Problem querying the database:", error);
// }

// try {
//   console.log(
//     "Trying to create an instance in the database inside models file...",
//   );
//   const cityOfDion = City.build({
//     ID: 1,
//     Name: "Dion",
//     CountryCode: "USA",
//   });
//   Promise.resolve(cityOfDion).then(response => {
//     console.log(response.dataValues);
//   });
// } catch (error) {
//   console.error("Problem querying the database:", error);
// }

// try {
//   Promise.resolve(City.sync({ alter: true }))
//     .then(() => {
//       console.log("City model synchronized with the database.");
//       Promise.resolve(
//         City.create({
//           // ID: 9999,
//           // id: 9999,
//           Name: "fran",
//           CountryCode: "USA",
//           Fake: "maybe",
//           District: "maybe",
//           GDP: 10,
//         })
//           .then(() => {
//             console.log("Created record for city of Dion");
//           })
//           .catch(error => {
//             console.error("Error creating record the City model:", error);
//           }),
//       );
//     })
//     .catch(error => {
//       console.error("Error synchronizing the City model:", error);
//     });
//   console.log("Trying to create an instance in the database...");
// const cityOfDion = City.create({
// Promise.resolve(
//   City.create({
//     // ID: 9999,
//     // id: 9999,
//     Name: "Dion",
//     CountryCode: "USA",
//     Fake: "maybe",
//   })
//     .then(() => {
//       console.log("Created record for city of Dion");
//     })
//     .catch(error => {
//       console.error("Error creating record the City model:", error);
//     }),
// );

// const savedCityOfDion = cityOfDion.save();
// Promise.resolve(savedCityOfDion).then(response => {
//   console.log(response);
//   console.log(response.dataValues);
// });
// } catch (error) {
//   console.error("Problem querying the database:", error);
// }

/* From group-planner models/index.js 
'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];
const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

console.log(db);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
*/

/*const { DataTypes, Model } = require("sequelize");

// Import MySQL connection.
const sequelize = require("./connection");

class City extends Model {}

City.init(
  {
    // Model attributes are defined here
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Name: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    CountryCode: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    District: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    Population: {
      type: DataTypes.INTEGER,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "City", // We need to choose the model name
    tableName: "city",
    timestamps: false, // Disable timestamps if your table doesn't have createdAt and updatedAt fields
  },
);

// try {
//   console.log("Trying to query the database...");
//   // const cities = await City.findAll();
//   const cities = City.findAll();
//   Promise.resolve(cities).then(cities => {
//     console.log("hiiiiiiiiii");
//     console.log(cities[0].dataValues);
//   });
//   // console.log(cities[0].toJSON());
//   console.log(cities);
// } catch (error) {
//   console.error("Unable to connect to the database:", error);
// }

module.exports = City;
*/
