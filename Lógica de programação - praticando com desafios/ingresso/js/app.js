function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if(tipo.value == 'pista') {
        if (qtd < 0) {
            alert ('Por favor, verifique a quantidade inserida. A quantidade deve ser maior que 0');
            document.getElementById('qtd').value = '';
        } else {
            comprarPista(qtd);
        }
    } else if (tipo.value == 'superior') {
        if (qtd < 0) {
            alert ('Por favor, verifique a quantidade inserida. A quantidade deve ser maior que 0');
            document.getElementById('qtd').value = '';
        } else {
            comprarSuperior(qtd);
        }
    } else {
        if (qtd < 0) {
            alert ('Por favor, verifique a quantidade inserida. A quantidade deve ser maior que 0');
            document.getElementById('qtd').value = '';
        } else {
            comprarInferior(qtd);
        }
    }
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para tipo pista');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso.');
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior  ) {
        alert('Quantidade indisponível para tipo superior');
    } else {
        qtdSuperior = qtdSuperior   - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior ;
        alert('Compra realizada com sucesso.');
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior  ) {
        alert('Quantidade indisponível para tipo superior');
    } else {
        qtdInferior = qtdInferior   - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior ;
        alert('Compra realizada com sucesso.');
    }
}
