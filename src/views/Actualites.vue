<template>
  <main>
    <section class="news-page">
      <div class="container">
        <h1 class="page-title">Nos Actualités</h1>
        <p class="page-subtitle">Toutes les dernières nouvelles de notre institut</p>

        <!-- Message de chargement -->
        <div v-if="!newsStore.isLoaded" class="loading">Chargement des actualités...</div>

        <!-- Message si pas d'articles -->
        <div v-else-if="newsStore.news.length === 0" class="no-articles">
          Aucune actualité disponible pour le moment.
        </div>

        <!-- Affichage des articles -->
        <div v-else>
          <div class="news-grid">
            <div 
              v-for="(article, index) in paginatedNews" 
              :key="index" 
              class="news-card"
            >
              <div class="news-image-container">
                <img 
                  :src="article.image" 
                  :alt="article.title" 
                  class="news-image"
                  loading="lazy"
                >
                <div class="news-date">
                  <span class="day">{{ formatDay(article.date) }}</span>
                  <span class="month">{{ formatMonth(article.date) }}</span>
                </div>
              </div>
              <div class="news-content">
                <h3 class="news-title">{{ article.title }}</h3>
                <div class="news-categories">
                  <span 
                    v-for="(category, catIndex) in article.categories" 
                    :key="catIndex"
                    class="category-tag"
                  >
                    {{ category }}
                  </span>
                </div>
                <router-link 
                  :to="`/actualites/${article.id}`" 
                  class="read-more"
                >
                  Lire la suite →
                </router-link>
              </div>
            </div>
          </div>

          <div class="pagination">
            <button 
              @click="prevPage" 
              :disabled="currentPage === 1"
              class="pagination-button"
            >
              Précédent
            </button>
            <span class="page-numbers">
              Page {{ currentPage }} sur {{ totalPages }}
            </span>
            <button 
              @click="nextPage" 
              :disabled="currentPage === totalPages"
              class="pagination-button"
            >
              Suivant
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useNewsStore } from '../stores/newStore';

const newsStore = useNewsStore();

const currentPage = ref(1);
const itemsPerPage = 6;

onMounted(() => {
  if (!newsStore.isLoaded) {
    newsStore.fetchNews();
  }
});

const totalPages = computed(() => {
  return Math.ceil(newsStore.news.length / itemsPerPage);
});

const paginatedNews = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return newsStore.news.slice(start, end);
});

const formatDay = (dateString: string) => {
  const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
  return date.getDate();
};

const formatMonth = (dateString: string) => {
  const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
  return date.toLocaleDateString('fr-FR', { month: 'short' });
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};
</script>

<style scoped>
.news-page {
  padding: 4rem 1rem;
  background: #f9f9f9;
}

.page-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.page-subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 2rem;
}

.loading, .no-articles {
  text-align: center;
  padding: 40px;
  font-size: 1.2rem;
  color: #666;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.news-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.news-image-container {
  position: relative;
}

.news-image {
  width: 100%;
  height: auto;
  display: block;
}

.news-date {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: #007bff;
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
  text-align: center;
}

.news-content {
  padding: 1rem;
}

.news-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.news-categories {
  margin-bottom: 0.5rem;
}

.category-tag {
  display: inline-block;
  background: #e1eaff;
  color: #007bff;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  margin-right: 0.5rem;
}

.read-more {
  color: #007bff;
  text-decoration: underline;
  font-weight: 500;
}

.pagination {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.pagination-button {
  background: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
}

.pagination-button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.page-numbers {
  font-weight: 600;
}
</style>
