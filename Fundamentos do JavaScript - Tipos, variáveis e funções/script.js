// VAR ----------------------------------------------------------------------------------------------------
/*
var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area);
var area;
*/

/*
Variáveis do tipo var podem ser usadas antes de serem declaradas.
Problema: pode causar duplicidade dos nomes, e outros bugs.
O uso de 'var' não é muito recomendado por ser muito 'solta'.
*/

// LET ----------------------------------------------------------------------------------------------------
/*
let forma = 'retangulo';
let altura = 5;
let comprimento = 7;

if (forma === 'retangulo') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);
let area;
*/

/*
Variáveis do tipo let podem ter seu valor alterado.
Precisam ser declaradas antes de serem utilizadas.
*/

// CONST --------------------------------------------------------------------------------------------------
/*
const forma = 'triangulo';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'retangulo') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}
*/
//console.log(area);

/*
Variáveis do tipo const não podem ter seu valor alterado (valor fixo).
É necessário declarar o valor na criação da const, não é possível criar uma const sem atribuir um valor.
Quando o valor precisará ser alterado, o correto é utilizar 'let'.
*/

// IDENTIFICADOR ------------------------------------------------------------------------------------------
/*
Onome que escolhemos para a variável é chamado de 'identificador'
O ideal é que ele seja sempre o mais explicativos possível.
Se tentarmos identificar uma variável com um termo que faça parte da linguagem, o JavaScript não consegue reconhecer estas palavras-chave como identificadores e nem interpretar o que deve ser executado nestas linhas.
*/
let var = 0;
let if = 0;
let const = "Alura";