import React, { Component } from "react";
import "./estilo.css"; //importa a estilização

class FormularioCadastro extends Component { //classe FormularioCadastro extende um componente
  constructor(props) { //contrutor do formulário: declara os atributos da classe FormularioCadastro
    super(props);//declara o super, pois a classe extende de Component (declara super do componente pai)
    this.titulo = ''; //cada instancia inicia vazio, e recebe o valor digitado no input titulo
    this.texto = ''; //cada instancia inicia vazio, e recebe o valor digitado no input texto
  }

  //criar métodos da classe fora do render
  _handleMudancaTitulo(evento) { //handle = função manipulador de evento. determina qual ação deve ser tomada, no caso, mudança de titulo / _ : método privado, só pode ser chamado dentro da classe
    evento.stopPropagation()
    this.titulo = evento.target.value; //atribui o valor inserido no campo 'titulo' ao atributo 'this.titulo'
  }

  _handleMudancaTexto(evento) { //handle = função manipulador de evento. determina qual ação deve ser tomada, no caso, mudança de texto  / _ : método privado, só pode ser chamado dentro da classe
    evento.stopPropagation() //Impede a propagação do evento por seus listeners.
    this.texto = evento.target.value; //atribui o valor inserido no campo 'texto' ao atributo 'this.texto'
  }

  _criarNota(evento) { // _ : método privado, só pode ser chamado dentro da classe
    evento.preventDefault(); //comportamento padrão: reload da página, preventDefaul previne o comportamento padrão
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto); //acessa a propriedade criarNota declarada em App.js passa this.titulo, this.texto como parâmetro para construção da nota. 
  }
  
  render() { // insere o conteúdo JSX no HTML tornando possível que esse template seja exibido no navegador.
    return ( //retorna o conteúdo JSX (HTML +JS)
      <form className="form-cadastro"
        onSubmit={this._criarNota.bind(this)} //evento onSubmit: cria a nota quando acionado / bind: faz a associação do método com o parâmetro informado, no caso 'this' que se refere a instância
      > {/*Encapsular o conteudo em um único elemento pai para ser renderizado */}
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)} 
          /*onChange: evento do HTML - muda o valor do elemento, quando disparado, chama uma função
          this. : refere-se a instancia que a função será chamada (a função vai pegar o conteúdo do input naquela instância)
          _handle (manipulador): toda vez que o valor do input mudar, o método hadleMudancaTitulo deve ser executado / colocar entre chaves para específicar como código javascript
          bind: faz a associação do método com o parâmetro informado, no caso 'this'
          (js dentro de {})
          */
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)} //bind: faz a associação do método com o parâmetro informado, no caso 'this' que se refere a instância
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;

/*
componentes são como funções JavaScript. Eles aceitam entradas arbitrárias (chamadas “props” que significa propriedades) e retornam elementos React que descrevem o que deve aparecer na tela.
existem elementos React que representam tags do DOM ex.: const element = <div />;
elementos também podem representar componentes definidos pelo usuário ex.: const element = <Welcome name="Sara" />;
*/
/*
State: Serve para guardar valores/estado que podem vir a mudar com a interação do usuário com o componente, tendo efeito na renderização do mesmo, o state pode ser passado como props!
Props: Valores para a configuração de um componente, essas props são passadas pelo elemento acima (que utiliza o componente que irá receber) e são imutáveis, utilizado para a comunicação de componentes.
*/