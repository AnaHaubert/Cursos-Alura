const listaLivros = require ('./array.js'); //importa o array de livros
const trocaLugar = require ('./encontraMenores.js') //importa a função trocaLugar()

function quickSort(array, esquerda, direita) { //recebe o array, a posição esquerda (primeiro índice do array), e direita (último indice do array)
    //se o tamanho do array for maior que 1
    if (array.length > 1) {
        //recebe o resultado da função particiona: posição a esquerda, que serve de marcador de término para o próximo array .
        let indiceAtual = particiona(array, esquerda, direita); 
        //se o índice passado como esquerda for menor que o indiceAtual - 1
        if (esquerda < indiceAtual - 1) {
            //chama novamente a função quickSort, passando esquerda como indice inicial e indiceAtual como indice final para a execução
            quickSort(array, esquerda, indiceAtual - 1);
        }
        //se o indiceAtual for menor que o indice passado como direita
        if (indiceAtual < direita) {
            //chama novamente a função quickSort, passando indiceAtual como indice inicial e direita como indice final para a execução
            quickSort(array, indiceAtual, direita);
        }
    }
    //retorna o array ordenado
    return array;
}

function particiona(array, esquerda, direita) {//recebe o array, a posição esquerda (inicia no primeiro índice do array), e direita (inicia no último indice do array)
    console.log('array', array);
    console.log('esquerda e direita', esquerda, direita);
    //armazena o objeto na posição do pivo no array (no caso, meio do array)
    let pivo = array[Math.floor((esquerda + direita) / 2)];
    //recebe o indice a esquerda
    let atualEsquerda = esquerda;
    //recebe o indice a direita
    let atualDireita = direita;

    //enquanto atualEsquerda for menor ou igual que atualDireita (dessa forma, elas não se cruzam)
    while (atualEsquerda <= atualDireita) {
        //enquanto o preço do objeto na posicao atualEsquerda for menor que o preço do pivo
        while (array[atualEsquerda].preco < pivo.preco) {
            //soma 1 no valor de atualEsquerda, passando para o próximo elemento do array, sem fazer troca de lugar 
            atualEsquerda++;
        }
        //enquanto o preço do objeto na posição atualDireita for maior que o preço do pivo
        while (array[atualDireita].preco > pivo.preco) {
            //soma 1 no valor de atualDireita, passando para o próximo elemento do array, sem fazer troca de lugar
            atualDireita--;
        }
        //se o índice de atualEsquerda for menor ou igual ao índice atualDireita
        if (atualEsquerda <= atualDireita) {
            //função trocaLugar troca de lugar 'de' objeto na posição atualEsquerda 'para' objeto na posição atualDireita
            trocaLugar(listaLivros, atualEsquerda, atualDireita);
            //soma 1 no valor de atualEsquerda, passando para o próximo elemento do array
            atualEsquerda++;
            //diminiu 1 no valor de atualDireita, passando para o elemento anterior do array
            atualDireita--;
        }
    }
    //retorna a posição a esquerda, que serve de marcador de término para o próximo array 
    return atualEsquerda; 
}

//função recebe: array= listaLivros, indice de início = 0, índice de fim = tamanho do array -1 (por se tratar de índice do array e não de quantidade de elementos)
console.log(quickSort(listaLivros, 0, listaLivros.length -1)); 