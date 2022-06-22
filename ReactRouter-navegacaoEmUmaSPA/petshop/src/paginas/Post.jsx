//para renderizar o componente quando a rota referente a cada post for acessada

import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { busca } from '../api/api';
import '../assets/css/post.css'

const Post = () => {
    let history = useHistory() //da acesso e permite tranformar o histórico de naveação
    const { id } = useParams(); //associa o ID do post com o ID da URL

    const[post, setPost] = useState({}); //{} estado inicial da aplicação (objeto vazio - os posts são objetos)

    useEffect(() => { //para fazer a requisição (get) na API
        busca(`/posts/${id}`, setPost)//setPost atualiza os dados da aplicação
        .catch(() => { //caso o ID seja inválido
            history.push('/404') //coloca na frente do post inválido a rota 404, dessa forma conseguimos navegar até a rota indicada
        }) 
    }, [id])//o estado da aplicação será atualizado, quando o id for atualizado

    return(
        <main className='container flex flex--centro'>
            <article className='cartao post'>
                <h2 className='cartao__titulo'>
                    {post.title} {/*titulo do post na api*/}
                </h2>
                <p className='cartao__texto'>
                    {post.body} {/*texto do post na api*/}
                </p>
            </article>
        </main>
    )
}

export default Post;