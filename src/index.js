const express = require('express');

const server = express();

server.use(express.json());

/**
 * Variável local para armazenar os projetos (com exemplos)
 */
const projects = [
  {
    id: 0,
    title: "módulo 01",
    tasks: ["tarefa 1", "tarefa 2", "tarefa 3", "tarefa 4",]
  },
  {
    id: 1,
    title: "módulo 02",
    tasks: ["tarefa 1", "tarefa 2", "tarefa 3", "tarefa 4",]
  },
]

/**
 * Middleware para contar o número de requisições
 */
server.use( (req, res, next) => {
  console.count();
  return next();
}) 

/**
 * Middleware para verificar a existência do projeto antes da requisição
 */
function checkProjectExists(req, res, next) {
  const { id } = req.params;
  let project = projects.find(x => x.id == id);

  if(!project)
    return res.status(400).json({ message: 'Project does not exists' })

  return next();
}

/**
 * Listagem de todos os projetos
 */
server.get('/projects', (req, res) => {
  return res.json(projects);
})

/**
 * @param {int} id
 * @param {string} title - novo título
 * Altera o título do projeto passado pelo parâmetro da rota
 */
server.put('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  let project = projects.find(x => x.id == id);
  project.title = title;

  return res.json(projects);
})

/**
 * @param {int} id
 * Deleta o projeto conforme id passado no parâmetro da rota
 */
server.delete('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;
  
  let projectIndex = projects.findIndex(x => x.id == id);
  projects.splice(projectIndex, 1)

  return res.send()
})

/**
 * @param {int} id
 * @param {string} title - título do projeto
 */
server.post('/projects', (req, res) => {
  const { id } = req.body;
  const { title } = req.body;

  const newProject = {
    id,
    title,
    tasks: []
  }

  projects.push(newProject);

  return res.json(projects);
})

/**
 * @param {int} id
 * @param {string} title - título da nova tarefa a ser adicionada
 */
server.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  let project = projects.find(x => x.id == id);

  project.tasks.push(title);

  return res.json(project)
})

server.listen(3000);