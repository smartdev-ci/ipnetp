<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface StatItem {
  number: number;
  label: string;
  icon: string;
}

const stats: StatItem[] = [
  { number: 79, label: 'Teachers', icon: 'school' },
  { number: 120, label: 'Members', icon: 'group' },
  { number: 36, label: 'Courses', icon: 'menu_book' },
  { number: 20, label: 'Countries', icon: 'public' }
];

const animatedStats = ref(stats.map(stat => ({ ...stat, current: 0 })));

const animateStats = () => {
  stats.forEach((stat, index) => {
    const increment = stat.number / 50; // Animate over 50 steps
    let current = 0;
    
    const interval = setInterval(() => {
      current += increment;
      
      if (current >= stat.number) {
        animatedStats.value[index].current = stat.number;
        clearInterval(interval);
      } else {
        animatedStats.value[index].current = Math.floor(current);
      }
    }, 30);
  });
};

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateStats();
        observer.disconnect();
      }
    });
  }, { threshold: 0.1 });
  
  const statsSection = document.querySelector('.stats-section');
  if (statsSection) observer.observe(statsSection);
});
</script>

<template>
  <section class="stats-section section">
    <div class="container">
      <div class="stats-header">
        <h2 class="section-title">IMPORTANT FACTS</h2>
        <p class="section-subtitle">Find out more about our educational achievements</p>
      </div>
      
      <div class="stats-grid grid-4">
        <div v-for="(stat, index) in animatedStats" :key="index" class="stat-item">
          <div class="stat-icon material-icons">
            {{ stat.icon }}
          </div>
          <div class="stat-number">{{ Math.floor(stat.current) }}+</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats-section {
  background-color: var(--secondary-color);
  color: var(--text-white);
  text-align: center;
}

.stats-header {
  margin-bottom: var(--space-xl);
}

.stats-header .section-title,
.stats-header .section-subtitle {
  color: var(--text-white);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-xl);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space-lg);
  transition: transform var(--transition-normal);
}

.stat-item:hover {
  transform: translateY(-10px);
}

.stat-icon {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: var(--space-md);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: var(--space-sm);
}

.stat-label {
  font-size: 1.25rem;
  color: var(--text-white);
}

@media (min-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>