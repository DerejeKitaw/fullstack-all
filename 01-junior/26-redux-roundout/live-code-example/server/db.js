process.env.DATABASE_URL = 'postgres://localhost/pugs'

const Sequelize = require('sequelize')
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/YOUR_DB', {
  logging: false
})

db.define('pugs', {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER
})

module.exports = db
