const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./index')

const User = sequelize.define('User', {
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
        // allowNull defaults to true
    }
}, {
    // Other model options go here
});

User.sync({ force: true });
console.log('test', User === sequelize.models.User);