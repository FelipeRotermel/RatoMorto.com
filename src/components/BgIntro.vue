<script>
    import { mapStores, mapState, mapActions} from 'pinia'
    import { useMovieStore } from '@/stores/popularmovies'
    
    export default {
      data() {
        return {
            urlfilme: "https://image.tmdb.org/t/p/original"
        };
      },
      async created() {
        await this.get_movies()
      },
      computed: {
        ...mapStores(useMovieStore),
        ...mapState(useMovieStore, ['movies'])
      },
      methods: {
        ...mapActions(useMovieStore, ['get_movies'])
      },
    };
</script>

<template>
  <div id="carouselExampleInterval" class="carousel slide carousel-fade" data-bs-ride="carousel">
    <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://img.freepik.com/vetores-premium/rato-fofo-comendo-pipoca-e-assistindo-filme-em-3d_290315-1761.jpg?w=2000" class="d-block w-100" alt="">
      <div class="carousel-caption d-none d-md-block">
        <h1 class="display-1 fw-bold text-center">Bem vindo ao site</h1>
      </div>
    </div>
    <div class="carousel-item" v-for="popularmovie of movies" :key="popularmovie.id">
      <img :src="urlfilme + popularmovie.backdrop_path" class="d-block w-100" alt="">
      <div class="carousel-caption d-none d-md-block text-start">
        <h1 class="display-1 fw-bold">{{ popularmovie.title }}</h1>
        <p>{{ popularmovie.overview}}</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<style scoped>

  img {
    height: 900px;
    filter: brightness(50%);
  }

  .text-center {
    margin-bottom: 350px;
  }
  
</style>