<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useNewsStore } from '../../stores/newStore';

const newsStore = useNewsStore();
const currentIndex = ref(0);

onMounted(async () => {
  await newsStore.fetchNews();
  startRotation();
});

function startRotation() {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % newsStore.news.length;
  }, 4000); // Toutes les 4 secondes
}
</script>

<template>
  <section class="flash-section" v-if="newsStore.news.length">
    <div class="flash-banner">
      <span class="flash-label">⚡ Dernières nouvelles</span>
      <div class="news-rotator">
        <transition-group name="slide" tag="div">
          <div
            v-for="(item, index) in newsStore.news"
            v-show="index === currentIndex"
            :key="index"
            class="flash-text"
          >
            {{ item.title }}
          </div>
        </transition-group>
      </div>
    </div>
  </section>
</template>

<style scoped>
.flash-section {
  height: 50px;
  display: flex;
  align-items: center;
}

.flash-banner {
  display: flex;
  align-items: center;
  background: #0f1e3d;
  color: white;
  height: 70px;
  padding: 10px;
  font-weight: bold;
  font-size: 16px;
  width: 90%;
  margin: 0 auto;
  border-radius: 10px;
  transform: translateY(-25px);
  overflow: hidden;
}

.flash-label {
  background: white;
  color: #0f1e3d;
  padding: 5px 10px;
  margin-right: 10px;
  border-radius: 4px;
  font-weight: bold;
  white-space: nowrap;
}

.news-rotator {
  flex: 1;
  overflow: hidden;
  position: relative;
  height: 25px;
}

.flash-text {
  position: absolute;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

/* Animation verticale douce */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.6s ease, opacity 0.6s ease;
}

.slide-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.slide-enter-to {
  transform: translateY(0%);
  opacity: 1;
}

.slide-leave-from {
  transform: translateY(0%);
  opacity: 1;
}

.slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
