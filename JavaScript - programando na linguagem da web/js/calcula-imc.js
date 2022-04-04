var titulo = (document.querySelector(".titulo"));
titulo.textContent = "Aparecida Nutricionista";   

var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector('.info-imc');
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log('Peso inválido!');
        pesoEhValido = false;
        tdImc.textContent = 'Peso inválido!';
        paciente.classList.add('paciente-invalido');
    }
    if (!alturaEhValida) {
        console.log('Altura inválida!');
        alturaEhValida = false;
        tdImc.textContent = 'Altura inválida!';
        paciente.classList.add('paciente-invalido');
    }
    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

/*
- alert: exibe um popup com o conteúdo informado como parâmetro.
- document: representação do DOM ou Document Object Model, que é a representação da nossa página HTML para o navegador, que é utilizada pelo Javascript para manipular a página.
- querySelector():  faz a busca através de seletores CSS para trazer o HTML que você está interessado. Só retorna o primeiro elemento com a classe informada.
- querySelectorAll(): retorna um array com todos os elementos com a classe informada
- var: armazena o a parte do código selecionada em uma variável
- textContent: acessa o conteúdo do texto. Através dele, é possível fazer alterações no conteúdo.
- é uma boa prática não buscarmos por uma tag HTML específica. O querySelector possibilita a busca por seletores CSS (classe '.', id '#')
- ||: operador lógico de 'ou'
- &&: operador lógico de 'e'
- .toFixed: define número de dígitos depois do ponto decimal
- for: recebe a declaração da variável inicial, até onde essa variável deve cresçer, e o que deve ser feito no fim de cada iteração. A variável inicial percorrerá do valor 0 até a última posição do array de pacientes menos 1.
- .length: informa o tamanho do array
- .style: propriedade que contem os estilos aplicados 
- .classList: acessa as classes CSS / .add(): adiciona a classe desejada
*/
