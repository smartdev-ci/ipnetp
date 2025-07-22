<script setup lang="ts">
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
      <template v-if="product.thumbnail.includes('docs.google.com')">
        <iframe
          :src="product.thumbnail"
          frameborder="0"
          class="pdf-preview"
        ></iframe>
      </template>
      <template v-else>
        <img :src="product.thumbnail" :alt="product.title" class="product-img" />
      </template>

      <div class="product-overlay">
        
      </div>
    </div>
    <div class="product-content">
      <h3 class="product-title">{{ product.title }}</h3>
      <div class="product-price">Télécharger</div>
      <a :href="product.link" target="_blank" class="btn btn-primary">Voir PDF</a>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  width: 220px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.product-image {
  position: relative;
  height: 150px;
  overflow: hidden;
}

.product-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.pdf-preview {
  width: 100%;
  height: 100%;
}

.product-overlay {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
}

.action-button {
  color: #fff;
  font-size: 18px;
}

.product-content {
  padding: 15px;
}

.product-title {
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  margin: 10px 0;
}

.product-price {
  font-size: 0.875rem;
  color: #666;
  margin: 5px 0;
}

.btn-primary {
  background-color: #3399FF;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  text-decoration: none;
  display: inline-block;
  margin-top: 10px;
  font-size: 0.875rem;
}

.btn-primary:hover {
  background-color: #0070C9;
}
</style>
