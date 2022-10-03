<script>
  import axios from "axios";

  export default {
    data() {
      return {
        genres: [
          {id: 12,
          name: "bolas"
        }
        ],
      };
    },
    methods: {
      async buscar() {
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=ac7de9d59c52a09bf0b3c0f69100a5f4&language=pt-br`)
        this.genres = data
      },
    },
  };
</script>

<template>
    <label for="flexCheckIndeterminate" id="input"><img src="https://cdn-icons-png.flaticon.com/512/814/814191.png" width="40px" alt=""></label>
    <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
    <div class="sidebar">
    <div class="d-flex flex-column flex-shrink-0 p-3 text-black" id="sidebar" style="width: 280px;">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-black text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
      <button type="button" class="btn btn-primary active" data-bs-toggle="button" autocomplete="off" aria-pressed="true">Categorias</button>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li v-for="genre of genres" :key="genre.id">
        <a href="#" class="nav-link text-black">
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
        padding: 15px;
        z-index: 2;
        margin-top: 54px;
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