<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const testimonials = [
  {
    id: 1,
    name: 'M S Nawaz',
    role: 'Student',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    quote: 'The courses at EduCat have transformed my approach to learning. The instructors are amazing and the content is always up-to-date with the latest industry standards.',
  },
  {
    id: 2,
    name: 'Jessica Williams',
    role: 'Parent',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    quote: 'My children have shown remarkable improvement since enrolling in EduCat programs. The personalized attention and engaging teaching methods make learning enjoyable for them.',
  },
  {
    id: 3,
    name: 'Robert Chen',
    role: 'Professional',
    image: 'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    quote: 'As a working professional, EduCat\'s flexible scheduling and quality content have allowed me to upgrade my skills without disrupting my career. Highly recommended!',
  }
];

const currentIndex = ref(0);
let interval: number;

const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length;
};

const prevTestimonial = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length;
};

const startAutoSlide = () => {
  interval = setInterval(() => {
    nextTestimonial();
  }, 5000) as unknown as number;
};

const stopAutoSlide = () => {
  clearInterval(interval);
};

onMounted(() => {
  startAutoSlide();
});

onBeforeUnmount(() => {
  stopAutoSlide();
});
</script>

<template>
  <section class="testimonials-section section">
    <div class="container">
      <div class="testimonial-wrapper">
        <div class="testimonial-content">
          <div class="testimonial-quote">
            <span class="quote-mark">"</span>
            {{ testimonials[currentIndex].quote }}
            <span class="quote-mark">"</span>
          </div>
          
          <div class="testimonial-author">
            <div class="author-image">
              <img :src="testimonials[currentIndex].image" :alt="testimonials[currentIndex].name" />
            </div>
            <div class="author-info">
              <h3 class="author-name">{{ testimonials[currentIndex].name }}</h3>
              <p class="author-role">{{ testimonials[currentIndex].role }}</p>
            </div>
          </div>
        </div>
        
        <div class="testimonial-navigation">
          <button class="nav-button prev" @click="prevTestimonial">
            <span class="material-icons">arrow_back</span>
          </button>
          <div class="nav-indicators">
            <span 
              v-for="(_, index) in testimonials" 
              :key="index" 
              :class="['indicator', { active: index === currentIndex }]"
              @click="currentIndex = index"
            ></span>
          </div>
          <button class="nav-button next" @click="nextTestimonial">
            <span class="material-icons">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials-section {
  background-color: var(--background-off-white);
}

.testimonial-wrapper {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.testimonial-content {
  margin-bottom: var(--space-xl);
}

.testimonial-quote {
  font-size: 1.25rem;
  color: var(--text-medium);
  line-height: 1.7;
  margin-bottom: var(--space-xl);
  position: relative;
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.quote-mark {
  font-size: 3rem;
  color: var(--primary-color);
  opacity: 0.3;
  position: absolute;
  top: -20px;
  left: -10px;
}

.quote-mark:last-child {
  top: auto;
  left: auto;
  bottom: -40px;
  right: -10px;
}

.testimonial-author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-md);
}

.author-image {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--primary-color);
}

.author-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-name {
  margin: 0;
  color: var(--secondary-color);
  font-size: 1.2rem;
}

.author-role {
  color: var(--primary-color);
  font-size: 0.9rem;
  margin: 0;
}

.testimonial-navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-lg);
}

.nav-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--background-light);
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.nav-button:hover {
  background-color: var(--primary-color);
  color: var(--text-white);
}

.nav-indicators {
  display: flex;
  gap: var(--space-sm);
}

.indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--background-gray);
  cursor: pointer;
  transition: background-color var(--transition-fast);
}

.indicator.active {
  background-color: var(--primary-color);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.testimonial-quote, .testimonial-author {
  animation: fadeIn 0.5s ease-in-out;
}
</style>