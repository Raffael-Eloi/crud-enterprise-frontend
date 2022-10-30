import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Enterprise from '../views/Enterprise.vue';
import CreateEnterprise from '../views/enterprise-CRUD/CreateEnterprise.vue';

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
  },
  {
    path: '/empresa/criar',
    name: 'create-enterprise',
    component: CreateEnterprise
  }
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes
})

export default router
