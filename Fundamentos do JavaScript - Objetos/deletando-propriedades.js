const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
}

/*
Para remover uma propriedade, utilizar o operador delete. 
O delete remove do objeto o valor da propriedade e a chave.
*/
//delete objPersonagem.aliado;
//console.log(objPersonagem.aliado); //undefined

//Também é possível utilizar a notação de colchetes:
//delete objPersonagem["status"];
//console.log(objPersonagem.status); //undefined

/*
O valor de retorno do operador delete é um booleano (true ou false).Porém, ele não retorna false se tentarmos remover, uma propriedade que não existe no objeto:
*/
const delProp = delete objPersonagem.aliado
const delPropInexistente = delete objPersonagem["endereco"]

console.log(delProp) //true
console.log(delPropInexistente) //true

/*
O operador delete não remove propriedades herdadas de outro objeto, neste caso, retornará false se tentarmos fazer isso. 
*/