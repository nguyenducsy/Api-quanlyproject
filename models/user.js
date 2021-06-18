const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        required: true
    },
    email: {
        type: Sequelize.STRING,
        required: true
    },
    password: {
        type: Sequelize.STRING,
        required: true
    },
    img: {
        type: Sequelize.STRING
    },
    typeUser: {
        type: Sequelize.INTEGER,
        required: true
    }
}, { timestamps: false });
module.exports = User;