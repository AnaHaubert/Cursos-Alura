const listaLivros = require ('./array.js');

//posicionando um pivô:

//encontra objetos com preços menores que o pivo informado
function encontraMenores(pivo, array) { 
    let menores = 0; //quantidade de produtos de preco menor que o pivo (inicia em 0)
    
    //posição atual do array inicia em 0; enquanto atual for menor que o tamanho do array; acrescenta um no valor de atual
    for(let atual = 0; atual < array.length; atual++) {
        //objeto que está sendo analisado = array na posição atual
        let produtoAtual = array[atual];
        //se o preço de produtoAtual for menor que o preço do pivo
        if (produtoAtual.preco < pivo.preco) {
            //acrescenta um ao valor de menores
            menores++
        }
    }
    //recebe o array, a posição onde o pivo está no momento, e a posição onde ele deve ser posicionado (Se ha 5 elementos de preço menor, ele deve entrar no índice 5, como sexto elemento); 
    trocaLugar(array, array.indexOf(pivo), menores);
    //retorna o array ordenado
    return array;
}

    //troca de lugares os parâmetros informados em 'de' e 'para'
function trocaLugar(array, de, para) {
    //gurada o objeto que está na posição 'de'
    const elem1 = array[de];
    //guarda o objeto que está na posição 'para'
    const elem2 = array[para];

    //troca a posição dos elementos
    array[para] = elem1;
    array[de] = elem2;
}

function divideNoPivo(array) {
    let pivo = array[Math.floor(array.length / 2)]; //recebe o objeto no índice referente ao meio do array
    console.log(pivo);
    encontraMenores(pivo, array); //encontra os elementos de valores menores, e coloca o pivo no lugar correto 
    let valoresMenores = 0; //controla o índice de valores menores

//analisando(índice que está sendo analisado no momento; enquanto analisandofor menor que o tamanho do array, acrescenta um no valor de analisando, passando para o proximo elemento do array)
    for(let analisando = 0; analisando < array.length; analisando++) {
        //objeto na posição analisando
        let atual = array[analisando];
        //se o preço de atual for menor ou igual ao preço do pivo, e o objeto atual for diferente do objeto pivo
        if(atual.preco <= pivo.preco && atual !== pivo) {
            //troca o lugar da posicao analisando para a posicao valoresMenores
            trocaLugar(array, analisando, valoresMenores);
            //acrescenta um em valoresMenores, passando para o próximo elemento do array
            valoresMenores++
        }
    }
    
    return array; //retorna o array divido
}

//console.log(divideNoPivo(listaLivros));
//console.log(encontraMenores(listaLivros[2], listaLivros)); //função recebe o pivo (Java, que está na posição 2 do array listaLivros), e o array (listaLivros).

module.exports = trocaLugar;