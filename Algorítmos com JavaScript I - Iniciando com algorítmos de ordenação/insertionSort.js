/* Insertion Sort (Ordenação por Inserção) - Algorítmo de ordenação
Insere os elementos na posção correta */

const livros = require ('./listaLivros'); //importa o array de livros
const insertionTroca = require('./troca'); //importa a função

function insertionSort(lista) { //função que recebe como parâmetro uma lista
    ////let atual: guarda o produto que está sendo analisado, incia na posicao inicial (0) / o array será percorrido enquanto a posicao de 'atual' for menor que o tamanho do array / em cada volta, será acrescentado 1 no valor de 'atual' para passar ao proximo índice do array
    for(let atual = 0; atual < lista.length; atual++) {
        let analise = atual; //armazena o item que está sendo analisado
        //enquanto analise for maior que 0 e o preço do item analisado for menor do que o que vem antes, deverá ocorrer a troca de lugar no array
        while(analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
            insertionTroca(lista, analise); // passamos como parâmetro da função insertionTroca() o array lista e a variável analise. A cada laço de repetição feito com o for, de 0 ao fim do array, o valor da variável analise também será atualizado, e este novo valor é passado como parâmetro da função insertionTroca() também a cada laço.
            analise-- //condição de parada do while (analisa e volta até a condição deixar de ser verdadeira)
        }
    }
    console.log(lista); //exibe a lista ordenada
}

insertionSort(livros);