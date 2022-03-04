// DECARAÇÃO DE FUNÇÃO ------------------------------------------------------------------------------------

function minhaFuncao(param) {
    //bloco de código
}

//minhaFuncao('param');

// EXPRESSÃO DE FUÇÃO -------------------------------------------------------------------------------------
//geralmente são funções anonimas atribuídas a variáveis do tipo 'const'

//const soma = function(num1, num2) {return num1 + num2}

//console.log(soma(1,1));

// Diferença Principal: HOISTING
//Funções e var são listadas no top do arquivo

//console.log(apresentar());
function apresentar() {
    return 'Olá';
}

console.log(soma(1, 1)); // ReferenceError: Cannot access 'soma' before initialization (não é possível acessar 'soma' antes da sua inicialização. por ser uma const, não é possível chamar a função atribuída antes da declaração.)
const soma = function(num1, num2) {return num1 + num2}