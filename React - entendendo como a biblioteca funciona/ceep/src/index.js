import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/*
O React utiliza esse arquivo index.js para inserir todo o conteúdo JSX do App.js no index.html, tornando possível que esse template seja exibido no navegador.
Ele faz isso através do método interno do ReactDOM chamado render() (que também utiliza JSX ao passar < App /> como parâmetro).
Depois da compilação, as expressões em JSX se transformam em chamadas normais de funções que retornam objetos JavaScript. É possível usar JSX dentro de condições if e laços for, atribuí-lo a variáveis, aceitá-lo como argumentos e retorná-los de funções.
*/
