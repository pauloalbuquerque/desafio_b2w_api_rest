
 # API Rest Star Wars B2W em NodeJs


## Sumário

 <ol>
  <li><a href="#Sobre">Descrição</a></li>
  <li><a href="#Tecnologias">Tecnologias utilizadas</a></li>
  <li><a href="#Requisitos">Requisitos</a></li>
  <li><a href="#Testes">Testes</a></li>


  <li><a href="#Funcionalidades">Funcionalidades</a>
    <ol>
      <li><a href="#Insere">Inserindo um planeta</a></li>
      <li><a href="#Lista">Listando todos os planetas</a></li>
      <li><a href="#buscaid">Fazendo busca por ID</a></li>
      <li><a href="#deleta">Removendo um planeta</a></li>
    </ol>
  </li>
    <li><a href="#final">Observações</a></li>

</ol> 

<dl>
  
### <a name="Sobre">1. Descrição</a> 

API Rest desenvolvida em node.js que armazene dados dos planetas

### <a name="Tecnologias">2.Tecnologias utilizadas</a> 
&nbsp;&nbsp;&nbsp;&nbsp;
- Node.JS 
- Framework Express
- MongoDB

### <a name="Requisitos">3.Requisitos</a>  
&nbsp;&nbsp;&nbsp;&nbsp; Para utilizar o projeto, será necessário ter instalado em sua máquina o Node.js e o MongoDB.

- https://nodejs.org/en/download/
- https://www.mongodb.com/download-center#atlas


Após efetuar o download e instalar os requisitos, será necessário clonar o projeto para sua máquina, ou fazer download do .zip do projeto.

`$ git clone <url-do-projeto-git>
` 

Feito isso, será necessário instalar as depêndencias para o seu computador, atravès do comando:

`
$ cd <pasta-que-instalou-o-projeto>`


`
$ npm install
`

Após esse passo, para rodar a API, execute o comando:
`
nodemon app
`

Se tudo correu bem, você terá uma mensagem no console informando que a API está online na porta 3000. (Server On, port 3000)

### <a name="Testes">4.Testes</a>  

Foi realizado testes com o aplicativo Postman, onde obteve sucesso em todas as requisições.
Para visualisar o json contendo as informações, acesse o diretório: "./api/test"

### <a name="Funcionalidades">5.Funcionalidades</a>

Veja as rotas e como fazer as requisições na API:

#### <a name="Insere">I. Inserindo um planeta:</a>  

Passar parâmetros no corpo do body e em seguida submeter a requisição POST.

http://localhost:3000/planets

#### <a name="Lista">II. Listando todos os planetas:</a>

Passar solicitação GET para /planets.

Ex:
http://localhost:3000/planets

#### <a name="buscaid">III. Fazendo busca por ID:</a>

Para fazer uma busca por id você deverá fazer uma solicitação get para "/planets/" junto com a id que você desejar.

Ex:
http://localhost:3000/planets/5bn6n5bad0100a87gfr


#### <a name="deleta">V. Removendo um planeta:</a>

Para remover um planeta basta fazer uma solicitação delete para "/planets/" indicando a ID do planeta desejado.

http://localhost:3000/planets/5bn6n5bad0100a87gfr

### <a name="final">6. Observações</a>

Teste BackEnd NodeJs B2W
