// Arrays:

// Spread - usar elementos do array como argumentos:

function sum(x,y,z) {
    return x + y + z;
}

const numbers = [1,2,3];

console.log(sum(...numbers)); // os ... ao lado do nome do array faz a função considerar os elementos como argumentos

// Rest - transformar os argumentos em um array para ser manipulado pela função:

function confereTamanho(...args) { // os ... adicionam os parâmetros ao array e o args será o nome do array
    return args.length;
}

console.log(confereTamanho()); // tamanho 0 do array
console.log(confereTamanho(1,2)); // tamanho 2 do array
console.log(confereTamanho(3,4,5)); // tamanho 3 do array - cresce conforme adicionamos argumentos, quanto mais maior

// Objetos:

// Object Destructuring - retorna apenas o elemento indicado entre {} do objeto:

const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
}

function userId({id}) {
    return id;
}

console.log(userId(user));

function getFullName ({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`;
}

console.log(getFullName(user));