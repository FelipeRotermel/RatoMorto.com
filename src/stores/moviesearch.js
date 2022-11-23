import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import MovieSearchApi from '@/api/moviesearch'
const moviesearchApi = new MovieSearchApi()

export const useMovieSearchStore = defineStore('movieSearch', () => {
  const movies = ref([])
  async function get_movies(id) {
    movies.value = await moviesearchApi.getMovieSearchById(id)
  }
  return { movies , get_movies }
})