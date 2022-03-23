const {edFolha, edGalho} = require('./arrays'); //importa as listas de livros

function juntaListas(lista1, lista2) {
    let listaFinal = []; //lista que será o resultado da junção das duas listas passadas como parâmetro
    let posicaoAtualLista1 = 0;//valor numérico referente ao índice atual da primeira lista 
    let posicaoAtualLista2 = 0; //valor numérico referente ao índice atual da segunda lista
    let atual = 0//valor numérico referente ao índice atual da listaFinal

    //enquanto posicaoAtualLista1 for menor que o tamanho da lista e posicaoAtualLista2 for menor que o tamanho da lista2
    while (posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length) {
        let produtoAtualLista1 = lista1[posicaoAtualLista1]; //um objeto com as propriedades titulo e preco, referente ao elemento contido no índice atual da primeira lista
        let produtoAtualLista2 = lista2[posicaoAtualLista2]; //um objeto com as propriedades titulo e preco, referente ao elemento contido no índice atual da segunda lista.
        
        //se o preço do produtoAtualLista1 for menor que o preço de produtoAtualLista2
        if (produtoAtualLista1.preco < produtoAtualLista2.preco) {
            //listaFinal recebe no índice atual o produtoAtualLista1
            listaFinal[atual] = produtoAtualLista1;
            //Acrescenta 1 no índice posicaoAtualLista1, passando para o próximo elemento desta lista
            posicaoAtualLista1++;
        //se não
        } else {
            //listaFinal recebe no índice atual o produtoAtualLista2
            listaFinal[atual] = produtoAtualLista2;
            //Acrescenta 1 no índice posicaoAtualLista2, passando para o próximo elemento desta lista
            posicaoAtualLista2++
        }
        //em ambos os casos, acrescenta 1 no índice atual, passando para o próximo elemento da listaFinal.
        atual++
    }    

    //a função pode receber arrays ordenados de tamanhos diferentes, uma vez que acabam os elementos do array menor, o que sobrar no array maior deverá ser transportado para o array final. Para isso, criamos mais dois laços while para cobrir estes casos, e que irão percorrer o array maior até o fim
    while (posicaoAtualLista1 < lista1.length) {
        listaFinal[atual] = lista1[posicaoAtualLista1];
        posicaoAtualLista1++
        atual++
    }
    while (posicaoAtualLista2 < lista2.length) {
        listaFinal[atual] = lista2[posicaoAtualLista2];
        posicaoAtualLista2++;
        atual++
    }
    //retorna o novo array
    return listaFinal;
} 

console.log(juntaListas(edFolha, edGalho)); //comparação e ordenação feita pela função juntaListas() só funciona corretamente quando recebe dois arrays já ordenados.