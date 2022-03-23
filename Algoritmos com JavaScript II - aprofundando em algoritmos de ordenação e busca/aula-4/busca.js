const listaLivros = require('./arrayOrdenado'); //importa o array de livros

//função recebe o array, o indice onde inicia, e o indice onde termina a busca, e o valor que deve ser encontrado
function busca(array, de, ate, valorBuscado) {
    const meio = Math.floor((de + ate) / 2); //encontra o índice da metade do array
    const atual = array[meio]; //objeto na posição 'meio' do array

    //se o índice 'de' for maior que o índice 'para'
    if (de > ate) {
        return -1; //retorna -1
    }
    //se o valorBuscado for igual ao preço do objeto no indice atual
    if (valorBuscado === atual.preco) {
        return meio; //retorna o índice 
    }
    //se o valorBuscado for menor que o preço do objeto no indice atual
    if (valorBuscado < atual.preco) {
        return busca(array, de, meio - 1, valorBuscado); //chama a função busca, recebendo como parâmetros o array, iniciando da primeira posição do array(de), e terminando na posição anterior ao meio(para), e o valor buscado
    }
    //se o valorBuscado for maior que o preço do objeto no indice atual
    if (valorBuscado > atual.preco) {
        return busca(array, meio + 1, ate, valorBuscado);//chama a função busca, recebendo como parâmetros o array, iniciando da posição seguinte ao meio(de), e terminando última posição do array(para), e o valor buscado
    }
}

//console.log(busca(listaLivros, 0, listaLivros.length - 1, 60));