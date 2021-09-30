import axios from 'axios';

// URL FILMES EM CARTAZ
// https://api.themoviedb.org/3/
// movie/now_playing?&language=pt-BR&page=1

//api_key=28fc232cc001c31e8a031f419d0a14ca

export const key = '97a60bcf690e4981903ac7fd9889c81a'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;