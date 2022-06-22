//tudo que tem contato com contato com servidor (dados de db.json)
import axios from 'axios'; //biblioteca utilizada para fazer a conexão com a API

export const api = axios.create({ //abre a conexão com a API
    baseURL: 'http://localhost:5000'
})

export const busca = async(url, setDado) => { //busca genérica / async = dados assíncronos
    const resposta = await api.get(url) //pega dados da API com base na URL / await = espera a resposta da api
    setDado(resposta.data)
}