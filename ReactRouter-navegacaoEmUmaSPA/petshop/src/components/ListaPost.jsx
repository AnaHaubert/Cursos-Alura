import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { busca } from '../api/api'

const ListaPost = ( { url } ) => {
    const [posts, setPosts] = useState([]);
    //posts = estado inicial / setPosts = função que altera o estado incial / [] é o estado inicial da aplicação

    useEffect(() => { //para não entrar em recursão utilizamos o hook useEffect
        busca(url, setPosts); //chama a api
    }, [url])//o estado da aplicação será atualizado, quando a url for atualizada
  
    return(
        <section className='posts container'>
            { //.map = iteração sobre os posts: para cada post será montado um card
                posts.map((post) => ( //() significa um retorno implícito, em caso do uso de {}, precisa deixar explícito o retorno
                    <Link className={`cartao-post cartao-post--${post.categoria}`} to={`/posts/${post.id}`}> {/* to = leva para o post informado na api conforme id*/}
                        <article key={post.id}> {/* identifica cada post pela id informada na api */}
                            <h3 className='cartao-post__titulo'>
                                {post.title} {/* titulo do post informado na api conforme title*/}
                            </h3>
                            <p className='cartao-post__meta'>
                                {post.metadescription} {/* descrição do post informado na api conforme metadescription*/}
                            </p>
                        </article>
                    </Link>

                ))
            }
        </section>
    )
}

export default ListaPost;