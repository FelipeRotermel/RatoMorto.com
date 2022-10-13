<script>
    import PopularMovies from "@/components/PopularMovies.vue";
    import RatedMovies from "@/components/RatedMovies.vue";
    import UpcomingMovies from "@/components/UpcomingMovies.vue";

    export default {
        components: { PopularMovies, RatedMovies, UpcomingMovies }
    }
</script>

<template>
    <div class="container-fluid"> 
        <h3 class="display-4">Filmes em alta</h3>
        <div class="table text-center">
            <tbody>
                <tr>
                    <PopularMovies/>
                </tr>
            </tbody>
        </div>
        <h3 class="display-4">Mais avaliados</h3>
        <div class="table text-center">
            <tbody>
                <tr>
                    <RatedMovies/>
                </tr>
            </tbody>
        </div>
        <h3 class="display-4">Mais recentes</h3>
        <div class="table text-center">
            <tbody>
                <tr>
                    <UpcomingMovies/>
                </tr>
            </tbody>
        </div>
    </div>  
</template>

<style scoped>
    .container-fluid {
        margin-bottom: 120px;
    }
    h3 {
        margin: 20px;
    }

    .table {
        overflow: auto;
        white-space: nowrap;
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