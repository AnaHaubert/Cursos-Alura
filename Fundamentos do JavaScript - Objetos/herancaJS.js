class Cliente { //classe de cliente
    constructor(nome, email, cpf, saldo){ //propriedades
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
   
    depositar(valor){ //comportamentos 
        this.saldo += valor
    }
   
    exibirSaldo(){ //comportamentos 
        console.log(this.saldo)
    }
}

class ClientePoupanca extends Cliente { //extends: 'ClientePoupanca' herda as caracaterísticas de 'Cliente'
    constructor(nome, email, cpf, saldo, saldoPoupanca){
        super(nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca
    }
   
    depositarPoupanca(valor){ // comportamento único da classe ClientePoupanca
        this.saldoPoupanca += valor
    }
}

const andre = new ClientePoupanca("Andre", "a@mail.com", "12312312312", 100, 200) // instancia de novo objeto da classe ClientePoupanca

andre.depositar(50)
andre.depositarPoupanca(50) //invocação de comportamentos do objeto 'andre'

/*
Por meio da herança é possível invocar propriedades e comportamentos definidos na classe base, e invocar o método específico da poupança.
Reaproveitando o código não é necessário reescrever o método depositar(), O objeto tem acesso a esse método pelo mecanismo da herança.
*/