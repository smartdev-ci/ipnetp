<template>
    <div>
      <!-- Bulle de chat flottante -->
      <button class="chat-bubble" @click="toggleChat">
        <svg xmlns="http://www.w3.org/2000/svg" height="50" width="60" viewBox="0 0 640 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="#007bff" d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2s0 0 0 0s0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.2-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9c0 0 0 0 0 0s0 0 0 0l-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"/></svg>
      </button>
      <!-- Fenêtre du chat -->
      <div v-if="isChatOpen" class="chat-box">
        <div class="chat-header">
          <h3 style="color: white;">FAQ - Admissions</h3>
          <button @click="toggleChat">✖</button>
        </div>
  
        <div class="chat-content">
          <p class="bot-message">Choisissez une question :</p>
  
          <div class="question-bubbles">
            <button 
              v-for="(response, question) in faq" 
              :key="question" 
              class="bubble" 
              @click="selectQuestion(question, response)"
            >
              {{ question }}
            </button>
          </div>
  
          <div v-if="selectedQuestion" class="response">
            <strong>Vous :</strong> {{ selectedQuestion }}
            <p><strong>Bot :</strong> {{ selectedResponse }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ChatBot",
    data() {
      return {
        isChatOpen: false,
        selectedQuestion: "",
        selectedResponse: "",
        faq: {
          "Quelles sont les conditions d'admission ?": "Nos conditions varient selon la formation. Un diplôme du niveau requis et un dossier de candidature sont généralement nécessaires.",
          "Quels sont les frais de scolarité ?": "Les frais dépendent du programme choisi. Contactez-nous pour un devis détaillé.",
          "Quelles spécialités proposez-vous ?": "Nous offrons des formations en Informatique, Gestion, Génie Civil, et bien plus ! Consultez notre site pour la liste complète.",
          "Comment puis-je m'inscrire ?": "L'inscription se fait en ligne via notre portail ou en nous rendant visite sur le campus.",
          "Y a-t-il des bourses disponibles ?": "Oui, nous proposons des bourses selon le mérite et la situation financière. Plus d'infos sur notre site.",
        },
      };
    },
    methods: {
      toggleChat() {
        this.isChatOpen = !this.isChatOpen;
        this.selectedQuestion = "";
        this.selectedResponse = "";
      },
      selectQuestion(question, response) {
        this.selectedQuestion = question;
        this.selectedResponse = response;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Bulle flottante */
  .chat-bubble {
    position: fixed;
    bottom: 20px;
    left: 20px;
    background-color: #fff;
    border: none;
    width: 60px;
    height: 60px;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  .chat-bubble  svg{
    height: 20%;
    width: 200px;
    transform: scale(2.5);
  }
  
  .chat-bubble img {
    width: 30px;
    height: 30px;
  }
  
  /* Fenêtre du chat */
  .chat-box {
    position: fixed;
    bottom: 80px;
    left: 20px;
    width: 320px;
    height: 400px;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  
  /* En-tête du chat */
  .chat-header {
    background: #0f1e3d;
    color: white;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .chat-header button {
    background: none;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
  }
  
  /* Contenu du chat avec scrollbar */
  .chat-content {
    flex: 1;
    padding: 10px;
    font-size: 14px;
    overflow-y: auto;
    max-height: 340px;
  }
  
  /* Message du bot */
  .bot-message {
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  /* Bulles de questions */
  .question-bubbles {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .bubble {
    background: #e0e0e0;
    border: none;
    padding: 10px;
    border-radius: 20px;
    cursor: pointer;
    text-align: left;
    font-size: 14px;
    transition: 0.3s;
  }
  
  .bubble:hover {
    background: #0f1e3d;
    color: white;
  }
  
  /* Réponse */
  .response {
    margin-top: 15px;
    padding: 10px;
    background: #f3f3f3;
    border-radius: 10px;
  }
  </style>
  