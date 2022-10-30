import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Enterprise from '../views/Enterprise.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/empresa',
    name: 'enterprise',
    component: Enterprise
  }
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes
})

export default router
