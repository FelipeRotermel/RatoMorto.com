import axios from "axios";
export default class PopularMoviesApi {
    async getPopularMovies() {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=ac7de9d59c52a09bf0b3c0f69100a5f4&language=pt-BR&page=1`)
        return data.results
    }
}