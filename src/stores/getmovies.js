import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import GetMoviesApi from '@/api/getmovies'
const getmoviesApi = new GetMoviesApi()

export const useMovieStore = defineStore('movie', () => {
  const movies = ref([])
  async function get_movies() {
  movies.value = await getmoviesApi.getAllMovies()

  }
  return { movies , get_movies }
})