<script setup lang="ts">
import { onMounted } from 'vue';
import SectionHeader from '../common/SectionHeader.vue';
import ProductCard from './ProductCard.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import { useReviewStore } from '../../stores/reviewStore';

// Utilisation des modules Swiper
SwiperCore.use([Navigation, Pagination]);

const reviewStore = useReviewStore();

// Récupérer les revues lors du montage du composant
onMounted(() => {
  reviewStore.fetchReviews();
});
</script>

<template>
  <section class="library-section section">
    <div class="container">
      <SectionHeader title="Nos revues IPNETP"
        subtitle="Découvrez des ressources pour améliorer votre parcours d'apprentissage" />

      <!-- Swiper pour les revues -->
      <Swiper :slides-per-view="4" :space-between="30" :loop="true" :navigation="true" :pagination="{ clickable: true }"
        class="library-swiper" :breakpoints="{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          }
        }">
        <!-- Pour chaque revue, affichage dans un SwiperSlide -->
        <SwiperSlide v-for="review in reviewStore.reviews" :key="review.id">
          <ProductCard :product="review" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style scoped>
.library-section {
  margin-top: 20px;
}

.library-swiper {
  margin-top: 40px;
}

.product-card img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
