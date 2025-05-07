<template>
    <div class="fab-container">
      <!-- Boutons secondaires -->
      <transition-group name="fab" tag="div" class="fab-buttons">
        <button
          v-if="isOpen"
          key="whatsapp"
          @click="openWhatsapp"
          class="fab-button whatsapp"
        >
          <i class="fab fa-whatsapp"></i>
        </button>
  
        <button
          v-if="isOpen"
          key="phone"
          @click="callPhone"
          class="fab-button phone"
        >
          <i class="fas fa-phone-alt"></i>
        </button>
      </transition-group>
  
      <!-- Bouton principal -->
      <button class="fab-main" @click="isOpen = !isOpen">
        <i :class="isOpen ? 'fas fa-times' : 'fas fa-comments'"></i>
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const isOpen = ref(false)
  
  const openWhatsapp = () => {
    window.open('https://wa.me/22501020304', '_blank')
  }
  
  const callPhone = () => {
    window.location.href = 'tel:+22501020304'
  }
  </script>
  
  <style scoped>
  .fab-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  
  .fab-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
  }
  
  .fab-main {
    width: 56px;
    height: 56px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    transition: background-color 0.3s;
  }
  
  .fab-main:hover {
    background-color: #0056b3;
  }
  
  .fab-button {
    width: 46px;
    height: 46px;
    border: none;
    border-radius: 50%;
    color: white;
    font-size: 18px;
    cursor: pointer;
    box-shadow: 0 3px 6px rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .whatsapp {
    background-color: #25D366;
  }
  
  .whatsapp:hover {
    background-color: #1eb75a;
  }
  
  .phone {
    background-color: #17a2b8;
  }
  
  .phone:hover {
    background-color: #138496;
  }
  
  /* Transitions */
  .fab-enter-from, .fab-leave-to {
    opacity: 0;
    transform: translateY(10px);
  }
  
  .fab-enter-to, .fab-leave-from {
    opacity: 1;
    transform: translateY(0);
  }
  
  .fab-enter-active, .fab-leave-active {
    transition: all 0.3s ease;
  }
  </style>
  