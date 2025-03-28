<template>
  <section class="news-banner">
  <div>
    <div class="flash-banner">
      <span class="flash-label">⚡ Dernières nouvelles</span>
      <span class="flash-text">Refonte du site internet de l’IPNETP : une collaboration avec la GIZ pour une meilleure accessibilité !</span>
    </div>
    <div class="news-container">
      <div class="main-news" v-if="news.length">
        <img :src="news[0].image" class="news-image" />
        <div class="news-overlay">
          <h2 class="news-title">{{ news[0].title }}</h2>
          <p class="news-date">📅 {{ news[0].date }}</p>
        </div>
      </div>
      <div class="news-grid">
        <div v-for="(item, index) in news.slice(1)" :key="index" class="news-item">
          <img :src="item.image" class="news-image" />
          <div class="news-overlay">
            <h3 class="news-subtitle">{{ item.title }}</h3>
            <p class="news-date">📅 {{ item.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script setup lang="ts">
import { onMounted, defineEmits } from 'vue';
import { useNewsStore } from '../stores/newsStore';
import { storeToRefs } from 'pinia';

const emit = defineEmits(['loaded']);
const newsStore = useNewsStore();
const { news } = storeToRefs(newsStore);

onMounted(async () => {
  await newsStore.fetchNews();
  emit('loaded'); 
});
</script>


<style scoped>
section.news-banner {
  margin-top: 150px;
  /* border: 5px solid red; */
}
.flash-banner {
  display: flex;
  align-items: center;
  background: #0f1e3d;
  color: white;
  padding: 10px;
  font-weight: bold;
  font-size: 16px;
  width: 90%;
    margin: 0 auto;
    border-radius: 10px;
}

.flash-label {
  background: white;
  color: #0f1e3d;
  padding: 5px 10px;
  margin-right: 10px;
  border-radius: 4px;
  font-weight: bold;
}

.news-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 16px;
  padding: 16px;
  /* border: 2px solid blue; */
  height: 75vh;
}

.main-news {
  position: relative;
  height: 100%;
  /* border: 3px solid gold; */
  object-fit: cover;
  overflow: hidden;
}

.main-news img.news-image{
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.news-image {
  width: 100%;
  height: auto;
  display: block;
}

.news-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 16px;
}


.tag {
  background: #007bff;
  color: white;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 4px;
}

.news-title {
  font-size: 18px;
  font-weight: bold;
  margin-top: 8px;
}

.news-date {
  font-size: 14px;
  margin-top: 4px;
}

.news-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.news-item {
  position: relative;
}

.news-subtitle {
  font-size: 14px;
  font-weight: bold;
  margin-top: 8px;
}



@media screen and (max-width: 1272px)
{
   
  .news-container {
  /* border: 4px solid rgb(255, 0, 0); */
  height: 80vh;

}
section.news-banner {
  margin-top: 110px;
  /* border: 5px solid red; */
}

.flash-banner {
  display: flex;
  align-items: center;
  background: #0f1e3d;
  color: white;
  padding: 10px;
  font-weight: bold;
  font-size: 13px;
  width: 90%;
    margin: 0 auto;
    border-radius: 10px;
}

}

.flash-label {
  padding: 4px 8px;
}


</style>
