const arrayNums = [1, 2, 3, 4];

/*
objetivo: utilizar o map() para multiplicar cada um dos valores nesse array por 10 e retornar um novo array com os resultados. 
*/

// Antes de escrever o map(), escreve função callback; ou seja, a função que será chamada (call) de volta quando o método map() for executado:
function multiplicaPorDez(num) {
    return num * 10
   }
//as funções externas permitem reaproveitamento de código.

const arraySomada = arrayNums.map(multiplicaPorDez)
//quando utilizamos uma função externa como callback de um map() não foi necessário passar um parâmetro. O map() executa automaticamente o bloco de código da função (nesse caso, num * 10) para cada elemento do array.
//const arraySomada = arrayNums.map(num => num * 10)


console.log(arraySomada)