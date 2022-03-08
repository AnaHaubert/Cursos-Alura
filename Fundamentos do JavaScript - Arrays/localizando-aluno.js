const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const mediasDosAlunos = [10, 7, 9, 6];

let listaDeNotasEAlunos = [alunos, mediasDosAlunos];

const exibeNomeENota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) { 
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
        return listaDeNotasEAlunos[0][indice] + ', sua média é ' + listaDeNotasEAlunos[1][indice];
    } else {
        return 'Aluno não cadastrado.';
    }
}
//método includes: verifica se o elemento procurado está incluído na arrow - retorna um booleano (true ou false)
//método indexOf: 'Índice de' busca o índice do parâmetro informado - retorna um número 

//console.log(exibeNomeENota('Ana'));
//console.log(exibeNomeENota('Juliana'));
console.log(exibeNomeENota('Nemo'));