console.log(`\n Trabalhando com condicionais`);
const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";

console.log('\n Destinos possíveis:');
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada;

let contador = 0;
let destinoExiste = true;
while(contador < 3) {
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }

    
    ;
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste) {
    console.log("Boa viagem");
} else {
    console.log("Desculpe, ocorreu um erro");
}

for(let i = 0; i < 3; i ++) {
    if(listaDeDestinos[i] == destino){
        destinoExiste = true;
        break;
    }
}
