import React from 'react';
import { useParams } from 'react-router-dom';
import ListaPost from '../components/ListaPost';

const SubCategoria = () => {
const { subcategoria } = useParams();

    return (
        <ListaPost url={`/posts?subcategoria=${subcategoria}`}/>//acessa a subcategoria do post 
    )
}

export default SubCategoria;