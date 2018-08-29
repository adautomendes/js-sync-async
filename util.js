var sleep = require("system-sleep");

//O comando abaixo serve para expor os serviços deste arquivo
module.exports = {
    /** Função para imprimir SQL's de forma padronizada */
    printSQL: function (sql) {
        var prefix = '[SQL] - ';
        console.log(prefix + sql);
    },
    /** Função para gerar um valor aleatório de delay */
    /** Parâmetro: Tempo máximo em segundos */
    rndDelay: function (max) {
        var maxMs = max * 1000; //Convertendo em ms
        var rnd = Math.random() * maxMs;
        rnd = parseInt(rnd);
        console.log("-\tEsperando " + rnd + "ms para enviar a resposta...\t-");
        sleep(rnd);
    }
}