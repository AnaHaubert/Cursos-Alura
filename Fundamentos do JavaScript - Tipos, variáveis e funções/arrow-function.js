function apresentar(nome) {
    return `Meu nome é ${nome}`;
}

//ARROW FUNCTION ------------------------------------------------------------------------------------------
                   //parâmetro    //o que deve ser executado
const apresentaArrow = nome => `Meu nome é ${nome}`; 
// um parâmetro não precisa de chaves e não precisa de return.

cont soma = (num1, num2) => num1 + num2;
//não pode ser nomeada. é acompanhada de uma const

// ARROW FUNCTION COM + DE UMA LINHA DE INSTRUÇÃO
// caso sejam mais linhas, será necessário utilizar as chaves e o return
const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num2 >= 10) {
        return 'somente números de 1 a 9';
    } else {
        return num1 + num2;
    }
}

//Hoisting: arrow function se comporta como expressão.

//Operador maior ou igual  (  >=  )
