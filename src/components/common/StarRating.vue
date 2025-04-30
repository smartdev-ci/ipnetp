<script setup lang="ts">
defineProps({
  rating: {
    type: Number,
    required: true,
    validator: (value: number) => value >= 0 && value <= 5
  }
});
</script>

<template>
  <div class="star-rating">
    <span v-for="i in 5" :key="i" class="star">
      <span v-if="i <= Math.floor(rating)" class="star-filled">★</span>
      <span v-else-if="i - 0.5 <= rating" class="star-half">★</span>
      <span v-else class="star-empty">☆</span>
    </span>
  </div>
</template>

<style scoped>
.star-rating {
  display: inline-flex;
  align-items: center;
}

.star {
  font-size: 1rem;
  color: var(--text-light);
  position: relative;
}

.star-filled {
  color: var(--accent-color);
}

.star-half {
  color: var(--accent-color);
  position: absolute;
  overflow: hidden;
  width: 50%;
}

.star-empty {
  color: var(--text-light);
}
</style>