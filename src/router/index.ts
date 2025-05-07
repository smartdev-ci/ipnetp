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
  scrollBehavior(to, from, savedPosition) {
    // Si la navigation précédente a une position sauvegardée (ex: bouton retour), on la restaure
    if (savedPosition) {
      return savedPosition
    } else {
      // Sinon, on scroll en haut de page
      return { top: 0 }
    }
  },
});

export default router;
