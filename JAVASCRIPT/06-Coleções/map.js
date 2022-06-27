const myMap = new Map(); // Declaração de um novo Map

myMap.set('apple', 'fruit'); // .set() - inclui um elemento no Map
console.log(myMap);

console.log(myMap.get('apple')); // .get() - consulta o valor de uma chave no Map

console.log(myMap.length); // .length - consulta o tamanho do Map

myMap.delete("apple"); // .delete() - deleta um elemento do Map a partir de sua chave
console.log(myMap);