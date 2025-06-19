// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Direction from "../views/Direction.vue";
import Organisation from "../views/Organisation.vue";
import formationContinue from "../views/formation/FormationContinue.vue";
import FormationInitiale from "../views/formation/FormationInitiale.vue";
import Admission from "../views/formation/Admission.vue";
import Diplomes from "../views/formation/Diplomes.vue";
import Srv from "../views/services/Srv.vue";
import Sap from "../views/services/Sap.vue";
import Sp from "../views/services/Sp.vue";
import Femmes from "../views/associations/Femmes.vue";
import Mutuelle from "../views/associations/Mutuelle.vue";
import MoresCi from "../views/associations/MoresCi.vue";
import Production from "../views/recherche/Production.vue";
import Anglais from "../views/recherche/Anglais.vue";
import NousContacter from "../views/contacts/NousContacter.vue";
import ContactService from "../views/contacts/ContactService.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/direction",
    name: "direction",
    component: Direction,
  },
  {
    path: "/organisation",
    name: "organisation",
    component: Organisation,
  },
  {
    path: "/formation/continue",
    name: "continue",
    component: formationContinue,
  },
  {
    path: "/formation/initiale",
    name: "initiale",
    component: FormationInitiale,
  },
  {
    path: "/formation/Admission",
    name: "admission",
    component: Admission,
  },
  {
    path: "/formation/Diplomes",
    name: "diplomes",
    component: Diplomes,
  },

  {
    path: "/services/sap",
    name: "sap",
    component: Sap,
  },
  {
    path: "/services/sp",
    name: "sp",
    component: Sp,
  },
  {
    path: "/services/srv",
    name: "srv",
    component: Srv,
  },
  {
    path: "/associations/femmes",
    name: "femmes",
    component: Femmes,
  },
  {
    path: "/associations/mutuelle",
    name: "mutuelle",
    component: Mutuelle,
  },
  {
    path: "/associations/mores-ci",
    name: "mores-ci",
    component: MoresCi,
  },
  {
    path: "/recherche/centre-recherche-production",
    name: "centre-recherche-production",
    component: Production,
  },
  {
    path: "/recherche/anglais",
    name: "anglais",
    component: Anglais,
  },
    {
    path: "/contacts/contact-service",
    name: "contact-service",
    component: ContactService,
  },
      {
    path: "/contacts/nous-contacter",
    name: "nous-contacter",
    component: NousContacter,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    // Si la navigation précédente a une position sauvegardée (ex: bouton retour), on la restaure
    if (savedPosition) {
      return savedPosition;
    } else {
      // Sinon, on scroll en haut de page
      return { top: 0 };
    }
  },
});

export default router;
