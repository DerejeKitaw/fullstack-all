const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost/codys-cafe', {
  logging: false
})

const Pug = db.define('pug', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

const Coffee = db.define('coffee', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  ingredients: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
})

Pug.belongsTo(Coffee, {as: 'favorite_coffee'})

Pug.afterCreate((instance) => {
  console.log('after create\n')
  console.log(instance.dataValues)
})

Pug.beforeCreate((instance) => {
  console.log('before create\n')
  console.log(instance.dataValues)
})

Pug.beforeValidate((instance) => {
  console.log('before validate\n')
  console.log(instance.dataValues)
})

Pug.afterValidate((instance) => {
  console.log('after validate\n')
  console.log(instance.dataValues)
})

module.exports = {
  db,
  Pug,
  Coffee
}
