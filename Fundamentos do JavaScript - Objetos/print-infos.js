const cliente = {
       nome:'André',
       idade:36,
       cpf:'12345678900',
       email:'andre@email.com'
}

//console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`); //o . acessa o valor da chave desejada no objeto que for passado como parâmetro.

console.log(cliente.cpf.substring(0, 3)) //função de string (neste caso, imprime os três primeiros caracteres do cpf).