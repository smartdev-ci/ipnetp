import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/mot-directrice',
        name: 'DirectiionPage',
        component: () => import('../views/DirectionView.vue'),
    },
  ],
})


export default router
