function getAnimal(id) {
    switch(id) {
        case 1: // informando um dos valores indicados em case (1,2,3), retornará o valor abaixo
            return "cão";
        case 2:
            return "gato";
        case 3:
            return "pássaro";
        default: // informando qualquer outro valor, retornará o que está abaixo de default
            return "peixe";
    }
}

console.log(getAnimal(1));
console.log(getAnimal(3));
console.log(getAnimal("1"));
console.log(getAnimal(true));