const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Post = sequelize.define('projects', {
    id: {
        type: Sequelize.INTEGER(11),
        autoIncrement: true,
        // allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING(225),
    idtask: {
        type: Sequelize.INTEGER(11)
            // allowNull: false
    },
    iduser: {
        type: Sequelize.INTEGER(11),
        // allowNull: false,
    },
    teamsize: {
        type: Sequelize.INTEGER(11)
            // allowNull: false
    },
    date: {
        type: Sequelize.STRING(10)
            // allowNull: false
    },
    total: {
        type: Sequelize.INTEGER(11)
    }
}, { timestamps: false });
module.exports = Post;