const Sequelize = require('sequelize');

const sequelize = new Sequelize('atividade_de_pweb2', 'aluno', 'aluno', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
