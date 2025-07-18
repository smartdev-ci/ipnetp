// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Direction from "../views/Direction.vue";
import Organisation from "../views/Organisation.vue";
import formationContinue from "../views/FormationContinue.vue";
import FormationInitiale from "../views/FormationInitiale.vue";
import Admission from "../views/Admission.vue";
import Diplomes from "../views/Diplomes.vue";
import Srv from "../views/Srv.vue";
import Sap from "../views/Sap.vue";
import Sp from "../views/Sp.vue";
import Femmes from "../views/Femmes.vue";
import Mutuelle from "../views/Mutuelle.vue";
import MoresCi from "../views/MoresCi.vue";
import Production from "../views/Production.vue";
import Anglais from "../views/Anglais.vue";
import NousContacter from "../views/NousContacter.vue";
import ContactService from "../views/ContactService.vue";
import Partner from "../views/Partner.vue";
import Actualites from "../views/Actualites.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/direction", name: "direction", component: Direction },
  { path: "/organisation", name: "organisation", component: Organisation },
  { path: "/continue", name: "/formation/formation-continue", component: formationContinue },
  { path: "/initiale", name: "formation-initiale", component: FormationInitiale },
  { path: "/admission", name: "formation-admission", component: Admission },
  { path: "/diplomes", name: "formation-diplomes", component: Diplomes },
  { path: "/sap", name: "services-sap", component: Sap },
  { path: "/sp", name: "services-sp", component: Sp },
  { path: "/srv", name: "services-srv", component: Srv },
  { path: "/femmes", name: "associations-femmes", component: Femmes },
  { path: "/mutuelle", name: "associations-mutuelle", component: Mutuelle },
  { path: "/mores-ci", name: "associations-mores-ci", component: MoresCi },
  { path: "/centre-recherche-production", name: "recherche-centre-recherche-production", component: Production },
  { path: "/anglais", name: "recherche-anglais", component: Anglais },
  { path: "/contact-service", name: "contacts-contact-service", component: ContactService },
  { path: "/nous-contacter", name: "contacts-nous-contacter", component: NousContacter },
  { path: "/partner", name: "nos-partenaires", component: Partner },
  { path: "/actualites", name: "actualites", component: Actualites },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

export default router;
