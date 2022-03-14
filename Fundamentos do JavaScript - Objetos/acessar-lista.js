const cliente = {
    nome:'André',
    idade:36,
    cpf:'12345678900',
    email:'andre@email.com'
}
const chaves = ['nome', 'idade', 'cpf', 'email'];

//console.log(cliente[chaves[0]]); 
/*
para acessar dados informados através de variáveis, utiliza-se os [].
*/

//chaves.forEach(info => console.log(cliente[info]));
/*
forEach: método de array
precisa de uma função callback para funcionar
info: parâmetro
Para cada 'info' (cada chave do array de chaves) o JS percorreu o objeto cliente, acessando a chave da posição 'info' imprimindo seu valor. 
*/

//console.log(cliente['nome']);
/*
é possível acessar através de [] quando sabemos exatamento o nome da chave que queremos acessar, porém o mais comum é utilizar o . (cliente.nome)
*/

    console.log(cliente['conta']); //se a chave não existe, o resultado é undefined