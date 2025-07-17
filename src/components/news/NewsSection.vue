<script setup lang="ts">
import { onMounted } from 'vue';
import { useNewsStore } from '../../stores/newStore'; // adapte le chemin si besoin
import SectionHeader from '../common/SectionHeader.vue';
import NewsCard from './NewsCard.vue';

const newsStore = useNewsStore();

onMounted(() => {
  newsStore.fetchNews();
});
</script>

<template>
  <section class="news-section section">
    <div class="container">
      <SectionHeader
      id="actualites" 
        title="ACTUALITÉS RÉCENTES" 
        subtitle="Restez continuellement informer sur les actualités de notre institut" 
      />

      <div class="news-grid grid-2">
        <NewsCard 
          v-for="(article, index) in newsStore.news" 
          :key="index" 
          :article="{
            title: article.title,
            date: {
              day: article.date.split('/')[0],
              month: new Date(article.date).toLocaleDateString('fr-FR', { month: 'short' })
            },
            excerpt: article.title,
            image: article.image,
            comments: 0
          }"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.news-section {
  background-color: var(--background-off-white);
  width: 100vw;
  display: flex;
  justify-content: start;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
  padding-top: 2rem;
}
</style>
