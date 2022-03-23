//const listaLivros = require('./array');

/* Recursão:
1) Um método utilizado para resolver problemas de computação em que a resolução consiste em solucionar instâncias menores do mesmo problema;
2) Um método em que uma função ou algoritmo chama a si uma ou mais vezes até que se atinja uma condição específica, quando o resultado de cada repetição é processado desde a última chamada até a primeira.
*/
/*
function mergeSort(array, nivelAninhamento = 0) {
    console.log(`nível de aninhamento ${nivelAninhamento}`);
    console.log(array);
    //se o tamanho do array for maior do que 1
    if (array.length > 1) {
        //meio encontra e armazena o meio do array (Math.floor arredonda o número para baixo)
        const meio = Math.floor(array.length / 2);
        
        //slice retorna uma fatia do array original, recebe como parâmetro o índice de ínicio e de fim .
        //chama a função mergeSort, dividindo o array em partes menores, enquanto o tamanho for maior que 1
        const parte1 = mergeSort(array.slice(0, meio), nivelAninhamento++); 
        const parte2 = mergeSort(array.slice(meio, array.length), nivelAninhamento++); 
        
        //ordena as partes da função
        array = ordena (parte1, parte2);
    }
    return array;
}

//função ordena recebe parte1 e parte2 do array
function ordena(parte1, parte2) {
    //parte1 e parte2 são dois novos pequenos arrays
    let posicaoAtualParte1 = 0;
    let posicaoAtualParte2 = 0;
    
    //armazena o resultado ordenado das duas partes
    const resultado = [];

    while(posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length) {
        let produtoAtualParte1 = parte1[posicaoAtualParte1]; //objeto referente ao elemento contido no índice atual da parte1
        let produtoAtualParte2 = parte2[posicaoAtualParte2]; ////objeto referente ao elemento contido no índice atual da parte2

        //se o preço do produtoAtualParte1 for menor que produtoAtualParte2
        if(produtoAtualParte1.preco < produtoAtualParte2.preco) {
            resultado.push(produtoAtualParte1) //push: manda o que for informado como parâmetro par o último lugar no array 'resultado', no caso produtoAtualParte1
            posicaoAtualParte1++ //acrescenta 1 em posicaoAtualParte1 indo para o próximo elemento do array
        //se não
        } else {
            resultado.push(produtoAtualParte2)//push: manda o que for informado como parâmetro par o último lugar no array 'resultado', no caso produtoAtualParte2
            posicaoAtualParte2++ //acrescenta 1 em posicaoAtualParte2 indo para o próximo elemento do array
        }
    }

    //concatena o que tem no array de resultado com os elementos que 'sobraram' nas partes 1 ou 2, utilizando ternário
                          //posicaoAtualParte1 é menor que o tamanho de parte1?
    return resultado.concat(posicaoAtualParte1 < parte1.length 
        ? parte1.slice(posicaoAtualParte1) //se true: concatena 'resultado' com a fatia que inicia na posicaoAtualParte1 e vai até o fim 
        : parte2.slice(posicaoAtualParte2)) //se false: concatena com a fatia que inicia em posicaoAtualParte2 e vai até o fim 

}

console.log(mergeSort(listaLivros));*/



//Mais sobre recursão: ------------------------------------------------------------------------------------

//função para controlar a frequência com que os números são incrementados durante a execução da função recursiva incrementaNumero():
/*function dorme(milissegundos){
    return new Promise(resolve => setTimeout(resolve, milissegundos));
}

//função assíncrona recursiva que incrementa o número passado como parâmetro em uma unidade e, após 2 segundos, chama a si própria antes de encerrar a sua execução, ilustrando efetivamente um caso de recursão:
async function incrementaNumero(numero){
    console.log(numero)
    await dorme(2000)
    return incrementaNumero(numero + 1)
} //a função incrementa o número passado como parâmetro em uma unidade e, antes de sair, chama a si própria novamente. 
  
incrementaNumero(1)
*/
/*
Não foi passada nenhuma condição de saída - e não seríamos capazes de retirar valor da sua execução. 
Para solucionar esse problema existem os base cases ou, em português, casos base. Mas o que são esses casos base? São uma forma de passar para a função uma condição de controle para a recursividade ou, em outras palavras, uma condição de saída.
b*/

//função para controlar a frequência com que os números são incrementados durante a execução da função recursiva incrementaNumero():
function dorme(milissegundos) {
    return new Promise(resolve => setTimeout(resolve, milissegundos));
}

//função recursiva com caso base:
async function incrementaNumero(numero){
    console.log(numero)
    await dorme(2000)
  
    if (numero === 10) { //
            return 'finalizou'
    } //Aqui é implementada o caso base(base case) que fará com que a função pare a recursão quando o valor do parâmetro numero for igual a 10
    return incrementaNumero(numero + 1)
}
  
incrementaNumero(1)

/*É importante lembrar que a função recursiva é aquela que chama a si mesma até encontrar uma condição de saída/parada. A recursividade é uma técnica muito aplicada em estruturas de dados, algoritmos e gráficos.
Temos a possibilidade e obrigação de inserir uma verificação que interrompa este comportamento, ou então a função entrará em loop infinito.*/