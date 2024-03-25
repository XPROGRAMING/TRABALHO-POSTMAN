// Pessoa.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./db');

const Pessoa = sequelize.define('Pessoa', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  telefone: {
    type: DataTypes.STRING
  },
  dataNascimento: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      is: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/ // Validar o CPF
    }
  },
  status: {
    type: DataTypes.ENUM('Ativo', 'Inativo'),
    defaultValue: 'Ativo'
  }
});

module.exports = Pessoa;
