import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import GetGenresApi from '@/api/getgenres'
const getgenresApi = new GetGenresApi()

export const useGenresStore = defineStore('getgenre', () => {
  const genres = ref([])
  async function get_genres(id) {
    genres.value = await getgenresApi.getGenresById(id)
  }
  return { genres , get_genres }
})