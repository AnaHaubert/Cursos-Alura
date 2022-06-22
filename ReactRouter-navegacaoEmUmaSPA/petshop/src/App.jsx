import React from 'react';
import './assets/css/base/base.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' // 'as' nomeia o 'BrowserRouter' de 'Router' //O pacote react-router-dom contém ligações para usar o React Router em aplicações web

import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import Pagina404 from './paginas/Pagina404';
import Cabecalho from './components/Cabecalho';
import Post from './paginas/Post'
import Categoria from './paginas/categoria';

function App() {

  return (
  <>
    <Router>{/*Indica p/ a app que será trabalhado com sistema de rota*/}
      <Cabecalho /> {/* Para o componente cabecalho aparecer em todas as paginas renderizadas, colocar o elemento antes do Switch */}
      <Switch>{/* Switch = evita que o react continue procurando entre as rotas um caminho já encontrado*/}
        <Route exact path='/'> {/* Route = Envelopa e indica que cada componente é uma rota / path = caminho / exact = especifica e limita a expressão, para que o conteúdo não aparece duplicado em outro caminho que contenha '/' */}
          <Home />
        </Route>
        <Route path='/sobre'>
          <Sobre />
        </Route>
        <Route path='/categoria/:id'>{/* rota dinâmica */}
          <Categoria />
        </Route>
        <Route path='/posts/:id'>
          <Post />
        </Route>
        <Route>{/* Route sem o path cria uma rota padrão sem especificar o caminho. Neste caso, renderiza a página de erro*/}
          <Pagina404 />
        </Route>
      </Switch>
      
      
    </Router>
  </>
  )
}

export default App;

//Uma single page application faz apenas uma requisição para o servidor, que devolve um arquivo html, quem fica responsável por exibir o conteúdo são os componentes javascript. 
//Uma aplicação tradicional faz uma requisição e recebe de volta o arquivo html que diz respeito aquela requisição.
