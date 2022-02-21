import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

//cliente = nome e cpf
const cliente1 = new Cliente("Ana", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);
//console.log(cliente2.cpf);



//conta corrente = cliente e agencia
const contaCorrenteAna = new ContaCorrente(cliente1, 1001);
contaCorrenteAna.depositar(500);

const conta2 = new ContaCorrente(cliente2, 102);

let valor = 200;
contaCorrenteAna.tranferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);
