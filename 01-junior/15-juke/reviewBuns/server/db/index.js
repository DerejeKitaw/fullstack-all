const db = require('./_db');
const Bun = require('./Bun');
const Shelter = require('./Shelter');

Bun.belongsTo(Shelter)
//adds shelterId to each bun
//bunny.getShelter()
//bunny.setShelter()

Shelter.hasMany(Bun)
//adds shelterId to each bun
//shelter.getBuns
//shelter.addBun

module.exports = db

