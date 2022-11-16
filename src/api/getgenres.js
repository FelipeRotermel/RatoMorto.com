import axios from 'axios';
export default class GetGenresApi {
    async getGenresById(id) {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=ac7de9d59c52a09bf0b3c0f69100a5f4&with_genres=${id}&language=pt-BR`)
        return data
    }
}