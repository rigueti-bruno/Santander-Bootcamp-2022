class ContaBancaria {
    constructor(agencia,numero,tipo) { // o Constructor recebe os valores informados como argumentos
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0; // como tem getter, setter e métodos, incluímos um _ antes de saldo, setamos 0 como saldo inicial, sem precisar passá-lo no início
    }

    get saldo() { // consulta o valor do argumento saldo
        return this._saldo;
    }

    set saldo(valor) { // modifica o valor do argumento saldo
        this._saldo = valor;
    }

    sacar(valor) { // se houver valor disponível - saldo > valor - subtrai o valor do saldo
        if(valor > this._saldo) {
            return "Operação negada."
        } else {
            this._saldo = this._saldo - valor;
            return this._saldo;
        }
    }

    depositar(valor) { // adiciona valor ao saldo
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria { // expressão que vincula a classe filha à classe pai
    constructor(agencia,numero,cartaoCredito) {
        super(agencia,numero); // faz referencia aos argumentos em comum da classe mãe e seta os valores informados nos parâmetros da classe pai
        this.tipo = 'corrente' // define um valor padrão para o arguemento tipo, eliminando a necessidade de informá-lo
        this._cartaoCredito = cartaoCredito; // define um argumento específico da classe filha com getter e setter a ser definido
    }

    get cartaoCredito() { // consulta o valor do cartao de credito - true/false
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor; // insere um valor para o cartão de crédito - será booleano: true/false
    }
}

class ContaPoupanca extends ContaBancaria { // expressão que vincula a classe filha à classe pai
    constructor(agencia,numero) {
        super(agencia,numero); // faz referencia aos argumentos em comum da classe mãe e seta os valores informados nos parâmetros da classe pai
        this.tipo = 'poupança'; // define um valor padrão para o arguemento tipo, eliminando a necessidade de informá-lo
    }
}

class ContaUniversitaria extends ContaBancaria { // expressão que vincula a classe filha à classe pai
    constructor(agencia,numero) {
        super(agencia,numero); // faz referencia aos argumentos em comum da classe mãe e seta os valores informados nos parâmetros da classe pai
        this.tipo = 'universitaria'; // define um valor padrão para o arguemento tipo, eliminando a necessidade de informá-lo
    }

    sacar(valor) {
        if(valor > 500) { // define um valor limite de saque para a conta universitária
            return "Operação negada."
        } else {
            this._saldo = this._saldo - valor;
        }
    }
}