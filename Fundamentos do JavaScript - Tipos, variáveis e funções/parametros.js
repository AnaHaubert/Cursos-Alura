// PARÂMETROS DE FUNÇÃO -----------------------------------------------------------------------------------
              //parâmetros
function soma(numero1, numero2) {
    return numero1 + numero2;
}

/*
console.log(soma(2, 2));
console.log(soma(245, 20));
console.log(soma(-500, 60));
*/

/*
É uma boa prática passar poucos argumentos para as funções. Se a função tiver muitos argumentos, o mais adequado é separá-los em funções diferentes/menores.

Parâmetros x argumentos: Na prática se referem ao mesmo tipo de dado
algumas documentações se referem a parâmetros no momento em que a função é definida e argumentos como os dados que utilizamos para executar a função.
*/

//ORDEM DOS PARÂMETROS ------------------------------------------------------------------------------------

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}
//console.log(nomeIdade(40, 'Juliana'));

/*
O nome da função deve ser exclusivo para cada uma.
Funções diferentes podem ter os mesmos nomes de parâmetro.
*/


function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}
//console.log(multiplica(soma(4, 5), soma(3, 3)));

console.log(multiplica(soma(4, 5))) // NaN (um parâmetro não foi definido -> numero1 * undefined = NaN - 
/*
Para que isso não ocorra, é possível estipular um valor padrão na declaração da função
ex.: para multiplicação: (numero1 = 1, numero2 = 1)
*/