// Arrow Functions são formas simplificadas de funções anônimas - são declaradas com () =>
const helloWorld = () => "Hello World"; // com apenas uma linha, dispensam {} e return
console.log(helloWorld());

// Quando possuem apenas um argumento, dispensam os parênteses:
const soma = a => a + 3;
console.log(soma(4));

// São atribuídas a Constantes:
const helloWorld2 = () => {
    return "Hello World 2";
}
console.log(helloWorld2());