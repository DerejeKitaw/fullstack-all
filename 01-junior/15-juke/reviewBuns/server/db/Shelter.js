const Sequelize = require('sequelize');
const db = require('./_db')

const Shelter = db.define('shelter', {
  name: Sequelize.STRING
})

module.exports = Shelter;
