<script setup lang="ts">
import TheNavbar from './components/layout/TheNavbar.vue';
import TheFooter from './components/layout/TheFooter.vue';
import HeroSection from './components/home/HeroSection.vue';
import FlashSection from './components/home/FlashSection.vue';
import WhyEducat from './components/home/WhyEducat.vue';
import CoursesSection from './components/courses/CoursesSection.vue';
import StatsSection from './components/stats/StatsSection.vue';
import NewsSection from './components/news/NewsSection.vue';
import LibrarySection from './components/products/LibrarySection.vue';
import TestimonialsSection from './components/testimonials/TestimonialsSection.vue';
import EventsSection from './components/events/EventsSection.vue';
</script>

<template>
  <div class="app">
    <TheNavbar />
    
    <main>
      <HeroSection />
      <FlashSection/>
      <WhyEducat />
      <NewsSection />
      <!-- <CoursesSection /> -->
      <!-- <StatsSection /> -->
      <LibrarySection />
      <!-- <TestimonialsSection /> -->
      <EventsSection />
    </main>
    
    <TheFooter />
  </div>
</template>

<style>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>