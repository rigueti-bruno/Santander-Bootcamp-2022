function comparaNumeros (num1,num2) {
    const saoIguais = num1 === num2;
    return saoIguais ? "São iguais" : "Não são iguais";
}

console.log(comparaNumeros(6,10));