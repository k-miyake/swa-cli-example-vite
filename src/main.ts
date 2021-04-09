import { createApp } from 'vue'
import App from './App.vue'
import Home from './pages/Home.vue'
import Admin from './pages/Admin.vue'
import Time from './pages/Time.vue'
import NotFound from './pages/NotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
    },
    {
      path: '/time',
      name: 'time',
      component: Time,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
    },
  ],
})

createApp(App).use(router).mount('#app')
