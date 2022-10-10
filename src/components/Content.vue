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
            <div class="text-center">
                <a :href="movie.id">
                  <img :src="urlfilme + movie.poster_path" alt="">
                  <p>{{ movie.title }}</p>
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
        height: 550px;
        padding: 25px;
        transition: 0.25s;
    }

    img {
        height: 400px;
    }

    th:hover { 
        transform: scale(0.95);
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
</style>