<template>
  <div class="news-card">
    <div class="card-image">
      <img :src="article.image" :alt="article.title" />
    </div>
    <div class="card-content">
      <h3 class="title">{{ article.title }}</h3>
      <div class="meta">
        <span>{{ article.date.day }} {{ article.date.month }} 2050</span> ·
        <span>{{ article.comments }} comments</span>
      </div>
      <p class="excerpt">
        {{ article.excerpt }}
      </p>
      <div class="card-button">
        <AppButton text="En savoir plus" type="primary" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppButton from '../common/AppButton.vue'

defineProps({
  article: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.news-card {
  display: flex;
  background-color: white;
  border-bottom: 4px solid #007bff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.news-card:hover {
  transform: translateY(-4px);
}

.card-image {
  width: 40%;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  padding: 1rem;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  font-size: 1.2rem;
  color: #2e4356;
  margin-bottom: 0.5rem;
}

.meta {
  font-size: 0.875rem;
  color: #777;
  margin-bottom: 0.75rem;
}

.excerpt {
  font-size: 0.95rem;
  color: #333;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.card-button {
  display: flex;
  justify-content: flex-start;
}


@media (max-width: 518px) {
  .news-card {
    flex-direction: column;
    width: 85vw;

  }
    .news-card {
      width: 90vw;
  }

  .card-image {
    width: 90vw;
  }

  .card-content {
  width: 80vw;

}


}


</style>
