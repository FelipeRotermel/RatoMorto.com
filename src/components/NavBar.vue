<script></script>
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
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link active" aria-current="page">Login</router-link>
          </li>
        </ul>
        <div class="dropdown user">
          <a href="#" class="d-flex align-items-center text-black text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://avatars.githubusercontent.com/u/106554495?v=4" alt="" width="32" height="32" class="rounded-circle me-2">
            <strong>User</strong>
          </a>
          <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
            <li><router-link to="/profile" class="dropdown-item">Perfil</router-link></li>
            <li><a class="dropdown-item" href="#">Configurações</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Sair</a></li>
          </ul>
        </div>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Procurar" aria-label="Search">
          <button class="btn btn-outline-dark" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  .navbar {
    background-color: #f7eccb;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  }

  a, .navbar-brand{
    transition: 0.25s;
  }

  a:hover {
   transform: scale(1.1);
  }

  .navbar-brand:hover {
    color: #ffd34f;
  }

  .user {
    margin-right: 20px;
  }
</style>