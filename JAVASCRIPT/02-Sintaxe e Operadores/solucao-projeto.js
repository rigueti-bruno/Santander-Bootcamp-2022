function comparaNumeros(num1,num2) {
    if (!num1 || !num2) return "Defina 2 valores!"
    const primeiraFrase = criaPrimeiraFrase(num1,num2);
    const segundaFrase = criaSegundaFrase(num1,num2);
    return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase (num1,num2) {
    let saoIguais = "";

    if (num1 !== num2) {
        saoIguais = "não";
    }

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
}

function criaSegundaFrase (num1,num2) {
    let resultado10 = "menor";
    let resultado20 = "menor";
    
    const soma = num1 + num2;
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if (compara10) {
        resultado10 = "maior";
    }

    if (compara20) {
        resultado20 = "maior"
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

// Testes:

console.log(comparaNumeros(2,3)); // valores diferente e soma menor que 10 e 20
console.log(comparaNumeros(10,5)); // valores diferentes e soma menor que 20
console.log(comparaNumeros(14,14)); // valores iguais e soma maior que 10 e 20
console.log(comparaNumeros()); // 2 valores ausentes
console.log(comparaNumeros(14)); // um valor ausente