const FIRST_NAME = "Stephany";

FIRST_NAME = "Julia"; // Gera erro - uma constante não pode ter Reatribuição

const FIRST_NAME = "Julia"; // Gera erro - uma constante não pode ser Redeclarada

LAST_NAME = "Wayne"; // Gera erro - uma constante não pode ter hoisting, ou seja, não pode ter um valor atribuído antes de sua declaração

const LAST_NAME; // Gera erro - uma constante obrigatoriamente precisa ter um valor atribuído, não pode ser vazia

console.log(FIRST_NAME);
console.log(LAST_NAME);