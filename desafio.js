/* usando readline */


var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


var primos = [];



function desafioPrimos() {

    rl.question("Digite um número: ", function (numero) {
        numero = parseInt(numero);

        numerosPrimos:
            for (var x = 2; x <= numero; x++) {
                for (var y = 2; y < x; y++) {
                    if (x % y === 0)
                        continue numerosPrimos;
                };
                primos.push(x);
                rl.close();
            };
        console.log(primos);
    });

};

desafioPrimos();





// função com dados vindo do input



function desafioPrimos() {
    var numero = parseInt(document.getElementById('numerocalculo').value);
    var primos = [];

    numerosPrimos:
        for (var x = 2; x <= numero; x++) {
            for (var y = 2; y < x; y++) {
                if (x % y === 0)
                    continue numerosPrimos;
            };
            primos.push(x);
        };
    return primos;
};

