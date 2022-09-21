<script>
  import { RouterView } from "vue-router";
  import NavBar from "@/components/NavBar.vue";
  import Footer from "@/components/Footer.vue";
  import Main from "@/components/Main.vue";
  import SideBar from "@/components/SideBar.vue";
  
  export default {
      components: { NavBar, Footer, Main, SideBar, RouterView }
  }
</script>
  
<template>
  <NavBar/>
  <SideBar/>
  <RouterView/>
  <Footer/>
</template>