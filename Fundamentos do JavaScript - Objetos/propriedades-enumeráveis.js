const catalogo = {
    "editora": "Casa do Código",
    "catalogo": [
        {"id": 50,"titulo": "Primeiros Passos com NodeJS",
        "autor": "João Rubens",
        "categoria": "programação",
        "versoes": ["ebook", "impresso"]}
    ]
}

console.log(Object.getOwnPropertyDescriptor(catalogo, "editora")) //método Object.getOwnPropertyDescriptor(): descreve os atributos da propriedade editora

/*
Métodos que começam com getOwnProperty… funcionam apenas em propriedades “próprias” do objeto.
*/