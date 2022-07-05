import React, { Component } from 'react';
import './estilo.css'; //importa a estilização

class CardNota extends Component { //classe CardNota extende um componente
  render() { // insere o conteúdo JSX no HTML tornando possível que esse template seja exibido no navegador. / cria o card de nota dinâmicamente
    return ( //retorna o conteúdo JSX (HTML +JS)
      <section className='card-nota'> {/*Encapsular o conteudo em um único elemento pai para ser renderizado / Utilizar a palavra reservada className para estilizar, para diferenciar da class utilizada para criar componente. */}
        <header className='card-nota_cabecalho'>
          <h3 className='card-nota_titulo'>{this.props.titulo}</h3> {/*recebe o valor de titulo passado como propriedade na declaração de <CardNota> em ListaDeNotas*/}
        </header>
        <p className='card-nota_texto'>{this.props.texto}</p> {/*recebe o valor de texto passado como propriedade na declaração de <CardNota> em ListaDeNotas*/}
      </section> 
    );
  }
}

export default CardNota;
