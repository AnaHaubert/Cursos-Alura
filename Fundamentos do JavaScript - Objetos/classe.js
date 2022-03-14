/*
CLASSES: são modelos usados para criação de objetos
a classe define os atributos (características) e métodos (comportamentos) de um objeto
*/
class Pessoa {
    constructor(nome, sobrenome, cpf, email) { //atributos
        this.nome = nome
        this.sobrenome = sobrenome
        this.cpf = cpf
        this.email = email
    }

    exibirNomeCompleto() { //comportamento
        console.log(`${this.nome} ${this.sobrenome}`);
    }
}

/*
HERANÇA: uma classe herda características de outra classe
*/
class Programador extends Pessoa { //'extends' é usada para criar uma classe filha de outra classe.
    constructor(nome, sobrenome, cpf, email, linguagem) {
        super(nome, sobrenome, cpf, email) //'super' acessa a classe pai, chamando os elementos da classe pai para a nova.
        this.linguagem = linguagem
    }
}

/*
OBJETO: é uma instância de uma classe
A partir do objeto são executados os comportamentos da classe.
*/
const novoDev = new Programador('André', 'Silva', '12345678900', 'andre@email.com', 'JavaScript'); //'new' cria uma instância na memória do computador. 