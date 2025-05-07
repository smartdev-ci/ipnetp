<!-- views/Home.vue -->
<template>
  <main>
    <HeroSection background="https://ipnetp.ci/wp-content/uploads/2025/04/1-scaled.png"/>
    <FlashSection />
    <WhyEducat />
    <NewsSection />
    <LibrarySection />
    <EventsSection />
  </main>
</template>
<script setup lang="ts">
import HeroSection from "../components/home/HeroSection.vue";
import FlashSection from '../components/home/FlashSection.vue';
import WhyEducat from '../components/home/WhyEducat.vue';
import NewsSection from '../components/news/NewsSection.vue';
import LibrarySection from '../components/products/LibrarySection.vue';
import EventsSection from '../components/events/EventsSection.vue';

</script>
