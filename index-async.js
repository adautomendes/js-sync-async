//Importando a biblioteca do Restify
var restify = require('restify');
var dao = require('./dao-async');
var util = require('./util');

function listar(req, res, next) {
	//Definindo o formato da response
	res.setHeader('content-type', 'application/json');
	res.charSet('UTF-8');

	var toddyLista = dao.listar();
	
	util.rndDelay(3); //Gerando um atraso aleatório na resposta do servidor

	res.json(toddyLista);

	/** Encerrando método da REST API */
	next();
}

//Configurando servidor
var server = restify.createServer({	name: 'Backend refactor' });

server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());

server.get('/listar', listar);

//Definindo porta em que subiremos o servidor
var port = process.env.PORT || 5000;

//Subindo o servidor
server.listen(port, function() {
	console.log('%s rodando', server.name);
});