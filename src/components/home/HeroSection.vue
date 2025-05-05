<script setup lang="ts">
// import AppButton from '../common/AppButton.vue';
</script>

<template>
  <section class="hero-section">
    <div class="hero-content">
      <!-- <h1 class="hero-title leFadeInLeft">Education Needs</h1> -->
      <!-- <div class="hero-buttons">
        <AppButton text="Learn More" type="primary" href="#" />
      </div> --> 
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  height: 90vh;
  display: flex;
  align-items: center;
  background: url('https://ipnetp.ci/wp-content/uploads/2025/04/1-scaled.png');
  background-size: cover;
  background-position: center;
  position: relative;
  color: var(--text-white);
  padding-top: 60px;
}

.hero-content {
  text-align: left;
  max-width: 600px;
  padding: 0 var(--space-xl);
  margin-left: 10%;
  animation: fadeIn 1s ease-in-out;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: var(--space-lg);
  color: var(--text-white);
}

.leFadeInLeft span {
  display: inline-block;
  animation-name: leFadeInLeft;
  animation-duration: 1s;
  animation-fill-mode: both;
}

@keyframes leFadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.hero-buttons {
  display: flex;
  gap: var(--space-md);
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

@media (max-width: 768px) {
  .hero-section {
    height: 70vh;
  }
  
  .hero-content {
    margin: 0 auto;
    text-align: center;
    padding: 0 var(--space-md);
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-buttons {
    justify-content: center;
  }
}
</style>