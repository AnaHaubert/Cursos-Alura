//const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
//const arrayConcat = arrayOriginal.concat("André", "Fernanda")
//const arrayConcat = arrayOriginal.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"])
/*
Podemos passar mais de um array como parâmetro para que seus elementos sejam concatenados em um único array, junto com o que está sendo chamado com o método (no caso, arrayOriginal.
    */

//console.log(arrayConcat)
//console.log(arrayOriginal)

/*
o JavaScript concatena o array principal e os números passados como parâmetro para criar outro array, mantendo o original sem alterações.
*/

//const arrayOriginal = [50, 60, 70]
//const arrayConcat = arrayOriginal.concat([80, [90, 100]])
/*
 quando recebe um array como parâmetro, concat() vai concatenar apenas os elementos. Porém, este método não extrai os elementos do array de forma recursiva; ou seja, não vai extrair os elementos de arrays que estejam “aninhados”.
*/
    
console.log(arrayConcat)
console.log(arrayOriginal)