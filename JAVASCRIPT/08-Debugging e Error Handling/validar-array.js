function validaArray(array, numero) {
    try {
        if(!array && !numero) throw new ReferenceError("Envie os parâmetros!"); // Cria o Reference Error

        if(typeof array !== 'object') throw new TypeError("O array precisa ser do tipo object."); // Cria o Type Error

        if(typeof numero !== 'number') throw new TypeError("O numero precisa ser do tipo number."); // Cria o Type Error

        if(array.length !== numero) throw new RangeError("Tamanho inválido.") // Cria o Range Error

        if(array.length === numero) return array
    }
    catch(e) {
        // Filtragem das chamadas do catch por tipo de erro:
        if(e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError!")
            console.log(e.name)
            console.log(e.stack)
            console.log(e.message)
        }
        else if(e instanceof TypeError) {
            console.log("Este erro é um TypeError!")
            console.log(e.name)
            console.log(e.stack)
            console.log(e.message)
        }
        else if(e instanceof RangeError) {
            console.log("Este erro é um RangeError!")
            console.log(e.name)
            console.log(e.stack)
            console.log(e.message)
        }
        else {
            console.log("Ocorreu um tipo de erro não esperado" + e)
        }
    }
}

console.log(validaArray()); // parâmetros não informados -> ReferenceError

console.log(validaArray(5,5)); // array não informado corretamente -> TypeError

console.log(validaArray([], 'a')); // numero não informado corretamente -> TypeError

console.log(validaArray([],5)); // array de tamanho diferen do numero -> RangeError

console.log(validaArray([1,2,3,4,5],5)); // Sem erro -> retorna o array