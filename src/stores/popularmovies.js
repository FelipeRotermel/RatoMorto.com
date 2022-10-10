import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import PopularMoviesApi from '@/api/popularmovies'
const popularmoviesApi = new PopularMoviesApi()

export const usePopularMovieStore = defineStore('movie', () => {
    const movies = ref([])
    async function get_movies() {
      movies.value = await popularmoviesApi.getPopularMovies()
  
    }
    return { movies , get_movies }
  })