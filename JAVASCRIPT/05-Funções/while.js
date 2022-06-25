// While:

function exemploWhile() {
    let num = 0; // contador

    while (num <= 5) { // verifica a condição para a instrução ser executada
        console.log(num);
        num++; // incrementa o coontador
    }
}

exemploWhile();

// Do ... While:

function exemploDoWhile() {
let num = 6;

    do { // executa a instrução pelo menos 1 vez, mesmo que ela não atenda a condição
        console.log(num);
        num++;
    } while (num <= 5) // verifica a instrução para continuar ou não a execução
}

exemploDoWhile();