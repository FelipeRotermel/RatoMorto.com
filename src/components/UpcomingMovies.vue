<script>
    import { mapStores, mapState, mapActions} from 'pinia'
    import { useMovieStore } from '@/stores/upcomingmovies'
    
    export default {
      data() {
        return {
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
        ...mapActions(useMovieStore, ['get_movies']),
        getPoster(path) {
        return `https://image.tmdb.org/t/p/original/${path}`
        },
      },
    };
</script>

<template>
        <th v-for="upcomingmovie of movies" :key="upcomingmovie.id">
          <router-link :to="`/filme/${upcomingmovie.id}`">
            <div class="text-center">
                <a :href="upcomingmovie.id">
                  <img :src="getPoster(upcomingmovie.poster_path)" alt="">
                  <p>{{ upcomingmovie.title }}</p>
                  <p class="text-muted fs-6">( {{ upcomingmovie.release_date}} )</p>
                </a>
            </div>
          </router-link>
        </th>
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