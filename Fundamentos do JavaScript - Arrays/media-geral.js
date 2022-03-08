const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function mediaSala(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum, 0) 
    return somaDasNotas / notasDaSala.length;
}
/*
método reduce: redux todos os valores do array para um único valor numérico
precisa de dois parâmetros: a função e o valor inicial do acumulador
a função precisa recever os dois parâmetros: acumulador e valor atual
*/

//console.log(`Média da sala de JavaScript: ${mediaSala(salaJS)}`);
//console.log(`Média da sala de Java: ${mediaSala(salaJava)}`);
//console.log(`Média da sala de Python: ${mediaSala(salaPython)}`);
//__________________________________________________________________

const notas = [10, 6.5, 8, 7];
const media = notas.reduce((acum, atual) => atual + acum, 0) / notas.length;

console.log(media);
