const cliente = {
    nome:'André', //string
    idade:36, //número
    cpf:'12345678900',
    email:'andre@email.com',
    fones:['51123456789', '51789456123'], //array
    dependentes:[{
        nome:'Sara',
        parentesco:'Filha',
        dataNasimento:'20/03/2011'
    }] //para inserir mais dependentes, transformar o valor da chave/objeto 'dependentes' em um array
}

cliente.dependentes.push({
    nome: 'Samia Maria',
    parentesco: 'Filha',
    dataNasimento: '04/01/2014'
}) //método de array para incluir dado na chave/objeto que recebe array como valor.
//console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasimento === '04/01/2014');
//filtra no array do objeto 'dependentes' dentro do objeto 'cliente' o valor do índice que tem a data de nasimento informada na condição. Filter retorna um array.
console.log(filhaMaisNova);
console.log(filhaMaisNova[0].nome); //o [0] acessa o único índice do array retornado pelo filter / .nome acessa o dado 'nome' do índice filtrado.
