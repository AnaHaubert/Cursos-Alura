import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { busca } from '../api/api';
import '../assets/css/blog.css';

const ListaCategorias = () => {
    const [categorias, setCategorias] = useState([]);//estado inicial da aplicação = array vazio
    
    useEffect(() => { //busca na API para renderizar o componente
        busca(`/categorias`, setCategorias) //setCategorias atualiza o estado da aplicação
    }, [])

    return (
        <ul className='lista-categorias container flex'>
            { //javascript dentro de jsx deve estar entre {}
                categorias.map((categoria) => ( //mapeia as categorias para exibir na tela
                    <Link to={`/categoria/${categoria.id}`}>{/*colocar / no inicio para navegar até o caminho. caso não tenha barra, o caminho informado será adicionado no caminho atual */}
                        <li className={`lista-categorias__categoria lista-categorias__categoria--${categoria.id}`}>
                            {categoria.nome}
                        </li> {/*constrói o botão da categoria*/}
                    </Link>
                ))
            }

        </ul>
    );
}

export default ListaCategorias;