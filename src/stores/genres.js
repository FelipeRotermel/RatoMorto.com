import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import GenresApi from '@/api/genres'
const genresApi = new GenresApi()

export const useGenreStore = defineStore('genre', () => {
  const genres = ref([])
  async function get_genres() {
    genres.value = await genresApi.getAllGenres()

  }
  return { genres , get_genres }
})