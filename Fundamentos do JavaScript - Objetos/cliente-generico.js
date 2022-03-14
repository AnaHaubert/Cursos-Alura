function Cliente(nome, cpf, email, saldo) { //função construtora
    this.nome = nome,
    this.cpf = cpf,
    this.email = email,
    this.saldo = saldo
    this.depositar = function(valor) {
        this.saldo += valor
    }
}

//palavra reservada 'new': cria uma nova instância com base na função construtora
const andre = new Cliente('André', '12345678900', 'andre@email.com', 100);

console.log(andre) //imprime a nova instancia de objeto Cliente com os dados informados na const andre