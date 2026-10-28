const Sequelize = require('sequelize');
const database = require('./db');

const usuario = database.define('usuario',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true

    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.DOUBLE
    },
    descricao: Sequelize.STRING
})

module.exports = usuario;
