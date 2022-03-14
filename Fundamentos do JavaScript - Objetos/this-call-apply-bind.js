//THIS: ---------------------------------------------------------------------------------------------------
/*
const pessoa = {
    nome: "Ana",
    email: "a@email.com",
    imprimeNome: function(){ //o método imprimeNome() faz referência ao próprio objeto pessoa.
      console.log(`${pessoa.nome}`)
    }
}  
*/

//Uma forma melhor de imprimir o dado, que não “acopla” o método ao nome do objeto:
/*
const pessoa = {
    nome: "Ana",
    email: "a@email.com",
    imprimeNome: function(){
      console.log(`${this.nome}`)
    }
}
pessoa.imprimeNome() //Ana
*/

//______________________________________________________________
/*
function imprimeNomeEmail(){
    console.log(`nome: ${this.nome}, email ${this.email}`)
}
const pessoa1 = {
    nome: "Ana",
    email: "a@email.com",
    imprimeInfo: imprimeNomeEmail
}
const pessoa2 = {
    nome: "Paula",
    email: "p@email.com",
    imprimeInfo: imprimeNomeEmail
}
*/

/*
- A função é executada no contexto de cada um dos objetos e o 'this' faz com que ela utilize os valores de propriedade desses objetos.
- O this representa o objeto que executa a função. A instrução passada para o JavaScript é: “execute a função aqui, utilizando este contexto”.
*/
   
//pessoa1.imprimeInfo() //nome: Ana, email a@email.com
//pessoa2.imprimeInfo() //nome: Paula, email p@email.com

/*
No caso de atributos das funções construtoras ou dos construtores de classe, podemos dizer que o construtor recebe os atributos deste objeto
*/
/*
function Pessoa(nome, email){
    this.nome = nome
    this.email = email
    this.imprimeNomeEmail = function(){
        console.log(`nome: ${this.nome}, email: ${this.email}`)
    }
}
const pessoa1 = new Pessoa("Ana", "a@email.com")
const pessoa2 = new Pessoa("Paula", "p@email.com")

pessoa1.imprimeNomeEmail() // nome: Ana, email: a@email.com
pessoa2.imprimeNomeEmail() // nome: Paula, email: p@email.com
*/


//call() --------------------------------------------------------------------------------------------------
//Esse método permite que uma função seja chamada com parâmetros e valor de this específicos:
/*
function imprimeNomeEmail(tipoCliente){
    console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`)
}
const cliente1 = {
    nome: "Carlos",
    email: "c@email.com"
}
const cliente2 = {
    nome: "Fred",
    email: "f@email.com"
}
imprimeNomeEmail.call(cliente1, "cliente especial") // cliente especial - nome: Carlos, email: c@email.com
imprimeNomeEmail.call(cliente2, "cliente estudante") // cliente estudante - nome: Fred, email: f@email.com
*/
/*
Como a função está sendo chamada como objeto do método call(), podemos especificar que o contexto de this em cada chamada se refere a um objeto diferente (cliente1 e cliente2), sem a necessidade de adicionar a função em cada um dos objetos.
- O primeiro parâmetro do método call() se refere ao objeto que será usado como contexto do this.
- Do segundo parâmetro em diante, são passados os argumentos que a função deve receber. No caso acima, há somente um parâmetro, a string tipoCliente.
*/


//apply() -------------------------------------------------------------------------------------------------
//Este método recebe os argumentos em um array ao invés de separados
/*
function imprimeNomeEmail(tipoCliente, agencia){
    console.log(`
      ${tipoCliente} da agência ${agencia}:
      - nome: ${this.nome}, email: ${this.email}
      `)
}
const cliente1 = {
    nome: "Carlos",
    email: "c@email.com"
}
const cliente2 = {
    nome: "Fred",
    email: "f@email.com"
}
*/
/*
Chamando imprimeNomeEmail com o método apply() e passando um array de dados como segundo parâmetro (O primeiro parâmetro de apply() se refere ao contexto de this):
*/
//const clienteEspecial = ["cliente especial", "Rio de Janeiro"]
//const clienteEstudante = ["cliente estudante", "Fortaleza"]

//imprimeNomeEmail.apply(cliente1, clienteEspecial) // cliente especial da agência Rio de Janeiro: - nome: Carlos, email: c@email.com
//imprimeNomeEmail.apply(cliente2, clienteEstudante) // cliente estudante da agência Fortaleza: - nome: Fred, email: f@email.com

/*
Utiliza-se o método apply() caso haja um array de dados e o call() para passar valores individuais como parâmetro. O array deve seguir a ordem correta dos parâmetros informado na função.
*/

//bind() --------------------------------------------------------------------------------------------------
//Este método “prende” ou “liga” uma função ao contexto de um objeto.
const personagem = {
    nome: "Princesa Leia",
    apresentar: function(){
      return `a personagem é ${this.nome}`
    }
}
const personagemGenerico = personagem.apresentar
console.log(personagemGenerico()) //a personagem é undefined
/*
Quando atribuímos apresentar() à variável personagemGenerico estamos retirando a função apresentar() do contexto do objeto na qual foi criada, e por isso this não está mais acessível; a função perdeu a referência original e não consegue mais localizar onde está this.*/
//Ressolvemos este problema com bind():
const personagemDefinido = personagemGenerico.bind(personagem)
console.log(personagemDefinido()) //a personagem é Princesa Leia
/*
Acima, utilizamos o método bind() para “ligar” a função que atribuímos a personagemGenerico ao objeto personagem. Assim, sempre que esta função for executada a partir da variável personagemDefinido, a função original vai usar o objeto personagem como contexto de execução. Dessa forma, this sempre se refere ao objeto personagem e é capaz de acessar suas propriedades.
*/