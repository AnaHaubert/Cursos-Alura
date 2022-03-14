const cliente = {
    nome:'André', //string
    idade:36, //número
    cpf:'12345678900',
    email:'andre@email.com',
    fones:['51123456789', '51789456123'], //array de strings
    dependentes:[ //array de objetos
        {nome:'Sara',
        parentesco:'Filha',
        dataNasimento:'20/03/2011'},

        {nome: 'Samia Maria',
        parentesco: 'Filha',
        dataNasimento: '04/01/2014'}
    ],
    saldo: 100,
    //chave     //valor
    depositar: function (valor){ //métodos: funções que trabalham no contexto de um objeto
        this.saldo += valor //this (isto), refere-se a 'esta instancia' do objeto
    }
}

console.log(cliente.saldo);

cliente.depositar(30);

console.log(cliente.saldo);


//propriedades
//comportamentos: saque, depósito...