const Sequelize = require('sequelize')
const db = require('./database')

const Pug = db.define('pugs', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  age: {
    type: Sequelize.INTEGER,
    validate: {
      min: 3
    }
  },
  favoriteDrink: {
    type: Sequelize.STRING,
    defaultValue: 'water'
  },
  biography: {
    type: Sequelize.TEXT
  },
  color: {
    type: Sequelize.STRING
  }
})

module.exports = Pug
