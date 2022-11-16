import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import GetGenresApi from '@/api/getgenres'
const getgenresApi = new GetGenresApi()

export const useGenresStore = defineStore('getgenre', () => {
  const genre = ref([])
  async function get_genres(id) {
    genre.value = await getgenresApi.getGenreById(id)
  }
  return { genre , get_genres }
})