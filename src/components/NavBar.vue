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
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container-fluid">
      <router-link to="/rat" class="navbar-brand" ><strong>RatoMorto.com</strong></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item dropdown">
            <label for="CheckIndeterminate">
            <a class="nav-link active dropdown-toggle">Gêneros</a>
            </label>
            <input class="form-check-input" id="CheckIndeterminate" type="checkbox">
            <div id="dropdown">
              <ul class="dropdown-menu d-flex flex-wrap justify-content-between" aria-labelledby="navbarDropdown">
                <li v-for="genre of genres" :key="genre.id">
                  <router-link :to="`/genero/${genre.id}`">
                  <a class="dropdown-item" :href="genre.id">{{ genre.name}}</a>
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <router-link to="/MovieSearch" class="nav-link active" aria-current="page">Pesquisa</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link active" aria-current="page">Login</router-link>
          </li>
        </ul>
        <div class="user">
          <router-link  to="/profile" class="d-flex align-items-center text-black text-decoration-none" aria-expanded="false">
            <img src="https://avatars.githubusercontent.com/u/106554495?v=4" alt="" width="32" height="32" class="rounded-circle me-2">
            <strong>User</strong>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  .navbar {
    background-color: transparent;
    transition: background-color 0.1s linear;
    height: 45px;
  }

  .navbar.solid {
  background-color: #f7eccb;
  transition: background-color 0.7s ease 0s;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  }

  a, .navbar-brand{
    transition: 0.25s;
  }

  a:hover {
   transform: scale(1.1);
  }

  .navbar-brand, .navbar-brand:hover {
    color: #ffd34f;
  }

  .user {
    margin-right: 20px;
  }

  .form-check-input {
    display: none;
  }

  #dropdown{
    display: none;
  }

  input:checked + #dropdown {
    display: contents;
  }

  label {
    height: 0;
  }

  .dropdown-menu {
    width: 400px;
  }

  .dropdown-item {
    width: 150px;
  }

  .text-small {
    width: 50px;
  }

</style>