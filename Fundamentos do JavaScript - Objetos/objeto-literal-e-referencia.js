/* const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }
*/
//objeto literal sempre aponta para um mesmo local na memória, mesmo se criar cópias dele:
//const objPersonagem2 = objPersonagem //cria uma referência ao objeto original

//Se alterarmos apenas o objPersonagem2, o resultado é:
//objPersonagem2.nome = "Gandalf, o Cinzento"
//console.log(objPersonagem.nome) //Gandalf, o Cinzento
//console.log(objPersonagem2.nome) //Gandalf, o Cinzento

/*
A variável objPersonagem2 não fez uma cópia do objeto original, apenas serviu como referência para o objeto original objPersonagem. Qualquer alteração em qualquer um dos objetos altera ambos.
*/

//___________________________________________________________________________
//Objetos também podem ser criados através do método Object.create():

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }
   
const objPersonagem2 = Object.create(objPersonagem) //cria um cópia do objeto passado como parâmetro
objPersonagem2.nome = "Gandalf, o Cinzento"
   
console.log(objPersonagem.nome) //Gandalf
console.log(objPersonagem2.nome) //Gandalf, o Cinzento