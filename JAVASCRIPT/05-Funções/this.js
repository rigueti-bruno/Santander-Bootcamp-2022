const pessoa = {
    firstName: "André",
    lastName: "Soares",
    id: 1,
    fullName: function() { // método
        return this.firstName + " " + this.lastName; // this = pessoa
    },
    getId: function() { // método
        return this.id // this = pessoa
    }
};

console.log(pessoa.fullName());

console.log(pessoa.getId());



const person = {
    name: "Miguel"
};

function getSomething() {
    console.log(this.name);
}

const myObj = {
    num1: 2,
    num2: 4
};

function soma(a,b) {
    console.log(this.num1 + this.num2 + a + b);
}

// Método Call:

getSomething.call(person); // vincula a função a um objeto com o qual não tem relação

soma.call(myObj, 1, 5); // permite a função receber um objeto co o qual não tem relação como parâmetro e outros 2 parâmetros

// Método Apply:

getSomething.apply(person); // vincula a função a um objeto com o qual não tem relação também

soma.apply(myObj, [1,5]); // permite a função receber um objeto co o qual não tem relação como parâmetro e um array de valores como parâmetro

// Método Bind:

const retornaNomes = function() {
    return this.nome;
};

let bruno = retornaNomes.bind({nome: 'Bruno'}); // Atribui o valor de um objeto a uma variável segundo a estrutura de uma função e converte a variável em uma função executável.

console.log(bruno());