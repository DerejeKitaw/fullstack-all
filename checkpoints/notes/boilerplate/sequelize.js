//requirements for a database + sequelize
let somedatabasename = 'yourdatabasename';
const Sequelize = require('sequelize');
const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${somedatabasename}`,
  {
    logging: false,
  }
);

// sequelize association methods:
const sequelizeAssociationMethods =
  '/home/november/Downloads/pix/sequelize-association-methods.png';

// exports for database + sequelize
module.exports = db;
