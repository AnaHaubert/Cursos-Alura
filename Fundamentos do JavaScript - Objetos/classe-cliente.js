class Cliente{ //nome de classe inicia com letra maiúscula 
    constructor(nome, email, cpf, saldo) { //atributos
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositar(valor) { //métodos/comportamento
        this.saldo += valor;
    }

    exibirSaldo() { //método/comportamento
        console.log(this.saldo);
    }
}

const andre = new Cliente('André', 'andre@email.com', '12345678900', 100); //nova instância

console.log(andre);
andre.exibirSaldo();
andre.depositar(50),
andre.exibirSaldo();