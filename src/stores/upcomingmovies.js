import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import MoviesApi from '@/api/upcomingmovies'
const moviesApi = new MoviesApi()

export const useMovieStore = defineStore('upcomingmovie', () => {
    const movies = ref([])
    async function get_movies() {
      movies.value = await moviesApi.getMovies()
  
    }
    return { movies , get_movies }
  })