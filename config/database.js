const { Sequelize } = require("sequelize");

const {
  MYSQL_HOST,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
} = require("./environment");

const db = new Sequelize(MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, {
  host: MYSQL_HOST,
  dialect: "mysql",
});

db.authenticate()
  .then(() => console.log(`Connected to database`))
  .catch((error) => console.log(error));

module.exports = db;
