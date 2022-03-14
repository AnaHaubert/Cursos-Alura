function Cliente(nome, cpf, email, saldo) { //função construtora
    this.nome = nome,
    this.cpf = cpf,
    this.email = email,
    this.saldo = saldo,
    this.depositar = function(valor) {
        this.saldo += valor
    }
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    Cliente.call(this, nome, cpf, email, saldo); //.call: chama as propriedades passadas como parâmetro do construtor 'Cliente' para o construtor 'ClientePoupanca' 
    this.saldoPoup = saldoPoup;
}

const ju = new ClientePoupanca('Ju', '78945612399', 'ju@email.com', 100, 200);
const andre = new Cliente('André', '78945612399', 'ju@email.com', 100, 200);

//console.log(ju);

ClientePoupanca.prototype.depositarPoup = function(valor) { //adiciona ao protótipo do construtor ClientePoupanca um novo comportamento
    this.saldoPoup += valor;
}

ju.depositarPoup(30);
console.log(ju.saldoPoup);
console.log(andre.saldoPoup); //undefined: saldoPoup só existe para instancias de ClientePoupanca