const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

                        //(0), 10
const sala1 = nomes.slice(0, nomes.length/2); //método slice: recebe como parâmetro o início e o fim do corte. SLICE = FATIAR/PEDAÇO/CORTE
                         //10 (até o final do array)
const sala2 = nomes.slice(nomes.length/2); //quando não recebe segundo parâmetro, vai até o final do array.

console.log('tamanho da array: ', nomes.length);
console.log(`Alunos da sala 1: ${sala1}`);
console.log(`Alunos da sala 2 ${sala2}`);