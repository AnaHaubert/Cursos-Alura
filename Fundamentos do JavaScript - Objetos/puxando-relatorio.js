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

let relatorio = ''; //inicializada vazia

//       info no objeto - a 'info' refere-se a cada chave do objeto
for (let info in cliente) { //for ... in: método de objeto. Executa o 'for' no (in) objeto informado.
// roda cada 'info' do objeto cliente e verifica o typeof (tipo do dado)
    if(typeof cliente[info] === 'object' || typeof cliente[info] === 'function') { //arrey é considerado object
        continue //continua a execução do laço com a próxima iteração.
    } else {
      //relatório receberá o nome de cada chave (info) percorrida e o valor atribuído.
        relatorio += `
        ${info} - ${cliente[info]}
        `; //template string aceita quebra de linha
    }
}

console.log(relatorio);