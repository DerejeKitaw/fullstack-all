const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/buns');

const Bun = db.define('bun', {
  name: Sequelize.STRING,
  image: Sequelize.STRING
})

module.exports = db;
