import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas"; //importa a class ListaDe Notas
import FormularioCadastro from "./components/FormularioCadastro"; //importa a class FormularioCadastro
import "./assets/App.css"; //importa o estilo base
import './assets/index.css'; // importa o reset css

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas:[]
    }
  }

  criarNota(titulo, texto) {
    const novaNota = {titulo, texto} //coleta os dados da nota
    const novoArrayNotas = [...this.state.notas, novaNota] //insere a nota no array
    const novoEstado = { //cria um novo array de notas atualizado
      notas: novoArrayNotas
    }
    this.setState(novoEstado); //setState: atualiza o state com os dados de novoEstado
  }
  
  render() { // insere o conteúdo JSX no HTML tornando possível que esse template seja exibido no navegador.
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} /> 
        <ListaDeNotas notas = {this.state.notas} />
      </section> 
      //similar a new FormularioCadastro();
      //bind = associa o método a instancia 'this'
      //<FormularioCadastro criarNota={this.criarNota.bind(this)}/>: propriedade do react 
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
class se transforma em className
*/
/*
elementos React são objetos simples e utilizam menos recursos. 
*/
/*
O state do componente é similar as props, mas é privado e totalmente controlado pelo componente.
*/