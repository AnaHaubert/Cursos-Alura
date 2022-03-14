const cliente = {
    nome:'André', //string
    idade:36, //número
    cpf:'12345678900',
    email:'andre@email.com',
    fones:['51123456789', '51789456123'] //array
}

cliente.dependentes = { //objeto
    nome:'Sara',
    parentesco:'Filha',
    dataNasimento:'20/03/2011'
} //adiciona ao objeto cliente uma nova chave que recebe como valor, um objeto.
console.log(cliente);

cliente.dependentes.nome = 'Sara Silva'; //alterando o valor de 'nome' do objeto 'dependentes', dentro do objeto 'clientes'
console.log(cliente);