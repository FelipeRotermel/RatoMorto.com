<script>
  import { mapStores, mapState, mapActions} from 'pinia'
  import { useGenreStore} from '@/stores/genres'
  
  export default {
    data() {
      return {};
    },
    async created() {
      await this.get_genres()
    },
    computed: {
      ...mapStores(useGenreStore),
      ...mapState(useGenreStore, ['genres'])
    },
    methods: {
      ...mapActions(useGenreStore, ['get_genres'])
    },
  };
</script>

<template>
    <label class="d-flex text-center" for="flexCheckIndeterminate" id="input">
      <img src="https://cdn-icons-png.flaticon.com/512/814/814191.png" width="50" alt="">
      <h4>Categorias</h4>
    </label>
    <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
    <div class="sidebar">
    <div class="d-flex flex-column flex-shrink-0 p-3 text-black" id="sidebar" style="width: 280px;">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-black text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
    </a>
    <hr>
      <ul class="nav nav-pills flex-column mb-auto">
        <li v-for="genre of genres" :key="genre.id">
          <a :href="genre.id" class="nav-link text-black">
            <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>
            {{ genre.name }}
          </a>
        </li>
      </ul>
    <hr>
  </div>
</div>
</template>

<style scoped>

    #input {
        position: fixed;
        margin-left: 10px;
        z-index: 2;
        margin-top: 60px;
    }

    #input h4 {
      margin-top: 10px;
      margin-left: 10px;
    }

    input:checked + .sidebar {
        display: contents;
    }

    .sidebar {
        display: none;
    }
    
    #sidebar {
        z-index: 1;
        position: fixed;
        height: 95vh;
        margin-top: 53px;
        background-color: #fcf5de;
    }

    .nav-link {
      transition: 0.25s;
    }

    .nav-link:hover{
      transform: scale(1.1);
    }

</style>