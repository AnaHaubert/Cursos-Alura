const clientes = [
    {nome:'André',
    cpf:'12345678900', 
    dependentes:[
        {nome:'Sara',
        parentesco:'Filha',
        dataNasimento:'20/03/2011'},
            
        {nome: 'Samia',
        parentesco: 'Filha',
        dataNasimento: '04/01/2014'}
    ]},

    {nome:'Juliana',
    cpf:'78945612322',
    dependentes:[
        {nome: 'Sophia',
        parentesco: 'Filha',
        dataNasimento: '30/08/2020'}
    ]}
] //array de clientes

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]; //'...' : operador de espalhamento
/*
acessa a chave informada após o .
espalha no array o conteúdo do objeto no índice informado entre [], criando uma nova lista unindo os elementos encontrados nos arrays verificados.
*/

console.table(listaDependentes); //imprime os dados no console em formato de tabela