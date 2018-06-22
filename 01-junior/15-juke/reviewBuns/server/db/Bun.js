const Sequelize = require('sequelize');
const db = require('./_db')
const Op = Sequelize.Op

const Bun = db.define('bun', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isAlpha: true
    }
  },
  image: Sequelize.STRING,
  validate: {
    isUrl: true
  },
  color: Sequelize.STRING
})

Bun.findByColor = function(color) {
   return this.findAll({
    where: {
      color: color
    }
  })
}

Bun.prototype.getFriends = function() {
  Bun.findAll({
    where: {
      shelterId: this.shelterId,
      id: {
        [Op.ne]: this.id
      }
    }
  })
}

Bun.beforeCreate(function(bun) {
  bun.name = `${bun.name[0].toUpperCase()}${bun.name.slice(1)}`
})

// all the bunnies that are with a particular bunny at their shelter

module.exports = Bun;
