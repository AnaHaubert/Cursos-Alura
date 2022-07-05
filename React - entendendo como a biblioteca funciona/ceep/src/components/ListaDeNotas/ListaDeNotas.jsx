import React, { Component } from "react";
import CardNota from "../CardNota"; //acessa a pasta do componente CardNota, acessa o index.js e importa a class CardNota
import "./estilo.css"; //importa a estilização

class ListaDeNotas extends Component { //classe ListaDeNotas extende um componente
  render() { // insere o conteúdo JSX no HTML tornando possível que esse template seja exibido no navegador.
    return ( //retorna o conteúdo JSX (HTML +JS)
      <ul className="lista-notas"> {/*Encapsular o conteudo em um único elemento pai para ser renderizado */}
        {this.props.notas.map((nota, index) => { //dentro de jsx tudo que estiver entre {} é código javascript / o método map percorre o array notas, para cada nota ele executa a função return () desenhando a lista com titulo e texto conforme informado nos inputs. O index é passado como parâmetro, para ser utilizado como a propriedade key da <li>
          return ( 
            <li className="lista-notas_item" key={index}>  {/*sempre que o método map é utilizado, é necessário incluir a propriedade key, neste caso, o index está sendo usado como chave/identificador*/}
              <CardNota titulo={nota.titulo} texto={nota.texto}/> {/*cria o card de nota com as props titulo e texto com os dados coletados nos inputs titulo e texto de cada nota do array notas de App.js*/}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
