var botaoAdicionarPaciente = document.querySelector('#adicionar-paciente');

botaoAdicionarPaciente.addEventListener('click', function(event) {
    event.preventDefault();
    var form = document.querySelector('#form-adiciona');
    var paciente = obtemDadosPacienteForm(form);
    
    var erros = validaPaciente(paciente)
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    //adiciona o paciente a tabela
    adicionaPacienteNaTabela(paciente);
   
    form.reset()
    var mensagemDeErro = document.querySelector('#mensagens-erro');
    mensagemDeErro.innerHTML = '';
})

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector('#mensagens-erro');
    ul.innerHTML = '';
    erros.forEach(function(erro){
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    })
}

function obtemDadosPacienteForm(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value),
    }
    
    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');
    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {
    var erros = []; 

    if (paciente.nome.length == 0) {
        erros.push('O campo "nome" é obrigatório.');
    }
    
    if (!validaPeso(paciente.peso)) {
        erros.push('Peso inválido.');
    }

    if (!validaAltura(paciente.altura)) {
        erros.push('Altura inválida.');
    }

    if (paciente.gordura.length == 0) {
        erros.push('O campo "% de gordura" é obrigatório.')
    }

    if (paciente.peso.length == 0) {
        erros.push('O campo "peso" é obrigatório.')
    }

    if (paciente.altura.length == 0) {
        erros.push('O campo "altura" é obrigatório.')
    }

    return erros;
}

/*
- . addEventListener: adiciona um escutador de evento 
- .value: Pega o valor de um input
- .name: Acessa os input de um form 
- .event.preventDefault(): previne o comportamento padrão
- .createElement(): cria um elemento HTML (a tag passada como parametro)
- .appendChild(): Adiciona como filho o elemento passado como parâmetro
*/
