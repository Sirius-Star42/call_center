const dbConfig = require('../config/db.config.js')
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(dbConfig)

try {
    sequelize.authenticate(); //await
    console.log('Connection has been established successfully.');
} catch (err) {
    console.error('Unable to connect to the database:', err);
}

