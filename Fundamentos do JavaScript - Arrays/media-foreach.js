const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

//função callback: recebe outra função como parâmetro (função que chama outra função)
/*
notas.forEach( nota => { 
    somaDasNotas += nota
})
*/
/*
método forEach (para cada): para cada elemento do array, será executando o que está no bloco de código. Passa automaticamente por cada elemento, sem precisar declarar o numero do indice (como no for)
Não retorna nada, só executa o que está no bloco.
*/

notas.forEach( function(nota) { //pode receber funções de todos os formatos. O mais comum é arrow function.
    somaDasNotas += nota
})

let medias = somaDasNotas / notas.length;

console.log(medias);