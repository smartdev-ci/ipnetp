<!-- views/Home.vue -->
<template>
  <main>
    <HeroSection
      background="https://ipnetp.ci/wp-content/uploads/2025/04/1-scaled.png"
    />
    <FlashSection />
    <section class="concours225">
      <a href="https://sigec.ipnetp.cloud/auth/signup" target="_blank"></a>
    </section>
    <WhyEducat />
    <NewsSection />
    <LibrarySection />
    <EventsSection />
  </main>
</template>
<script setup lang="ts">
import HeroSection from "../components/home/HeroSection.vue";
import FlashSection from "../components/home/FlashSection.vue";
import WhyEducat from "../components/home/WhyEducat.vue";
import NewsSection from "../components/news/NewsSection.vue";
import LibrarySection from "../components/products/LibrarySection.vue";
import EventsSection from "../components/events/EventsSection.vue";
</script>

<style scoped>
.concours225 {
  height: 7vw;
  width: 85vw;
  margin: auto;
  border: 1px solid #000;
  background: url("https://ipnetp.ci/wp-content/uploads/2025/05/21-2048x157.png");
  background-size: cover;
  margin-bottom: 45px;
}

.concours225 a {
  display: block;
  height: 100%;
  width: 100%;
}
</style>
