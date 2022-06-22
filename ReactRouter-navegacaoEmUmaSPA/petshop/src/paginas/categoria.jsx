import React, { useState, useEffect } from 'react';
import ListaCategorias from '../components/ListaCategorias';
import ListaPost from '../components/ListaPost';
import '../assets/css/blog.css';
import {
  useParams,
  Route,
  useRouteMatch,
  Link,
  Switch,
} from 'react-router-dom';
import { busca } from '../api/api';
import SubCategoria from '../paginas/SubCategoria';

const Categoria = () => {
  const { id } = useParams(); //informa a rota atual
  const { url, path } = useRouteMatch(); //mostra o path atual
  const [subcategorias, setSubCategorias] = useState([]);

  useEffect(() => {
    busca(`/categorias/${id}`, (categoria) => {
      setSubCategorias(categoria.subcategorias);
    });
  }, [id]); //atualiza sempre que o ID for alterado

  return (
    <>
      <div className='container'>
        <h2 className='titulo-pagina'>Pet Notícias</h2>
      </div>
      <ListaCategorias /> {/*renderiza os dois botões*/}
      <ul className='lista-categorias container flex'>
        {subcategorias.map((subcategoria) => (
          <li
            className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
            key={subcategoria}
          >
            <Link to={`${url}/${subcategoria}`}>{subcategoria}</Link>
          </li>
        ))}
      </ul>
      <Switch>
        <Route exact path={`${path}/`}>
          {/*renderiza os posts conforme a rota*/}
          <ListaPost url={`/posts?categoria=${id}`} />
        </Route>
        <Route path={`${path}/:subcategoria`}>
          <SubCategoria />
        </Route>
      </Switch>
    </>
  );
};

export default Categoria;
