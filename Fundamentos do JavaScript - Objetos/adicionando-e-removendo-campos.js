const cliente = {
    nome:'André',
    idade:36,
    cpf:'12345678900',
    email:'andre@email.com'
}
console.log(cliente);

cliente.fone = '789456123'; //usar . para incluir uma chave ao objeto, e = para atribuir o valor a chave
console.log(cliente);

cliente.fone = '00789456123'; //para alterar o valor da chave, atribuir o valor novamente com os ajustes necessários
console.log(cliente);