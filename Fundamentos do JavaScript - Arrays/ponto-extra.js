const notas = [10, 9, 8, 7, 6];

const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota);
//método map: tudo que é executado é retornado em uma nova array. 

console.log(notasAtualizadas);