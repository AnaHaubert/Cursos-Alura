/* Selection Sort (Ordenação por Seleção) - Algorítimo de ordenação
encontra o menor valor e coloca na primeira posição */

const livros = require('./listaLivros'); //importa o array de livros
const menorValor = require('./menorValor'); //importa a função que filtra o menor valor do array
const selectionTroca = require('./troca'); //importa a função

//let atual: guarda o produto que está sendo analisado, incia na posicao inicial (0) / o array será percorrido enquanto a posicao de 'atual' for menor que o tamanho do array - 1, pois o último elemento da lista será o de maior preço, logo não precisa ser analisado / em cada volta, será acrescentado 1 no valor de 'atual' para passar ao proximo índice do array e o item que ja foi ordenado não é reanalisado.
for (let atual = 0; atual < livros.length - 1; atual++) {
    let indexMenorPreco = menorValor(livros, atual); //utiliza a função menorValor para filtrar o produto de menor preço, e define como posição inicial. Recebe como parâmetro o array 'livros', e a posição inicial 'atual' que foi declarada como 0 inicialmente. A função menorValor retorna o objeto que representa o produto de menor preço (titulo e preço). A cada rodada do for, 'atual' será atualizada acrescentando 1, ordenando os valores: primeira rodada a partir de 0, segunda a partir de 1, terceira a partir de 2...
    selectionTroca(livros, indexMenorPreco, atual); //passamos como parâmetro da função selectionTroca() o array livros e a variável indexMenorPreco, e a variavel atual. A cada laço de repetição feito com o for, de 0 ao fim do array, o valor da variável atual também será atualizado, e este novo valor é passado como parâmetro da função selectionTroca() também a cada laço.
}

console.log(livros); //imprime o array livros com a ordenação de preço, do menor para o maior

// //DESAFIO EXERCÍCIO ---------------------------------------------------------------------------------------------------
// //forEach() - função callback controla o laço para que percorra cada um dos elementos do array, através do parâmetro
// //O número do índice de cada elemento é necessário para fazer a troca de lugares entre os valores. Para isso fazemos uso do segundo parâmetro da função callback, que é opcional, e que leva justamente o número do índice atual que está sendo percorrido, equivalente à variável atual.
// livros.forEach((/*livro*/_, indice) => {
//     let menor = menorValor(livros, indice)

//     let livroAtual = livros[indice];
//     let livroMenorPreco = livros[menor];

//     livros[indice] = livroMenorPreco
//     livros[menor] = livroAtual 
// })
// //O primeiro parâmetro da função callback, 'livro', não está sendo utilizado; nesse caso, podemos usar a notação do JavaScript para informar que o primeiro parâmetro não será utilizado no código, através do '_'.

// console.log(livros);