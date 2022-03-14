const cliente = {
    nome:'André',
    idade:36,
    cpf:'12345678900',
    email:'andre@email.com',
    fones:['51123456789', '51789456123'], 
    dependentes:[
        {nome:'Sara',
        parentesco:'Filha',
        dataNasimento:'20/03/2011'},
        
        {nome: 'Samia Maria',
        parentesco: 'Filha',
        dataNasimento: '04/01/2014'}
    ],
    saldo: 100,
    depositar: function (valor){
        this.saldo += valor}
}

function oferecerSeguro(objeto) {
    const propsClientes = Object.keys(objeto);//object.keys: cria um arrey com todas as chaves do objeto passado como parâmetro
    if(propsClientes.includes('dependentes')) {
        console.log(`Oferta de seguro de vida para ${objeto.nome}.`);
    } //includes: verificar se o dado passado como parâmetro está incluído na const acessada (propsClientes)
}
 
//oferecerSeguro(cliente);

//console.log(Object.values(cliente));//Object.values: cria um arrey com os valores das chaves do objeto passado como parâmetro.

console.log(Object.entries(cliente));//Object.entries: cria uma série de arrays, com chave no índice 0 e valor no índice 1.