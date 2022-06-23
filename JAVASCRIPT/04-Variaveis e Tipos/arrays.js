let array = [] // declaração de um array entre colchetes

array.push(3); // inclui um elemento no final do array
console.log(array);

array.push(4);
console.log(array);
array.pop(); // exclui o último elemento do array
console.log(array);

array.push(2);
console.log(array);
array.shift(); // remove o primeiro elemento do array
console.log(array);

array.unshift(1); // inclui um elemento no início do array
console.log(array);

array.push(3,4,5,6); // inclui múltiplos elementos no array
console.log(array);

// Iterabilidade do Array - operações com cada um dos elementos
for (let i = 0; i < array.length; i++) {
    console.log(array[i]); // vai imprimir cada elemento do array
}

console.log(array.includes(4)); // verifica se um elemento está no array

console.log(array.every(item => item === 5)); // verifica se todos os elementos do array tem um mesmo valor especificado

console.log(array.some(item => item === 9)); // verifica se algum elemento do array tem um valor especificado

console.log(array.reverse()); // inverte a ordem dos elementos do array