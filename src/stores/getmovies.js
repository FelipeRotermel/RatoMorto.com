import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import GetMoviesApi from '@/api/getmovies'
const getmoviesApi = new GetMoviesApi()

export const useMovieStore = defineStore('getmovie', () => {
  const movie = ref([])
  async function get_movies(id) {
    console.log('oioioioi')
    movie.value = await getmoviesApi.getMovieById(id)
  }
  return { movie , get_movies }
})