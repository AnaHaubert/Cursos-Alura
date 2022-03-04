// TIPO BOOLEAN
//true -> verdadeiro
//false -> falso
const primeiroNumero = 5;
const segundoNumero = 5;
let cadastroAtivado = true;
//console.log(primeiroNumero === segundoNumero);

const texto1 = 'Alura';
const texto2 = 'alura';
//console.log(texto1 === texto2);


// PADRONIZAR UMA COMPARAÇÃO ------------------------------------------------------------------------------
const cidade = "belo horizonte";
const input = "Belo Horizonte";
//console.log(cidade === input); // false

/*
o JavaScript diferencia minúsculas e maiúsculas, tanto nos valores dos dados quanto no código que escrevemos.
Uma das formas de tratar isso é padronizando todos os inputs para o formato de texto que será comparado antes mesmo de fazer a comparação. Nesse caso, transformando todos os caracteres em letras minúsculas.
*/
const inputMinusculo = input.toLowerCase();
// console.log(cidade === inputMinusculo); // true

/*
A propriedade length pode ser utilizada para sabermos quantos caracteres uma string contém:
*/
const senha = "minhaSenha123"
// console.log(senha.length) // 13 caracteres


// TIPO NULL ----------------------------------------------------------------------------------------------
/*
O null é um tipo especial, pois pode ser traduzido como “ausência de valor” e pode ser atribuído como valor de uma variável:
*/
let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}

// UNDEFINED ----------------------------------------------------------------------------------------------
/*
Este tipo também representa “ausência de valor”, porém de uma outra forma: usualmente, enquanto null é um valor atribuído a uma variável que existe e foi iniciada, undefined se refere ao valor de uma variável que não foi inicializada (ou seja, não foi atribuído nenhum valor a ela).
undefined também é o valor retornado por uma função que não tem cláusula return.
*/
let input = null;
let input2;
//console.log(input); // null
//console.log(input2); // undefined

/*
No cotidiano é comum considerar undefined como uma ausência de valor “inesperada” (causada por um bug ou erro no código) e null como um tipo de dado que também significa ausência de valor, mas não de maneira inesperada.
*/
