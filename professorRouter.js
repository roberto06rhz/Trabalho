const express = require('express');

const router = express.Router();

const Professor = require('./professor');

// Banco de dados de exemplo
// const alunos = [
//   { id: 1, nome: 'João', idade: 20 },
//   { id: 2, nome: 'Maria', idade: 21 },
//   { id: 3, nome: 'José', idade: 19 },
//   { id: 4, nome: 'Alef', idade: 22 },
// ];

// Operações CRUD do recurso aluno
router.get('/', async (req, res) => {
  //https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
  const professor = await Professor.findAll()
  res.send(professor);
});

router.get('/:id', async (req, res) => {
  const professorId = req.params.id;
  //https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
  const professor = await Aluno.findByPk(professorId)
  res.send(professor);
});

router.get('/:id/nome', async (req, res) => {
  const professorId = await Professor.findByPk(professorId)
   res.send({
    nome: professorId.nome
  })
})

router.post('/', async (req, res) => {
  let novoProfessor = req.body;
  novoProfessor = await Professor.create(req.body)
  res.send({ message: 'Aluno adicionado com sucesso', professor: novoProfessor });
});

router.put('/:id', async (req, res) => {
  const professorId = req.params.id; 
  const dadosNovosProfessor = req.body;

  let professor = await Professor.findByPk(professorId);

  if (professor) {
    professor.set({...dadosNovosProfessor})
    await professor.save();
    res.send({ message: 'Aluno atualizado com sucesso'});
  } else {
    res.status(404).send({ message: 'Aluno não encontrado' });
  }
});

router.delete('/:id', async (req, res) => {
  const professorId = req.params.id;
  let professor = await Professor.findByPk(professorId);
  if (professor) {
    await professor.destroy();
    res.send({ message: 'Aluno excluído com sucesso' });
  } else {
    res.status(404).send({ message: 'Aluno não encontrado' });
  }
});

module.exports = router;

