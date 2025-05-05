<template>
    <div class="home">
      <h1>Bienvenue sur la page d'accueil</h1>
      <p>Ceci est une page d'accueil exemple pour votre application Vue.js.</p>
      <button @click="goToDirection">Aller à la Direction</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router'
  
  // Utilisation du routeur pour naviguer vers la page de direction
  const router = useRouter()
  
  const goToDirection = () => {
    router.push('/direction') // Redirection vers la route "/direction"
  }
  </script>
  
  <style scoped>
  .home {
    text-align: center;
    padding: 2rem;
    background-color: #f7f7f7;
  }
  
  h1 {
    color: #333;
    font-size: 2rem;
  }
  
  p {
    color: #666;
    font-size: 1.2rem;
  }
  
  button {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  