//const arrayVazia = [];

//console.log(arrayVazia) //[]
//console.log(arrayVazia.length) //0
//console.log(arrayVazia[0]) //undefined
//_________________________________________________________________________________________________________

//const arrayVazia = [,,,];

//console.log(arrayVazia.length) //3
//console.log(arrayVazia[0]) //undefined
//console.log(arrayVazia[1]) //undefined
//console.log(arrayVazia[2]) //undefined

//Criamos um array com 3 posições, porém em nenhuma dessas posições existe um valor. 
//_________________________________________________________________________________________________________

const arrayVazia = [,,,];
console.log(arrayVazia.length) // 3
arrayVazia.push(50)
console.log(arrayVazia) // [ <3 empty items>, 50 ]
console.log(arrayVazia.length) // 4

/*
O JavaScript manteve as posições vazias e adicionou o 50 ao final do array. Após a execução, ele passou a ter 4 posições, mas somente um elemento (o número 50). Chamamos este tipo de estrutura de array esparso.
*/