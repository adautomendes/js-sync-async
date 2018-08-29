# js-sync-async
Exemplo que demonstra o modo com que o NodeJS trata as chamadas às funções de forma assícrona e como sincronizá-las utilizando Promise.
Existem 2 arquivos index-*.js, um deles (index-async.js) somente faz chamadas à funções sem se preocupar com a sincronia da execução e no segundo (index-sync.js) as chamadas possuem callback que sincroniza suas chamadas utilizando Promise.

## Dependências
NodeJS instalado
Banco de Dados MySQL instalado.

## Backend
* [Restify](http://restify.com/) - Framework de REST API para NodeJS
* [MySQL](https://www.npmjs.com/package/mysql) - Plugin de conexão com o BD

## Deployment
* Execute 'ec021.sql' no seu MySQL
* Configure a variável 'con' os arquivos dao-*.js com as suas configurações do MySQL
* Abra o terminal na pasta do projeto e execute o comando abaixo para instalar as dependências do NodeJS:
```
npm install
```
* Execute o comando abaixo para subir o servidor (sem sincronia):
```
node index-async.js
```
* Acesse o endpoint abaixo para conferir a resposta:
```
http://localhost:5000/listar
```

* Pare (CTRL+C) e execute o comando abaixo para subir o servidor (com sincronia):
```
node index-sync.js
```
* Acesse o endpoint abaixo para conferir a resposta:
```
http://localhost:5000/listar
```

## Funcionamento
* index-async.js
** Como a chamada ao banco de dados não está sincronizada com a API, a resposta à request ficará vazia.
* index-sync.js
** Com o uso de Promise o sistema garante que a API irá aguardar o retorno do BD antes de retornar a response, fazendo com que o funcionamento seja o esperado.