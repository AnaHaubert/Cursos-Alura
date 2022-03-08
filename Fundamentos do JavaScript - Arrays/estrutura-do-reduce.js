const numeros = [43, 50, 65, 12]
//const soma = numeros.reduce((acum, atual) => atual + acum, 0)
/*
1) O método reduce() está trabalhando com dois parâmetros. A função callback obrigatória para retornar o cálculo e o número que representa o valor inicial - no caso, 0.
2) A função callback foi escrita diretamente dentro do reduce(), recebendo dois parâmetros, ambos obrigatórios: O valor acumulado e o valor atual.
3) A função callback foi escrita na forma de arrow function; quando só temos uma linha de instrução dentro da função (atual + acum) não precisamos usar chaves e nem da palavra-chave return.
*/
//_______________________________________________


//Uma forma um pouco mais extensa para separar as partes do código:
/*
const soma = numeros.reduce(function (acum, atual) {
    return atual + acum
}, 0)
*/

//________________________________________________


//Uma terceira forma de reescrever seria escrevendo a função callback fora do reduce():
/*
function operacaoNumerica(acum, atual) {
    return atual + acum
}
   
const soma = numeros.reduce(operacaoNumerica, 0)
*/

console.log(soma) //170
