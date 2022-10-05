import axios from 'axios';
export default class GenresApi {
    async getAllGenres() {
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=ac7de9d59c52a09bf0b3c0f69100a5f4&language=pt-br`)
        return data.genres
    }
}
