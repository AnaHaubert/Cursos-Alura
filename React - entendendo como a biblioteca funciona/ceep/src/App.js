import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas"; //quando é feito  'export default' no arquivo do componente não precisa usar {} para importar / acessa a pasta do componente ListaDeNotas, acessa o index.js e importa a class ListaDeNotas
import FormularioCadastro from "./components/FormularioCadastro"; //acessa a pasta do componente FormularioCadastro, acessa o index.js e importa a class FormularioCadastro
import './assets/index.css'; // importa o reset css
import "./assets/App.css"; //importa o estilo base


class App extends Component { //classe App extende um componente
  constructor() {
    super();
    this.state = { //state: propriedade gerenciada pelo React. toda vez que ela é atualizada, o react chama o método render() do componente que teve seu estado atualizado. Para alterar o estado, utiliza-se o acessor setState. O state é sempre iniciado como um objeto
      notas:[]
    }
  }

  criarNota(titulo, texto) { //método público
    const novaNota = {titulo, texto} //coleta os dados da nota inseridos em titulo e texto passados como parâmetro
    const novoArrayNotas = [...this.state.notas, novaNota] //cria um novo array, onde estão incluídas as notas já existente, armazenadas no this.state.notas e a novaNota utilizando o spread operator
    const novoEstado = { //cria um novo objeto onde é atualizada a propriedade notas, atribuindo a ela o valor da const novoArrayNotas
      notas: novoArrayNotas
    }
    this.setState(novoEstado); //setState: acessor que atualiza o state com os dados informados como objeto em novoEstado
  }
  
  render() { //insere o conteúdo JSX no HTML tornando possível que esse template seja exibido no navegador.
    return ( //retorna o conteúdo JSX (HTML +JS)
      <section className="conteudo"> {/*Encapsular o conteudo em um único elemento pai para ser renderizado */}
        {/*inserir qualquer expressão JavaScript válida dentro das chaves em JSX / Declara os componentes como tag html*/}
        <FormularioCadastro criarNota={this.criarNota.bind(this)} /> {/* criarNota: propriedade do React. 
        props são como argumentos de função em JavaScript e atributos em HTML. Para enviar props para um componente, utiliza-se a mesma sintaxe dos atributos HTML / neste caso criarNota recebe a função criarNota, associada a instancia this*/}
        <ListaDeNotas notas = {this.state.notas} /> {/*notas: propriedade do React / neste caso notas recebe a função criarNota, associada a instancia this  */} 
      </section> 
    );
  }
}

export default App;

/*
npm - gerenciador de pacotes (instalar, remover e atualizar pacotes, que ficam salvos no package.json)
npx - executa pacotes de Node.js, que vão resultar em algo
*/
/* 
JSX e é uma extensão de sintaxe para JavaScript, que produz “elementos” do React.
elementos React são objetos simples e utilizam menos recursos. 
*/
/* 
State: Serve para guardar valores/estados que podem vir a mudar com a interação do usuário com o componente, tendo efeito na renderização do mesmo, o state pode ser passado como props!

Props: Valores para a configuração de um componente, essas props são passadas pelo elemento acima (que utiliza o componente que irá receber) e são imutáveis, utilizado para a comunicação de componentes.
*/