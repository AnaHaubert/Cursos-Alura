import React, { Component } from 'react';
import './estilo.css';

class ListaDeCategorias extends Component {
  constructor() {
    super();
    this.state = {categorias:[]}
    this._novasCategorias = this._novasCategorias.bind(this);
  }  
  
  componentDidMount() {
      this.props.categorias.inscrever(this._novasCategorias);
  }  

  componentWillUnmount() {
    this.props.categorias.desinscrever(this._novasCategorias);
  }  

    _novasCategorias(categorias) {
      this.setState({...this.state, categorias})
    }

    _handleEventoInput(evento) {
        if(evento.key === 'Enter') {
            let valorCategoria = evento.target.value //valor inserido no campo de texto do evento
            this.props.adicionarCategoria(valorCategoria);
        }
    }
  
    render() {
    return (
      <section className='lista-categorias'>
        <ul className='lista-categorias_lista'>
            {this.props.categorias.categorias.map((categoria, index) => {
                return <li key={index} className='lista-categorias_item'>{categoria}</li>
            })}
        </ul>
        <input
          type='text'
          className='lista-categorias_input'
          placeholder='Adicionar Categoria'
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
