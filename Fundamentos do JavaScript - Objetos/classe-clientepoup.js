class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    exibirSaldo() {
        console.log(this.saldo);
    }
}

class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca) {
        super(nome, email, cpf, saldo);
        this.saldoPoupanca = saldoPoupanca;
    }

    depositarPoupança(valor) {
        this.saldoPoupanca += valor;
    }
}

const andre = new ClientePoupanca('André', 'andre@email.com', '12345678900', 100, 200);
console.log(andre);
andre.depositar(50);
andre.depositarPoupança(50);
console.log(andre);