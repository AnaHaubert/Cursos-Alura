const livros = require('./listaLivros.js') //importa o arquivo 

function menorValor(arrProdutos, posicaoInicial) {
  //let maisBarato = guarda o índice do produto mais barato. Recebe inicialmente a posição Inicial, pois, no inicio não ha com o que comparar o primeiro elemento. Será atualizado conforme o for percforrer o array.
  let maisBarato = posicaoInicial;
  
  // let atual: guarda o produto que está sendo analisado, incia na posicao inicial (0) / o array será percorrido enquanto a posicao de 'atual' for menor que o tamanho do array / em cada volta, será acrescentado 1 no valor de 'atual' para passar ao proximo índice do array
  for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
    //compara: se o preço do produto na posição 'atual' que está sendo analisada no array for menor que o preço do produto que está armazenado em maisBarato
    if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
      //o produto de 'atual' substitui o que estava na posicao 'maisBarato'.
      maisBarato = atual;
    }
  }

  return maisBarato;  //retorna o objeto que representa o produto de menor preço (titulo e preço).
}

module.exports = menorValor; //exporta a função.


// //DESAFIO EXERCÍCIO ------------------------------------------------------------------------------------
// let maisCaro = 0;
// for (let atual = 0; atual < livros.length; atual++) {
//  if (livros[atual].preco > livros[maisCaro].preco) {
//    maisCaro = atual;
//  }
// }

// console.log(`O livro mais caro custa R$ ${livros[maisCaro].preco} e o título é ${livros[maisCaro].titulo}.`);