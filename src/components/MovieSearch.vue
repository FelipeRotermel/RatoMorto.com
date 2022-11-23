<script>
import _ from 'lodash';

import { mapStores, mapState, mapActions } from "pinia";
import { useMovieSearchStore } from "@/stores/moviesearch";

export default {
  data() {
    return {
      searchId: "",
    };
  },
  computed: {
    ...mapStores(useMovieSearchStore),
    ...mapState(useMovieSearchStore, ["movies"]),
  },
  methods: {
    ...mapActions(useMovieSearchStore, ["get_movies"]),
    getPoster(path) {
        return `https://image.tmdb.org/t/p/original/${path}`
    },
    atualiza: _.debounce(async (self, string) => {
        await self.get_movies(string)
    }, 1000)
  },
  watch: {
    searchId(newValue) {
        this.atualiza(this, newValue)
    },
  },
};
</script>

<template>
    <div class="container-fluid text-center">
        <form @submit.prevent="searchId">
            <div class="col-12 display-5 fw-bold">Pesquisa de Filme
              <input type="text" class="form-control text-center" placeholder="Tropa de Elite" aria-label="Tropa de Elite" aria-describedby="basic-addon1" v-model="searchId">
            </div>
        </form>
    </div>
  <div class="table d-flex justify-content-center">
    <th v-for="movie of movies" :key="movie.id">
      <router-link :to="`/filme/${movie.id}`">
        <div class="text-center">
          <a :href="movie.id">
            <img :src="getPoster(movie.poster_path)" alt="" />
            <p>{{ movie.title }}</p>
            <p class="text-muted fs-6">( {{ movie.release_date }} )</p>
          </a>
        </div>
      </router-link>
    </th>
  </div>
</template>

<style scoped>

a,p {
  text-decoration: none;
  color: black;
  font-size: 20px;
}

th {
  height: 550px;
  padding: 25px;
  transition: 0.25s;
}

input {
  margin-top: 20px;
}

img {
  height: 400px;
}

th:hover {
  transform: scale(0.95);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}

.container-fluid{
    margin-top: 5%;
}

.table {
  overflow: auto;
  white-space: nowrap;
  margin-top: 5%;
  margin-bottom: 150px;
}

::-webkit-scrollbar {
  width: 10px;
}
    
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
    
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
  transition: 0.25s;
}

::-webkit-scrollbar-thumb:hover {
  background: #ffd34f;
}
  
</style>