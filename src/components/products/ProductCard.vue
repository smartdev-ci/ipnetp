<script setup lang="ts">
import StarRating from '../common/StarRating.vue';

defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="product-card card">
    <div class="product-image">
      <img :src="product.image" :alt="product.title" />
      <div class="product-overlay">
        <button class="action-button">
          <span class="material-icons">shopping_cart</span>
        </button>
        <button class="action-button">
          <span class="material-icons">favorite</span>
        </button>
        <button class="action-button">
          <span class="material-icons">visibility</span>
        </button>
      </div>
    </div>
    <div class="product-content">
      <h3 class="product-title">{{ product.title }}</h3>
      <div class="product-rating">
        <StarRating :rating="product.rating" />
      </div>
      <div class="product-price">${{ product.price.toFixed(2) }}</div>
      <button class="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.product-image {
  position: relative;
  overflow: hidden;
  background-color: var(--background-off-white);
  padding: var(--space-md);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

.product-image img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  transition: transform var(--transition-normal);
}

.product-overlay {
  position: absolute;
  bottom: -50px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: var(--space-sm);
  transition: bottom var(--transition-normal);
  background-color: rgba(255, 255, 255, 0.9);
  padding: var(--space-sm) 0;
}

.product-card:hover .product-overlay {
  bottom: 0;
}

.action-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: var(--background-light);
  color: var(--secondary-color);
  border: none;
  cursor: pointer;
  transition: background-color var(--transition-fast), color var(--transition-fast);
}

.action-button:hover {
  background-color: var(--primary-color);
  color: var(--text-white);
}

.product-content {
  padding: var(--space-md);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  flex: 1;
}

.product-title {
  margin: 0;
  font-size: 1.1rem;
  color: var(--secondary-color);
}

.product-rating {
  display: flex;
  justify-content: center;
}

.product-price {
  font-weight: 700;
  color: var(--primary-color);
  font-size: 1.2rem;
  margin-bottom: var(--space-sm);
}

.product-card .btn {
  margin-top: auto;
}
</style>