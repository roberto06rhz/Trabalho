const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

/** Representação de uma tabela do banco mapeada nessa classe */
/**
 * https://sequelize.org/docs/v6/core-concepts/model-basics/ 
 * 
 * */

const Professor = sequelize.define('Professor', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,

  },
  disciplina: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  formacao: {
    type: DataTypes.STRING,
    allowNull: false
    
  },
}, {
  sequelize,
  tableName: 'lista_de_professor',
  timestamps: false,
});

module.exports = Professor;
