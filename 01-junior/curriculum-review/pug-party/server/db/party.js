const Sequelize = require('sequelize')
const db = require('./database')

const Party = db.define('parties', {
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  location: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
})

module.exports = Party
