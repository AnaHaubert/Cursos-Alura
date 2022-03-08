const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

//listaDeChamada.splice(1, 2, 'Rodrigo');
/*
Método splice: permite que remova e incluia novos elementos elementos em qualquer lugar dentro do array. Pede três parâmetros: 
- Índice inicial, 
- quantidade de elementos que devem ser removidos, 
- caso seja necessáio incluir algum elemento, colocamos como último parâmetro (pode ser mais de um).
*/

listaDeChamada.splice(2, 0, 'Rodrigo'); //Se o segundo parâmetro for 0, nenhum elemento será removido.

console.log(`Lista de chamada: ${listaDeChamada}`);