const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Task = sequelize.define('tasks', {
    id: {
        type: Sequelize.INTEGER(11),
        autoIncrement: true,
        // allowNull: false,
        primaryKey: true
    },
    nameTask: Sequelize.STRING(225),
    nameuser: {
        type: Sequelize.STRING(50)
            // allowNull: false
    },
    idproject: {
        type: Sequelize.INTEGER(11),
    },
    description: {
        type: Sequelize.STRING(225),
    },
    deadline: {
        type: Sequelize.STRING(10)
    },
    iduser: {
        type: Sequelize.INTEGER(11),
        // allowNull: false,
    },
    date: {
        type: Sequelize.STRING(10)
            // allowNull: false
    },
}, { timestamps: false });
module.exports = Task;