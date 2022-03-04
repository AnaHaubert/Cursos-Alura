//let x = '';
//console.log(x);
//x = 'oi';

// 1) Declara a função 
/*                  //string
function imprimeTexto(texto) {
    console.log(texto);
}

// 2) Executa a fução (uma ou mais vezes)
//imprimeTexto('Oi!');
//imprimeTexto('Outro texto') //reaproveita o código

function soma() {
    return 2 + 2; //retorno da função (deve ser a última coisa antes de fechar o bloco. o que for escrito depois do return não será executado pelo JS)
}
//console.log(soma()); //console.log com função
//imprimeTexto(soma()); //função dentro de outra função


//TIPOS DE FUNÇÕES ----------------------------------------------------------------------------------------
// Função sem retorno e sem parâmetro (apenas executa uma instrução)
/* 
function cumprimentar(){
    console.log('oi gente!')
   }
   
cumprimentar()
*/

// Função sem retorno, com parâmetro (função recebe, via parâmetro, alguma informação)
/*
function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
   }

cumprimentaPessoa('Helena')
*/

// Função com retorno, sem parâmetro (É possível combinar funções para que cada uma controle apenas uma parte do código e elas trabalhem juntas)
/*
function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”
   */

//Função com return e mais de um parâmetro
/*
function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
   }
   
console.log(operacaoMatematica(15, 30, 45)) // 90
*/