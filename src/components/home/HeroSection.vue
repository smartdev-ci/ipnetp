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
  margin-top: 85px;
  height: 44vw;
  display: flex;
  align-items: center;
  background-size: 100%;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
  color: white;
  padding-top: 60px;
  transition: background-image 0.5s ease-in-out;
}

.hero-section::after{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  height: 1px;
  
}

.hero-content {
  max-width: 600px;
  margin-left: 10%;
  padding: 0 2rem;
}
</style>
