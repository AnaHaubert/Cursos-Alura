const notas1 = [10, 6.5, 8 ,7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1, notas2, notas3]

let media = 0

/*
podemos usar o for várias vezes, uma para cada dimensão da matriz. 
Uma matriz de duas dimensões usará dois for, um dentro do outro.
*/

for (let i = 0; i < notasGerais.length; i++) {
    for (let j = 0; j < notasGerais[i].length; j++) {
        media += notasGerais[i][j]/notasGerais[i].length;

        //console.log(i, j); //imprime os valores de i e j durante a execução do for
    }
}

/*
- O primeiro for executa o bloco de código enquanto i for menor que notasGerais.length. Como são 3 elementos (nesse caso, arrays), o primeiro for será executado 3 vezes.
- O segundo for tem uma nova variável let j, não podemos usar outra let i porque ela já está definida. Este for será executado enquanto j for menor que notasGerais[i].length. Como cada notasGerais[i] é um array, é possível obter a propriedade de tamanho dele utilizando o .length.
- O código dentro do segundo for vai acumular o valor de notasGerais[i][j]. NotasGerais[i] é um dos 3 arrays iniciais. O parâmetro [j] vai acessar o elemento dentro array escolhido pelo notasGerais[i], retornando um número que poderá ser usado na conta.
*/

media = media/notasGerais.length //soma as médias dos arrays de notas (8+7+9) e divide pela quantidade de arrays em notasGerais.

console.log(media)