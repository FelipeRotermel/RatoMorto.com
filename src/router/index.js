import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/filme/:id',
      name: 'filme',
      component: () => import('../views/MovieDetailView.vue'),
      props: true,
    },
    {
      path: '/genero/:id',
      name: 'genero',
      component: () => import('../views/GenreDetailView.vue'),
      props: true,
    },
    {
      path:'/rat',
      name: 'rat',
      component: () => import('../views/DancingratView.vue')

    },
    {
      path:'/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path:'/cadastro',
      name: 'cadastro',
      component: () => import('../views/CadastroView.vue')
    },
    {
      path:'/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path:'/foof',
      name: 'foof',
      component: () => import('../views/FoofView.vue')
    }
    
  ]
})

export default router
