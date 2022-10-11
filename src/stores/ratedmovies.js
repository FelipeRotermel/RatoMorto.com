import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import RatedMoviesApi from '@/api/ratedmovies'
const ratedmoviesApi = new RatedMoviesApi()

export const useRatedMovieStore = defineStore('ratedmovie', () => {
    const movies = ref([])
    async function get_movies() {
      movies.value = await ratedmoviesApi.getRatedMovies()
  
    }
    return { movies , get_movies }
  })