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
    <router-link to="/card1">
        <th v-for="movie of movies" :key="movie.id">
            <div class="col-10 text-center">
                <a :href="movie.id">
                  <img :src="urlfilme + movie.poster_path" alt="">
                  {{ movie.title }}
                </a>
            </div>
        </th>
    </router-link>
</template>

<style scoped>

    a , p{
        text-decoration: none;
        color: black;
        font-size: 20px;
    }

    th {
        max-width: 400px;
        width: 400px;
        height: 500px;
    }

    img {
        height: 400px;
    }

    .card {
        transition: 0.25s;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }

    .card:hover { 
        transform: scale(1.05);
        color: black;
    }
</style>