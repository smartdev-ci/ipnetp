<script setup lang="ts">
import { defineProps } from 'vue';
import StarRating from '../common/StarRating.vue';
import AppButton from '../common/AppButton.vue';

defineProps({
  course: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="course-card card">
    <div class="course-image">
      <img :src="course.image" :alt="course.title" />
      <div class="course-price">
        <span>${{ course.price }}</span>
      </div>
    </div>
    <div class="course-content">
      <h3 class="course-title">{{ course.title }}</h3>
      <div class="course-meta">
        <div class="course-teacher">
          <span class="material-icons icon">person</span>
          <span>{{ course.teacher }}</span>
        </div>
        <div class="course-date">
          <span class="material-icons icon">calendar_today</span>
          <span>{{ course.date }}</span>
        </div>
      </div>
      <p class="course-description">{{ course.description }}</p>
      <div class="course-footer">
        <StarRating :rating="course.rating" />
        <AppButton text="More Info" type="primary" href="#" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.course-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.course-image {
  position: relative;
  overflow: hidden;
  border-top-left-radius: var(--border-radius-md);
  border-top-right-radius: var(--border-radius-md);
}

.course-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform var(--transition-normal);
}

.course-card:hover .course-image img {
  transform: scale(1.05);
}

.course-price {
  position: absolute;
  bottom: var(--space-md);
  right: var(--space-md);
  background-color: var(--primary-color);
  color: var(--text-white);
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--border-radius-sm);
  font-weight: 600;
}

.course-content {
  padding: var(--space-md);
  display: flex;
  flex-direction: column;
  flex: 1;
}

.course-title {
  margin-bottom: var(--space-sm);
  font-size: 1.25rem;
  color: var(--secondary-color);
}

.course-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--space-md);
  color: var(--text-medium);
  font-size: 0.875rem;
}

.course-teacher, .course-date {
  display: flex;
  align-items: center;
}

.icon {
  font-size: 1rem;
  margin-right: var(--space-xs);
}

.course-description {
  color: var(--text-medium);
  margin-bottom: var(--space-md);
  flex: 1;
}

.course-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}
</style>