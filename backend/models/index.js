const dbConfig = require('../config/db.config.js')
const { Sequelize } = require('sequelize')

try {
    if (process.env.NODE_ENV == 'production') {
        var sequelize = new Sequelize(process.env.DATABASE_URL)
    } else {
        var sequelize = new Sequelize(dbConfig)
    }

    sequelize.authenticate(); //await
    console.log('Connection has been established successfully.');
} catch (err) {
    console.error('Unable to connect to the database:', err);
}

