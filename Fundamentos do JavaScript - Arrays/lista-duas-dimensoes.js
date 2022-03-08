const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const mediasDosAlunos = [10, 7, 9, 6];

                //índice     0         1
let listaDeNotasEAlunos = [alunos, mediasDosAlunos]; //array de duas dimensões: uma array que tem dentro dela outras arrays

console.log(`${listaDeNotasEAlunos[0][0]}, sua nota é ${listaDeNotasEAlunos[1][0]}`); 
/*
primeiro parâmetro acessa o índice da array listaDeNotasEAlunos
segundo parâmetro acessa o índice do array informado no primeiro
*/

//Outra forma de chamar os arrays de 2 dimensões é matrizes.