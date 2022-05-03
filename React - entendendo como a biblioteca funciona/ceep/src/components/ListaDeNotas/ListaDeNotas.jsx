import React, { Component } from "react";
import CardNota from "../CardNota"; //importa a class CardNota
import "./estilo.css"; //importa a estilização

class ListaDeNotas extends Component {
  render() { // insere o conteúdo JSX no HTML tornando possível que esse template seja exibido no navegador.
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota, index) => { // map percorre o array notas
          return ( //cria a lista com os dados coletados de titulo e texto, utilizando o index como 'chave'
            <li className="lista-notas_item" key={index}>
              <CardNota titulo={nota.titulo} texto={nota.texto}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
