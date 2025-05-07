<script setup lang="ts">
defineProps<{
  background: string;
}>();
</script>

<template>
  <section class="hero-section" :style="{ backgroundImage: `url(${background})` }">
    <div class="hero-content">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  margin-top: 60px;
  height: 90vh;
  display: flex;
  align-items: center;
  background-size: cover;
  background-position: center;
  position: relative;
  color: white;
  padding-top: 60px;
  transition: background-image 0.5s ease-in-out;
}
.hero-content {
  max-width: 600px;
  margin-left: 10%;
  padding: 0 2rem;
}
</style>
