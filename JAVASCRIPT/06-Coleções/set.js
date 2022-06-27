const mySet = new Set(); // Declaração de um novo Set

mySet.add(1); // .add() - adiciona um item ao Set
mySet.add(5);
console.log(mySet);

console.log(mySet.has(1)); // .has() - consulta se um valor está no Set, se estiver retorna true, senão, retorna false
console.log(mySet.has(3));

mySet.delete(5); // .delete() - exclui um valor do Set
console.log(mySet);

console.log(mySet.size); // .size - retorna o tamanho do Set