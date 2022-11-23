import axios from 'axios';
export default class MovieSearchApi {
    async getMovieSearchById(id) {
        const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ac7de9d59c52a09bf0b3c0f69100a5f4&language=pt-BR&query=${id}&page=1&include_adult=false`)
        return data.results
    }
}