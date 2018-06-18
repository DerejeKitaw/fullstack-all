const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/example', {logging: false});

const Student = db.define('student', {
  first_name: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  last_name: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  grade: {
    type: Sequelize.INTEGER,
    validate: {
      max: 8,
      min: 0
    }
  }
});

module.exports = db;
