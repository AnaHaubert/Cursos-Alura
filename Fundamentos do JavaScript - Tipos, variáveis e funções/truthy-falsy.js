// BOOLEAN ------------------------------------------------------------------------------------------------
const usuarioLogado = true;
const contaPaga = false;

// TRUTHY OU FALSY ----------------------------------------------------------------------------------------

// 0 => false
//'' (string vazia) => false
// 1 => true

/*
console.log(0 == false);
console.log('' == false);
console.log(1 == true);
*/

// null ===> vazio ou nada
 let minhaVar;
 let varNull = null;

 let numero = 3;
 let texto = 'Alura';

 console.log(typeof minhaVar); //typeof == "Qual é o tipo de dado que está sendo armazenado na variável?"
 console.log(typeof varNull); // null == objeto (bug do JS que não será corrigido para não quebrar códigos já existentes.)

// undefined => false