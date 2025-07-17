<script setup lang="ts">
import { onMounted } from 'vue';
import { useNewsStore } from '../../stores/newStore';
import SectionHeader from '../common/SectionHeader.vue';
import EventCard from './EventCard.vue';

const newsStore = useNewsStore();

onMounted(() => {
  newsStore.fetchNewsByCategory(2);  // Chargement des articles de la catégorie 658
});

</script>

<template>
  <section class="events-section section">
    <div class="container">
      <SectionHeader 
        title="ACTIVITES FORMATION" 
        subtitle="Explorez nos diverses activités." 
      />

      <div class="events-grid grid-3">
        <EventCard 
          v-for="(event, index) in newsStore.formationNews" 
          :key="index" 
          :event="{
            title: event.title,
            date: event.date,
            description: event.title, 
            image: event.image || 'https://placehold.co/600x400'
          }" 
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: var(--space-xl) 0;
}
</style>
