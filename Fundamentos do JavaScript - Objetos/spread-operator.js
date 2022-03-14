const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
}
const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
}
/*
const guerreiro = { fichaGuerreiro, equipoGuerreiro } //criar um novo objeto literal com { } e passar para este objeto as variáveis de cada personagem:
console.log(guerreiro); //os objetos ainda estão separados; o nome de cada variável agora é uma chave e o valor da chave é cada um dos objetos
*/

//spread operator: sintaxe de três pontos antes do nome de cada objeto literal, com cada objeto separado por vírgula
//const guerreiro = { ...fichaGuerreiro, ...equipoGuerreiro }
//console.log(guerreiro)

//_________________________________________________________________________________________________________

const mago = {
    nome: "Gandalf",
    classe: "mago"
}
const guerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
}  
const ranger = {
    nome: "Legolas",
    classe: "ranger"
}

/*
caso a sintaxe de espalhamento seja usada em objetos que tenham chaves/propriedades com o mesmo nome, o JS vai sobrescrever o valor destas propriedades à medida que encontra novos valores com o mesmo nome de chave
*/
const personagens = { ...mago, ...guerreiro, ...ranger }
console.log(personagens) //O JS sobrescreveu as chaves com o mesmo nome a cada ocorrência, assim o resultado final foi somente o último objeto declarado dentro do objeto personagens.

