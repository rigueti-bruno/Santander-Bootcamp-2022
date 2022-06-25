// Loop For:

function multiplicaPorDois (arr) {
    let multiplicados = [];

    for (let i = 0; i < arr.length; i++) { // Verifica cada valor do array
        multiplicados.push(arr[i] * 2); // multiplica cada valor e o adiciona ao array multiplicados
    }
    return multiplicados; // retorna o array com os valores multiplicados por 2
}

let MEUS_NUMEROS = [2,33,456,356,40];

console.log(multiplicaPorDois(MEUS_NUMEROS));

// Loop For ... in:

function forInExemplo(obj) {
    for(prop in obj) { // verifica as propriedades dos objeto
        console.log(prop); // imprime as chaves do objeto
    }
}

function forInExemplo2(obj) {
    for(prop in obj) { // verifica as propriedades do objeto
        console.log(obj[prop]); // imprime os valores do objeto
    }
}

const meuObjeto = {
    nome: "João",
    idade: 20,
    cidade: "Salvador"
};

forInExemplo(meuObjeto);

forInExemplo2(meuObjeto);

// For ... of:

function logLetras(string) {
    for (letra of string) { // loop que itera em uma palavra/string e verifica seus caracteres
        console.log(letra); // imprime cada caracter da string
    }
}

const palavra = "abacaxi";

logLetras(palavra);

function logNumeros(array) {
    for (num of array) { // loop que itera em cada item do array sem precisar de índices
        console.log(num); // imprime cada valor do array
    }
}

const nums = [30,20,233,2];

logNumeros(nums);