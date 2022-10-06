<script>
    import { mapStores, mapState, mapActions} from 'pinia'
    import { useMovieStore} from '@/stores/movies'
    
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
      <img src="https://image.tmdb.org/t/p/original/xMMrBziwJqrgjerqpNeQvwuwiUp.jpg" class="d-block w-100" alt="">
      <div class="carousel-caption d-none d-md-block">
        <h1 class="display-1 fw-bold">Top Gun: Maverick</h1>
        <p>Depois de mais de 30 anos de serviço como um dos principais aviadores da Marinha, Pete \"Maverick\" Mitchell está de volta, rompendo os limites como um piloto de testes corajoso. No mundo contemporâneo das guerras tecnológicas, Maverick enfrenta drones e prova que o fator humano ainda é essencial.</p>
      </div>
    </div>
    <div class="carousel-item" v-for="movie of movies" :key="movie.id">
      <img :src="urlfilme + movie.backdrop_path" class="d-block w-100" alt="">
      <div class="carousel-caption d-none d-md-block text-start">
        <h1 class="display-1 fw-bold">{{ movie.title }}</h1>
        <p>{{ movie.overview}}</p>
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
    height: 800px;
    filter: brightness(50%);
  }

</style>