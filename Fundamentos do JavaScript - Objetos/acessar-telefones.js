const cliente = {
    nome:'André',
    idade:36,
    cpf:'12345678900',
    email:'andre@email.com',
    fones:['51123456789', '51789456123'] //utilizando array para armazenar mais de um valor da chave
}

cliente.fones.forEach(fone => console.log(fone)); //imprime os valores informados no array