import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import "@/utils/navbar.js"

import './assets/main.css'

const app = createApp(App)
app.use(router)
app.use(createPinia())

app.mount('#app')
