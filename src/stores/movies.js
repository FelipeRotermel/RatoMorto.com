import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import MoviesApi from '@/api/movies'
const moviesApi = new MoviesApi()

export const useMovieStore = defineStore('movie', () => {
    const movies = ref([])
    async function get_movies() {
      movies.value = await moviesApi.getAllMovies()
  
    }
    return { movies , get_movies }
  })