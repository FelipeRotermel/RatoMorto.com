<script>
  import { mapStores, mapState, mapActions } from "pinia";
  import { useMovieStore } from "@/stores/getmovies";

  export default {
    data() {
      return {
        urlfilme: "https://image.tmdb.org/t/p/original",
        // filme: {},
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
        <div class="col-md-3">
          <img
           :src="urlfilme + movie.poster_path"
            class="img-fluid rounded-start"
            style="max-width: 1000px"
            alt="..."
          />
        </div>

        {{ filme }}
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">{{movie.overview}}</p>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: auto"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                Nota: {{ movie.vote_average }}
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
     width: 400px;
     height: 500px;
  }
</style>
