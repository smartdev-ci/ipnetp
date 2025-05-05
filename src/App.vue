<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useReviewStore } from './stores/reviewStore';
import { useNewsStore } from './stores/newStore';

import TheNavbar from './components/layout/TheNavbar.vue';
import TheFooter from './components/layout/TheFooter.vue';
import HeroSection from './components/home/HeroSection.vue';
import FlashSection from './components/home/FlashSection.vue';
import WhyEducat from './components/home/WhyEducat.vue';
import NewsSection from './components/news/NewsSection.vue';
import LibrarySection from './components/products/LibrarySection.vue';
import EventsSection from './components/events/EventsSection.vue';

const reviewStore = useReviewStore();
const newsStore = useNewsStore();

const isLoading = computed(() => !reviewStore.isLoaded || !newsStore.isLoaded);

onMounted(async () => {
  try {
    await reviewStore.fetchReviews();
    await newsStore.fetchNews();
  } catch (error) {
    console.error("Erreur lors du chargement des données :", error);
  }
});
</script>

<template>
  <div v-if="isLoading" class="loadingScreen">
    <h3 class="loadingScreen__text">
      <span v-for="(letter, index) in 'IPNETP'" :key="index" class="loadingScreen__text__span"
        :style="{ animationDelay: `${index * 100}ms` }">
        {{ letter }}
      </span>
    </h3>
  </div>

  <div v-else class="app">
    <TheNavbar />

    <main>
      <HeroSection />
      <FlashSection />
      <WhyEducat />
      <NewsSection />
      <LibrarySection />
      <EventsSection />
    </main>

    <TheFooter />
    <RouterView/>
  </div>
</template>

<style>
[v-cloak] { display: none; }

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

.loadingScreen {
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 900000;
  overflow: hidden;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loadingScreen__text {
  text-align: center;
  color: #0f1e3d;
  text-transform: uppercase;
  font-size: 30px;
  display: flex;
}

.loadingScreen__text__span {
  display: inline-block;
  padding: 5px;
  animation: charColor 1s infinite ease-in-out;
  backface-visibility: hidden;
}

@keyframes charColor {
  0%, 100% { color: #0f1e3d; }
  50% { color: #5c5c5c; }
}
</style>
