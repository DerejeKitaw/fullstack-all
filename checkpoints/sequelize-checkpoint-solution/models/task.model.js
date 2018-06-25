'use strict';

var db = require('./database');
var Sequelize = require('sequelize');

// Make sure you have `postgres` running!

var Task = db.define('Task', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  complete: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  due: Sequelize.DATE,

  //Virtuals
  timeRemaining: {
    type: Sequelize.VIRTUAL,
    get() {
      return this.due ? this.due - Date.now() : Infinity;
    }
  },
  overdue: {
    type: Sequelize.VIRTUAL,
    get() {
      return !this.complete && this.timeRemaining < 0;
    }
  }
});

//Class Methods

Task.clearCompleted = function () {
  return this.destroy({
    where: {complete: true}
  });
};

Task.completeAll = function () {
  return this.update({
    complete: true
  }, {
    where: {complete: false},
    returning: true // not tested in the spec, but a very convenient Postgres feature
  });
};

//Instance Methods

Task.prototype.addChild = function (task) {
  task.parentId = this.id; // set me as the parent,
  return this.constructor.create(task); // and make a new task.
};

Task.prototype.getChildren = function () {
  return this.constructor.findAll({
    where: {parentId: this.id} // get all tasks whose parent is me.
  });
};

Task.prototype.getSiblings = function () {
  return this.constructor.findAll({
    where: {
      parentId: this.parentId, // get all tasks with my parent...
      id: {$ne: this.id} // ...but don't include me.
    }
  });
};

//Hooks

Task.hook('beforeDestroy', function (task) {
  return this.destroy({
    where: {parentId: task.id},
    individualHooks: true // not tested in the spec, but a logical choice here
  });
});

Task.belongsTo(Task, {as: 'parent'});

module.exports = Task;
