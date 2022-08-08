const sequelize = require("./db");
const Sequelize = require("sequelize");

const todo = sequelize.define("todo", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  open: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
});

todo.sync();

module.exports = todo;
