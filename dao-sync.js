var mysql = require('mysql');

/*
    Criando objeto com as credenciais
    de conexão com o BD
*/
var con = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ec021'
}

module.exports = {

    listar: function() {
        return new Promise( /* Criando uma promise que servirá para retornar o resultado da busca no BD */
            function(resolve, reject) {
                /** Abrindo a conexão com o BD */
                var connection = mysql.createConnection(con);
                connection.connect();

                var toddyLista; //Variável que retornará os resultados

                /** Escrevendo query que será executada */
                var strQuery = "SELECT id, lote, conteudo, validade FROM toddy;";

                /** Exibindo query no console */
                console.log(strQuery);

                /** Executando query e processando resultados */
                var result = null;
                connection.query(strQuery, function(err, rows, fields) {
                    if (!err) { //Se não houver erros
                        resolve(rows); //Retornamos as linhas
                    } else { //Caso contrário
                        reject(err); //Retornamos dados sobre o erro
                    }
                });

                /** Encerrando conexão com o BD */
                connection.end();
            }
        );
    }
 }