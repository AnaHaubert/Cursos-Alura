import React, { Component } from 'react';
import './estilo.css'; //importa a estilização

class CardNota extends Component {
  render() { // insere o conteúdo JSX no HTML tornando possível que esse template seja exibido no navegador.
    return (//coleta os dados inseridos nos impurts de titulo e texto
      <section className='card-nota'> 
        <header className='card-nota_cabecalho'>
          <h3 className='card-nota_titulo'>{this.props.titulo}</h3>
        </header>
        <p className='card-nota_texto'>{this.props.texto}</p>
      </section> //this.props.titulo/texto: recebe o valor das props titulo ou texto
    );
  }
}

export default CardNota;
