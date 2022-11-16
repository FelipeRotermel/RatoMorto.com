<script>
import { mapStores, mapState, mapActions } from "pinia";
import { useMovieStore } from "@/stores/getmovies";

export default {
  data() {
    return {
      urlfilme: "https://image.tmdb.org/t/p/original",
    };
  },
  props: ["filmeId"],
  async created() {
    await this.get_movies(this.filmeId);
  },
  computed: {
    ...mapStores(useMovieStore),
    ...mapState(useMovieStore, ["movie"]),
  },
  methods: {
    ...mapActions(useMovieStore, ["get_movies"]),
  },
};
</script>

<template>
  <div class="container-fluid">
    <div class="card mb-3">
      <div class="row g-0">
        <img :src="urlfilme + movie.backdrop_path" class="d-block w-100" alt="">
        <div class="col-md-4">
          <img
            :src="urlfilme + movie.poster_path"
            class="img-fluid rounded-start"
            style="max-width: 1000px"
            alt="..."
          />
        </div>

        <div class="col-md-8">
          <div class="card-body">
            <div class="d-flex">
              <p class="card-title display-2"><strong>{{ movie.title }}</strong></p>
              <p class="fs-4 text-muted">( {{movie.release_date}} )</p>
            </div>
            <p class="text-muted">Tempo de filme: <strong>{{movie.runtime}} min</strong></p>
            <p class="card-text">{{ movie.overview }}</p>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                :style="{ width: movie.vote_average *10 + '%' }"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                Nota: {{ Math.round(movie.vote_average *10) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  margin-top: 100px;
}

.progress {
  margin-top: 145px;
}
img {
  height: 700px;
}

.fs-4 {
  margin-top: 25px; 
}

.d-block{
  position: absolute;
  opacity: 0.1;
  filter: brightness(50%);
}
</style>
