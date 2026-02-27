const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

// require("./src/config/connection");

// Requiring our models for syncing (to replace connection import)
const db = require("./src/api/models/").default;

// const { parse, stringify, toJSON, fromJSON } = require("flatted"); // used for AWS deploy

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8081;

app.use(require("./src/api/controllers"));

app.get("/", (req, res) => {
  console.log("Trying to hit the slash route with a GET");
  res.status(200).send("Server for football admin is working");
});

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, () => {
    console.log("Server is now listening on PORT: " + PORT);
  });
});

/* var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
}); */
