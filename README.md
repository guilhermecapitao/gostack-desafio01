<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<p align="center"><b>Desafio 1: Conceitos do NodeJS</b></p>

  ## :rocket: Sobre o desafio
  
  Primeiro desafio do Bootcamp GoStack da Rocketseat. É um sistema para armazenar projetos e suas respectivas tarefas atráves de requisições http.
  Semelhante ao projeto <a href="https://github.com/guilhermecapitao/modulo01">modulo01</a>, o armazenamento é feito na própria aplicação, não há comunicação ainda com um banco de dados.
  
  ## Tecnologias e ferramentas

 <ul>
  <li>Node.js</li>
  <li>Express</li>
  <li>Nodemon</li>
 </ul>
  
  ## Rotas
  
  <ul>
    <li> GET </li>
  </ul>
  
   `/projects` - Método para listar todos os projetos
  
<hr width="20%"></hr>
  <ul>
    <li> POST </li>
  </ul>
  
   `/projects` - Recebendo no corpo da requisição os campos `id` e `title`, um novo projeto será cadastrado sem tarefas.
   
   `/projects/:id/tasks` - Passando o `id` por parâmetro para a rota e no corpo da requisição o campo `title`, poderá adicionar uma tarefa ao projeto especificado pelo id. 
  
  <hr width="20%"></hr>
  <ul>
    <li> PUT </li>
  </ul>
  
   `/projects/:id` - Passando o `id` do projeto através da rota, pode alterar o título do projeto enviando no corpo da requisição o campo `title`
  
  <hr width="20%"></hr>
    <ul>
    <li> DELETE </li>
  </ul>
  
   `/projects/:id` - Passando o `id` do projeto através da rota, pode deletar o projeto.
  
 ## Rodando o projeto:

1 - Baixe o projeto e abra ele utilizando seu editor preferido.

2 - Abra o console e digite `npm install` (ou `yarn install`, se o tiver instalado) para fazer a instalação dos pacotes necessários (dependências).

3 - Após isso, digite no console `npm run dev` ou `yarn dev`(se tiver o yarn instalado), para começar a rodar o servidor com a aplicação.


