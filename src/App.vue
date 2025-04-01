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
    }
  }
</script>

<style>
@import './style.css';
</style>