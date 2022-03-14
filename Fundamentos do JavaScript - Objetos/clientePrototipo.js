//definir construtores de objetos
function Cliente (nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}
const andre = new Cliente("Andre", "12312312312", "andre@email.com", 100);

//definir um construtor que utiliza o Cliente para gerar um novo tipo de cliente.
function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}
const ju = new ClientePoupanca("Ju", "12312312312", "ju@email.com", 100, 200);

//manipular o comportamento do protótipo do objeto ClientePoupanca
ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

//testando algumas propriedades
console.log(andre.hasOwnProperty("saldoPoup")) //false
console.log(ju.hasOwnProperty("saldoPoup")) //true (A função “saldoPoup” só existe no objeto do tipo ClientePoupanca.)
console.log(andre instanceof Cliente) //true
console.log(typeof andre) //object
console.log(typeof ju) //object (Os objetos andre e ju são do tipo object. Herdam do protótipo de object, que está associado a todo objeto criado no JavaScript.)
console.log(ju instanceof ClientePoupanca) // true
console.log(Function.prototype.isPrototypeOf(Cliente)) //true
console.log(Cliente.constructor === Function) //true