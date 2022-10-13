<script>
  import { RouterView } from "vue-router";
  import NavBar from "@/components/NavBar.vue";
  import Footer from "@/components/Footer.vue";
  import Main from "@/components/Main.vue";
  
  export default {
      components: { NavBar, Footer, Main, RouterView }
  }
</script>
  
<template>
  <NavBar/>
  <div class="pageContentWrapper">
  <RouterView/>
  </div>
  <Footer/>
</template>