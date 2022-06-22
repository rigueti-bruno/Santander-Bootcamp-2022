const DIO = "Digital Innovation One";

let firstName = 'João';
let lastName = 'Luiz'

let fullName = `Nome completo: ${firstName} ${lastName}`;

console.log(DIO);
console.log(fullName);

let nome = 'João';
let sobrenome = 'Pedro';

let concatenado = nome.concat(sobrenome); // .concat() - concatena strings

console.log(concatenado);

let tamanhoString = concatenado.length // .length - retorna o tamanho da string, quantidade de caracteres

let exemplo = new String("blablabla"); // Declaração da string no tipo Objeto

console.log(exemplo);

let vazio = ""; // declara uma string vazia
console.log(vazio);

let letra = nome[1]; // consulta o caracter em uma posição em uma string com índices de lista
console.log(letra);

concatenado = nome + " " + sobrenome; // concatena as variáveis e as reatribui com o sinal de "+"
console.log(concatenado);

concatenado = nome + "\n" + sobrenome; // concatena as variáveis e as atribui com uma quebra de linha
console.log(concatenado);

concatenado = `${nome} ${sobrenome}`; // entre `` podemos incluir variáveis com ${} e escrever o texto da string de forma natural
console.log(concatenado);

concatenado = "\""; // imprime a aspa colocando uma \ antes
console.log(concatenado);

let frase = "Olá, tudo bem?"

console.log(frase.split("")); // quebra a string por caracter


console.log(frase.split(" ")); // quebra a string a cada " "

console.log(frase.includes("tudo")); // verifica se há um texto expecífico na string

console.log(frase.startsWith("O")); // verifica se a string começa com um caracter específico

console.log(frase.endsWith("?")); // verifica se a string termina com um caracter específico

// As funções acima retornarão valores booleanos - true/false

console.log(frase.replace(",","!")); // muda um caracter específico na string por outro caracter especificado