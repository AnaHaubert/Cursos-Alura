function validarCPF(cpf){
    if(cpf.length !== 11){
      return {valido:false, texto:"Este campo deve ter 11 dígitos."}
    }else{
      return {valido:true, texto:""}
    }
}

function validarSenha(senha){
    if(senha.length < 3 || senha.length > 72){
      return {valido:false, texto:"Este campo deve ter entre 3 e 72 dígitos."}
    }else{
      return {valido:true, texto:""}
    }
}

export {validarCPF, validarSenha};