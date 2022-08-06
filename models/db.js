require("dotenv").config();
const Sequelize = require("sequelize");

const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

const sequelize = new Sequelize('todo', DB_USERNAME, DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: false
});

// sequelize.authenticate().then(() => {
//     console.log("connection successfully!");
// }).catch((err) => {
//     console.log("connection failed!");
// })

module.exports = sequelize;