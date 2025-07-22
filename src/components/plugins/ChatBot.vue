<template>
  <div>
    <!-- Bulle de chat flottante -->
    <button class="chat-bubble" @click="toggleChat">
      <i class="fas fa-question-circle"></i>
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
  font-size: 28px;
  color: red;
}

.chat-bubble i {
  pointer-events: none;
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
  background: #1A3397;
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
