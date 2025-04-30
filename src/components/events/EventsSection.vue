<script setup lang="ts">
import SectionHeader from '../common/SectionHeader.vue';
import EventCard from './EventCard.vue';

const events = [
  {
    id: 1,
    title: 'Learn English in ease',
    date: { day: '12', month: 'Jun' },
    time: '10:00 AM - 2:00 PM',
    location: 'Main Campus, Room 301',
    description: 'A comprehensive workshop designed to improve English language skills through interactive exercises and practical conversation.',
    image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    title: 'Learn English in ease',
    date: { day: '20', month: 'Jul' },
    time: '1:00 PM - 5:00 PM',
    location: 'Virtual (Zoom)',
    description: 'Join our online session focused on building confidence in English speaking and writing through guided practice and feedback.',
    image: 'https://images.pexels.com/photos/3184356/pexels-photo-3184356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    title: 'Learn English in ease',
    date: { day: '15', month: 'Aug' },
    time: '9:00 AM - 4:00 PM',
    location: 'City Library, Conference Hall',
    description: 'A full-day immersive English learning experience with native speakers, focusing on natural conversation and cultural contexts.',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];
</script>

<template>
  <section class="events-section section">
    <div class="container">
      <SectionHeader 
        title="ACTIVITES A VENIR" 
        subtitle="Participate in our upcoming educational events" 
      />
      
      <div class="events-grid grid-3">
        <EventCard 
          v-for="event in events" 
          :key="event.id" 
          :event="event" 
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
