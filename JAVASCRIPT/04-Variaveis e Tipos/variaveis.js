// Exemplo de Hoisting:

numberOne = 1; // atribuição de um valor a uma variável não declarada

console.log(numberOne + 2);

var numberOne; // declaração da variável após a atribuição do valor

// Declaração / Redeclaração / Reatribuição:

var firstName = "João"; // variáveis globais - Declaração inicial
var lastName = "Souza";

if (firstName === "João") {
    var firstName = "Pedro"; // Redeclaração da variável firstName
    let lastName = "Rodrigues"; // Declaração de uma Nova Variável dentro do bloco
    lastName = "Silva"; // Reatribuição de valor à Nova Variável declarada
    console.log(lastName);
}

console.log(firstName, lastName);