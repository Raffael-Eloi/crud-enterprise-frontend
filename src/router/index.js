import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Enterprise from '../views/Enterprise.vue';
import CreateEnterprise from '../views/enterprise-CRUD/CreateEnterprise.vue';
import VisualizeEnterprise from '../views/enterprise-CRUD/VisualizeEnterprise.vue';
import EditEnterprise from '../views/enterprise-CRUD/EditEnterprise.vue';

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
  },
  {
    path: '/empresa/visualizar',
    name: 'visualize-enterprise',
    component: VisualizeEnterprise
  },
  {
    path: '/empresa/editar',
    name: 'edit-enterprise',
    component: EditEnterprise
  }
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes
})

export default router
