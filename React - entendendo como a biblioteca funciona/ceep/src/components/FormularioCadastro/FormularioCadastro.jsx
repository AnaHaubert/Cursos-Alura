import React, { Component } from "react";
import "./estilo.css"; //importa a estilização

class FormularioCadastro extends Component {
  constructor(props) { //contrutor do formulário 
    super(props);
    this.titulo = '';
    this.texto = ''; //this = refere-se a instância
  }
  
  _handleMudancaTitulo(evento) { //handle = manipulador de evento. determina qual ação deve ser tomada
    evento.stopPropagation()
    this.titulo = evento.target.value; //atribui o valor inserido no campo 'titulo' ao atributo 'titulo'
  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation() //Impede a propagação do evento por seus listeners.
    this.texto = evento.target.value; //atribui o valor inserido no campo 'texto' ao atributo 'titulo'
  }

  _criarNota(evento) {
    evento.preventDefault(); //previne o comportamento padrão de recarregar a página
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto); //acessa as propriedades
  }
  
  render() { // insere o conteúdo JSX no HTML tornando possível que esse template seja exibido no navegador.
    return (
      <form className="form-cadastro"
        onSubmit={this._criarNota.bind(this)}
      >
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)} 
          /*onChange: muda o valor do elemento 
          toda vez que o valor do input mudar, o método hadleMudancaTitulo deve ser executado
          bind: associa o método a instancia 'this'
          (js dentro de {})
          */
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)} //bind: associa o método a instancia 'this'
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