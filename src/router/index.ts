// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';  // Exemple de vue
import Direction from '../views/Direction.vue';  // Exemple de vue

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/direction',
    name: 'direction',
    component: Direction
  },
  // Ajoute les autres routes de la même manière
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
