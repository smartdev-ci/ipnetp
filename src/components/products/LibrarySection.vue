<script setup lang="ts">
import SectionHeader from '../common/SectionHeader.vue';
import ProductCard from './ProductCard.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

SwiperCore.use([Navigation, Pagination]);

const products = [
  {
    id: 1,
    title: 'The Product Here',
    price: 9.99,
    rating: 4.5,
    image: 'https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    title: 'The Product Here',
    price: 19.99,
    rating: 4.0,
    image: 'https://images.pexels.com/photos/3205579/pexels-photo-3205579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    title: 'The Product Here',
    price: 24.99,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/714701/pexels-photo-714701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    title: 'The Product Here',
    price: 7.99,
    rating: 4.2,
    image: 'https://images.pexels.com/photos/5238119/pexels-photo-5238119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];
</script>

<template>
  <section class="library-section section">
    <div class="container">
      <SectionHeader 
        title="Nos revues IPNETP" 
        subtitle="Discover resources to enhance your learning journey" 
      />

      <Swiper
        :slides-per-view="3"
        :space-between="30"
        :loop="true"
        :navigation="true"
        :pagination="{ clickable: true }"
        class="library-swiper"
      >
        <SwiperSlide v-for="product in products" :key="product.id">
          <ProductCard :product="product" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style scoped>
.library-section {
  background-color: var(--background-light);
}

.library-swiper {
  padding: 2rem 0;
}
</style>
