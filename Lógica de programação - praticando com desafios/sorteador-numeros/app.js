function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (de > ate) {
        alert('O valor informado no campo "Do número" dever ser menor que o valor informado no campo "Até o número"')
    }

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        intervalo = (ate - de) + 1;
       
        if (quantidade <= intervalo) {
            while (sorteados.includes(numero)) {
                numero = obterNumeroAleatorio(de, ate);
            }
            sorteados.push(numero);
        } else {
            limparCampos();
            alert('A quantidade de números escolhidos no campo “Quantidade de números” deve ser igual ou inferior ao intervalo de números entre os campos “Do número” e “Até o número”.');
            alterarStatusBotao(false);
            break;
        }

    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`
    alterarStatusBotao(true);
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(ativar) {
    let botaoReiniciar = document.getElementById('btn-reiniciar');

    console.log(ativar);

    if (ativar) {
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    } else {
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    limparCampos();

    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`

    alterarStatusBotao(false);
}

function limparCampos() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
}