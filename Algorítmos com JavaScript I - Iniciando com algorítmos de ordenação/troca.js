function insertionTroca(lista, analise) { //a fução faz alterações direto na lista que está sendo passada por parâmetro; assim, essa função não precisa retornar nenhum valor.
    let itemAnalise = lista[analise]; //guarda a informação do objeto na posição que está sendo analisada
    let itemAnterior = lista[analise - 1]; //guarda a informação do objeto na posição anterior a que está sendo analisada
       
    //troca a posição do itemAnalise com o itemAnterior
    lista[analise] = itemAnterior //troca a posição, fazendo com que o itemAnterior vá para a posição do itemAnalisado
    lista[analise - 1] = itemAnalise //troca a posição, fazendo com que o itemAnalizade vá para a posição do itemAnterior
}

function selectionTroca(livros, indexMenorPreco, indexAtual) {
    //armazena o objeto de menor preço
    let objetoMenorPreco = livros[indexMenorPreco];
    //armazena o objeto que está sendo analisado
    let objetoAtual = livros[indexAtual];

    
    livros[indexMenorPreco] = objetoAtual; //objetoAtual vai para a posição onde estava o objetoMenorPreco
    livros[indexAtual] = objetoMenorPreco; //a lista de livros na posição atual, recebe o objetoMenorPreço
}

module.exports = insertionTroca; //exporta a função
module.exports = selectionTroca; //exporta a função