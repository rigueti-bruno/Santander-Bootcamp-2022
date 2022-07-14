console.log('TypeScript');

// soma:
function soma(a: number, b: number) {
    return a + b;
}

console.log(soma('a','b')); // já gera um erro por receber parâmetros com tipo de dados divergente do definido na função

console.log(soma(4,7));

// interface:

interface IAnimal { // definição da interface
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    executarRugido(volume: number): void; // método definido na interface
}

const animal: IAnimal = { // definição de um objeto utilizando o modelo da interface
    nome: 'Elefante',
    tipo: "aquatico",
    executarRugido: (volume) => (`${volume}db`)
}

// extensão da interface - cria uma interface filha que herda os atributos da interface pai:

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

const felino: IFelino = {
    nome: 'Leão',
    tipo: "terrestre",
    executarRugido: (volume) => (`${volume}`),
    visaoNoturna: true
}