let objeto = {}; // declaração de um objeto vazio com {}

objeto.name = "Julia"; // inclui uma chave com um valor no objeto

objeto.age = 20;

console.log(objeto);

console.log(Object.values(objeto)); // retorna os valores dentro do objeto

console.log(Object.keys(objeto)); // retorna as chaves do objeto

let person = { // declaração de um objeto já com conteúdo
    nome: "Julia",
    age: 20,
    adress: "Rua 20"
};

console.log(person);

// Duas formas de retornar os valores contidos em chaves específicas no objeto:
console.log(person.nome);

console.log(person["adress"]);

person["numberOfSiblings"] = 3; // outra forma de atribuir uma nova chave com valor ao objeto
console.log(person);

let mom = "nameOfMom";

person[mom] = "Maria" // forma de utilizar o valor contido em uma variável para inicializar uma chave com valor em um objeto

console.log(person);

console.log(typeof person);