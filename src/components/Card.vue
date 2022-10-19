<script>
    import { mapStores, mapState, mapActions} from 'pinia'
    import { useMovieStore } from '@/stores/getmovies'

    export default {
      data(){
        return {
            urlfilme: "https://image.tmdb.org/t/p/original"
        };
      },
      props: ['filmeId'],
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
    }

</script>

<template>
<div class="container-fluid">
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="https://www.gamespot.com/a/uploads/scale_medium/mig/2/5/1/8/2212518-box_crashb.png" class="img-fluid rounded-start" style="max-width: 1000px" alt="...">
        </div>
        {{ filmeId }}
        <div class="col-md-8">
          <div class="card-body" v-for="movie in movies">
            <h5 class="card-title">BEM-10 A lenda de Aang 2,5</h5>
            <p class="card-text">{{ movie.title }}</p>
            <div class="progress">
              <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Nota: 100</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<style scoped>

.container-fluid {
  margin-top:100px ;
}

.progress{
  margin-top: 145px;
}

</style>