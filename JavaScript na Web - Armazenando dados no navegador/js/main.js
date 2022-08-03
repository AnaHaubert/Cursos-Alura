const form = document.getElementById("novoItem") //Retorna e salva o elemento de id "novoItem" na vaiável form
const lista = document.getElementById("lista") //Retorna e salva o elemento de id "lista" na vaiável form
const itens = JSON.parse(localStorage.getItem("itens")) || [] 
//JSON.parse transforma os dados (que antes foram tranformados em string) para JavaScript, no caso em um array
//getItem() é utilizado para acessar as informações salvas no localStorage, referenciando o objeto a ser acessado dentro dos parênteses. Neste caso, verifica se há elementos no array "itens"
// || caso não haja elementos no array, deverá ser criado um array vazio

itens.forEach( (elemento) => { //para cada elemento do array itens executa a função criarElemento(elemento) utilizando os dados do objeto elemento (nome e quantidade)
    criaElemento(elemento)
} )

form.addEventListener("submit", (evento) => { //adiciona o escutador de evento em form (quando ocorrer o evento de submit, executa a arrow function declarada)
    evento.preventDefault() //interrompe o comportamento padrão do form, que é recarregar a página com o evento de submit

    const nome = evento.target.elements['nome'] //salva na variável "nome" o conteúdo do elemento de id "nome" quando ocorre o evento de submit
    const quantidade = evento.target.elements['quantidade'] //salva na variável quanridade o conteúdo do elemento de id "quantidade" quando ocorre o evento de submit

    const existe = itens.find( elemento => elemento.nome === nome.value ) //itens.find procura no array itens, na posição nome, se o elemento já existe

    const itemAtual = { //objeto itemAtual que possui nome e quantidade 
        "nome": nome.value, //"nome" recebe o valor de item do array nome
        "quantidade": quantidade.value //"quantidade" recebe o valor de item do array quantidade
    }

    if (existe) { //se o elemento já existir no array
        itemAtual.id = existe.id //se elemento existe o id continua o mesmo
        
        atualizaElemento(itemAtual) //se já existe o elemento no array, chama a função atualiza elemento com os dados de itemAtual

        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual //procura no array "itens" o elemento que seja igual ao "itemAtual" e atualiza o id 
        //findIndex procura um elemento dentro do array, no caso o elemento que possua o id informado (que no caso, já existe no array)
    } else { //se o elemento não existir no array

        itemAtual.id = itens[itens.length -1] ? (itens[itens.length-1]).id + 1 : 0; //cria um id para o elemento itemAtual
        /*operador ternário:
        se o array for maior que 0, cria o id com base no tamanho do array itens - 1.
        se já existir em itens, um elemento com o id informado, deverá incluir o id + 1.
        se o array estiver vazio, cria o id "0" para o elemento
        */

        criaElemento(itemAtual) //quando o formulário for submetido, chama a função criaElemento() com os valores de itemAtual

        itens.push(itemAtual) //insere o itemAtual no array itens
    }

    localStorage.setItem("itens", JSON.stringify(itens))//acessa o localStorage, atualiza o array "itens" transformando o objeto itens em string JSON
    //localStorage mantém o dado gravado mesmo se o browser é fechado e reaberto, é utilizado para salvar dados do tipo texto string no navegador da pessoa usuária.
    //setItem() quando passado 'chave' e 'valor', irá adicionar esta chave ao storage, ou atualizar o valor caso a chave já exista.
    //JSON.stringify converte valores em javascript para uma String JSON. 

    nome.value = "" //após o submit, limpa o campo do input nome
    quantidade.value = "" //após o submit, limpa o campo do input quantidade
})

function criaElemento(item) {
    const novoItem = document.createElement("li") //cria e armazena na variável NovoItem um novo elemento "li"
    novoItem.classList.add("item") //adiciona a classe css "item" ao elemento li novoItem

    const numeroItem = document.createElement("strong") //cria e armazena na variável numeroItem um novo elemento "strong"
    numeroItem.innerHTML = item.quantidade //faz com que a tag html criada e armazenada em numeroItem receba o objeto item na posição quantidade
    numeroItem.dataset.id = item.id //adiciona o atributo id ao elemento numeroItem
    // dataset - data attributes: dados que precisam ser associados a um determinado elemento mas não necessariamente tem um significado definido.
    novoItem.appendChild(numeroItem) //adiciona o numeroItem como filho do elemento novoItem ("strong" dentro da "li")
    
    novoItem.innerHTML += item.nome //inclui no novoItem, que agora já possui o numeroItem/strong como filho, o nome do item

    novoItem.appendChild(botaoDeleta(item.id)) //adiciona o botaoDeleta como filho de novoItem, vinculando o id do novoItem

    lista.appendChild(novoItem) //"lista" recebe o elemento novoItem completo 
}

function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade //encontra o elemento com determinado id e atualiza a informação da posição quantidade
}

function botaoDeleta(id) {
    const elementoBotao = document.createElement("button") //cria um elemento do tipo button dentro da const elementoBotao e armazena na const elementoBotao
    elementoBotao.innerText = "X" //adiciona ao elementoBotao o texto "x"

    elementoBotao.addEventListener("click", function() { //quando o elementoBotao for clicado, executa a função deletaElemento
        deletaElemento(this.parentNode, id) //passa como parâmetro o elemento que está sendo clicado e o id e remove o elemento
        //parentNode: retorna o nó (node) parente de um Node referenciado na árvore DOM. 
    })

    return elementoBotao
}

function deletaElemento(tag, id) { //recebe a tag html
    tag.remove() //remove a tag informada como parâmetro

    itens.splice(itens.findIndex(elemento => elemento.id === id), 1) //remove o item na posição "id" do array itens
    //splice é utilizado para remover um item do array
    //findIndex procura um elemento dentro do array, no caso o elemento que possua o id informado

    localStorage.setItem("itens", JSON.stringify(itens))
    //acessa o localStorage, atualiza o array "itens" transformando o objeto itens em string JSON
}