<template>
  <NavbarSection />
  <router-view />
  <FooterSection />
</template>

<script>
import NavbarSection from './components/NavbarSection.vue'
import FooterSection from './components/FooterSection.vue'

export default {
  components: {
    NavbarSection,
    FooterSection
  },
  
  // Utilisation de l'objet watch pour surveiller les changements de route
  watch: {
    // Surveille le chemin de la route actuelle
    '$route.path': function() {
      // Défilement vers le haut de la page lors du changement de route
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth' // Pour un défilement fluide, utilisez 'auto' pour un défilement instantané
      });
    }
  }
}
</script>

<style>
@import './style.css';
</style>