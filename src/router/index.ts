import { createRouter, createWebHistory } from 'vue-router';
import MotDirectrice from '@/views/MotDirectrice.vue';
// import Organisation from '@/views/Organisation.vue';

const routes = [
    { path: '/mot-directrice', component: MotDirectrice },
    // { path: '/organisation', component: Organisation },
    // Ajoute d'autres routes ici
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

export default router;
