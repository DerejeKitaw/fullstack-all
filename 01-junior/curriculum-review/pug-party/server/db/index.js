const db = require('./database')
const Pug = require('./pugs')
const Party = require('./party')

Pug.belongsToMany(Party, {through: 'pug_parties'})
Party.belongsToMany(Pug, {through: 'pug_parties'})

Party.belongsTo(Pug, {as: 'host'})
Pug.hasMany(Party, {foreignKey: 'hostId'})

module.exports = {
  db,
  Pug,
  Party
}
