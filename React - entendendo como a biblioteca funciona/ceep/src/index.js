import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render( //desenha na tela
  <React.StrictMode> {/*sinalizar potenciais problemas em uma aplicação. Ativa verificações e avisos adicionais para os descendentes.*/}
    <App /> {/*desenha o componente App através do arquivo importado App.js*/}
  </React.StrictMode>,
  document.getElementById('root') {/*O React usa a div="root" no arquivo index.js, inserindo os elementos declarados em JSX do arquivo App.js. Ele faz isso através do método interno do ReactDOM chamado render() (que também utiliza JSX ao passar <App /> como parâmetro). */}
);

/*
Depois da compilação, as expressões em JSX se transformam em chamadas normais de funções que retornam objetos JavaScript. É possível usar JSX dentro de condições if e laços for, atribuí-lo a variáveis, aceitá-lo como argumentos e retorná-los de funções.
*/
