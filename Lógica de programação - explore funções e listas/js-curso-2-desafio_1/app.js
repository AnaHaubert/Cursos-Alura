/*
//desafio 1

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function exibeMsgConsole() {
    console.log('O botão foi clicado');
}

function exibeMsgAlert() {
    alert('Eu amo JS');
}

function executaPrompt() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil');
    let mensagem = `Estive em ${cidade} e lembrei de você`;
    alert(mensagem);
}

function executaSoma() {
    let numero1 = parseInt(prompt('Digite o primeiro número'));
    let numero2 = parseInt(prompt('Digite o segundo número'));
    let soma = numero1 + numero2;

    alert(`O resultado da soma dos números informados é: ${soma}`);
}

//desafio 2

function exibeOla() {
    console.log('Olá, mundo!')
}

function exibeOlaNome(nome) {
    console.log(`Olá, ${nome}!`);
}

function exibeDobro(num) {
    console.log(num * 2);
}

function exibeMedia(num1, num2, num3) {
    soma = num1 + num2 + num3;
    media = soma / 3;
    console.log(media);
}

function retornaMaior(num1, num2) {
    let numeroMaior = num1 > num2 ? num1 : num2;
    console.log(numeroMaior);
}

function multiplica(num) {
    multiplicacao = num * num;
    console.log(multiplicacao);
}

exibeOla();
exibeOlaNome('Ana');
exibeDobro(6);
exibeMedia(2, 4, 6);
retornaMaior(10, 9);
multiplica(9);

//desafio 3

//1
function calculaIMC(peso, altura) {
    let imc = peso / (altura*altura);
    console.log(imc);
}

//2
function calculaFatorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }

    let fatorial = 1;
    for (let i = 2; i <= num; i++) {
        fatorial *= i;
    }

    console.log(`O fatorial de ${num} é ${fatorial}`);
}


//3
function convertParaReal(valor) {
    let real = valor * 4.80
    console.log(real)
}

//4
function calculaAreaEPerimetroRetangulo(base, altura, ) {
    let area = base * altura;
    let perimetro = 2 * (base + altura);

    console.log(`Sala retangular: área = ${area}m² | perímetro = ${perimetro}m² `);
}

function calculaAreaEPerimetroCirculo(raio) {
    let pi = 3.14;
    area = pi * (raio * raio);
    perimetro = 2 * pi * raio;

    console.log(`Sala circular: área = ${area}m² | perímetro = ${perimetro}m² `);
}

function calculaTabuada (num) {
    contador = 0;
    while ( contador <= 10) {
        let taboada = num * contador;
        console.log(taboada);
        contador++
    }
}




calculaIMC(58, 1.62); 2,6244
convertParaReal(50);
calculaFatorial(4);
calculaAreaEPerimetroRetangulo(10, 6);
calculaAreaEPerimetroCirculo(7);
calculaTabuada(5);
calculaFatorial(4);

*/

//1
let listaGenerica = [];
//2
let linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python'];
//3
linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');
console.log(linguagensDeProgramacao);
//4
let listaDeNomes = ['Maria', 'João', 'José'];
console.log(listaDeNomes[0]);
//5
console.log(listaDeNomes[1]);
//6
console.log(listaDeNomes[2]);