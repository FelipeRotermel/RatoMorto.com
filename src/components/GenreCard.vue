<script>
import { mapStores, mapState, mapActions } from "pinia";
import { useGenresStore } from "@/stores/getgenres";

export default {
  data() {
    return {
      urlfilme: "https://image.tmdb.org/t/p/original",
    };
  },
  props: ["genreId"],
  async created() {
    await this.get_genres(this.genreId);
  },
  computed: {
    ...mapStores(useGenresStore),
    ...mapState(useGenresStore, ["genres"]),
  },
  methods: {
    ...mapActions(useGenresStore, ["get_genres"]),
  },
  watch: {
    async genreId() {
      await this.get_genres(this.genreId);
    },
  },
};
</script>

<template>
  <div class="table text-center">
    <th v-for="genre of genres" :key="genre.id">
      <router-link :to="`/filme/${genre.id}`">
        <div class="text-center">
          <a :href="genre.id">
            <img :src="urlfilme + genre.poster_path" alt="" />
            <p>{{ genre.title }}</p>
            <p class="text-muted fs-6">( {{ genre.release_date }} )</p>
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

img {
  height: 400px;
}

th:hover {
  transform: scale(0.95);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
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
