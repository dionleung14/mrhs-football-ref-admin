import { Sequelize } from "sequelize";
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME_ROOT,
  process.env.DB_PASSWORD_ROOT,
  {
    // const sequelize = new Sequelize("world", "root", process.env.DB_PASSWORD_ROOT, {
    host: "localhost",
    dialect: "mysql",
  },
);

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default sequelize;
