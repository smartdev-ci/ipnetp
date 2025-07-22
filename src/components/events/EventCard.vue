<template>
  <div class="event-card">
    <div class="image-wrapper">
      <img :src="event.image" :alt="event.title" />
      <div class="event-date">
        <div class="event-day">{{ event.date.day }}</div>
        <div class="event-month">{{ event.date.month }}</div>
      </div>
    </div>
    <div class="event-content">
      <h3 class="event-title">{{ event.title }}</h3>
      <div class="event-details">
        <div class="event-detail">
          <!-- <span class="material-icons">access_time</span>
          <span>{{ event.time }}</span> -->
        </div>
        <div class="event-detail">
          <!-- <span class="material-icons">location_on</span>
          <span>{{ event.location }}</span> -->
        </div>
      </div>
      <p class="event-description">{{ event.description }}</p>
      <div class="event-button">
        <AppButton text="En savoir plus" type="primary" href="#" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppButton from '../common/AppButton.vue';

defineProps({
  event: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.event-card {
  background: white;
  border: 1px solid #e0e0e0;
  border-bottom: 4px solid #3399FF;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  height: 100%;
}

.event-card:hover {
  transform: translateY(-4px);
}

.image-wrapper {
  position: relative;
  overflow: hidden;
}

.image-wrapper img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.event-date {
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: #3399FF;
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  text-align: center;
  font-weight: bold;
}

.event-day {
  font-size: 1.2rem;
  line-height: 1;
}

.event-month {
  font-size: 0.75rem;
  text-transform: uppercase;
}

.event-content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.event-title {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #2e4356;
}

.event-details {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.85rem;
  color: #777;
  margin-bottom: 0.75rem;
}

.event-detail {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.material-icons {
  font-size: 1rem;
  color: #8cc63f;
}

.event-description {
  font-size: 0.9rem;
  color: #444;
  flex-grow: 1;
  margin-bottom: 1rem;
}

.event-button {
  display: flex;
  justify-content: flex-start;
}
</style>
