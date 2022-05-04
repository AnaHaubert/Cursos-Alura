import React, { Component } from "react";
import "./estilo.css";
import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg" //cria o ReactComponent para inserir a imagem

class CardNota extends Component {

  apagar() { //utiliza a props índice para informar qual nota deve ser apagada
    const indice = this.props.indice;
    this.props.apagarNota(indice);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <DeleteSVG onClick={this.apagar.bind(this)}/>
          <h4>{this.props.categoria}</h4>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;

//a imagem em svg pode ser carregado através de uma tag <img>, incluindo a tag <svg> do arquivo/imagem ou criando um ReactComponent, importando o documento da pasta (para isso, o nome do componente deve ser iniciado com letra maiuscula)