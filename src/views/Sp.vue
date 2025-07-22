<template>
  <main>
    <section class="s1">
      <h2>Service de production (SP)
</h2>

      <div class="box-img">
        <img
          src="https://ipnetp.ci/wp-content/uploads/2023/12/production2.jpg"
          alt=""
        />
      </div>

      <div class="box-txt">
        <p>
Le Service de Production (SP) représente un élément essentiel de l’infrastructure de l’Institut, étant composé de six (06) ateliers spécialisés. Ces ateliers, à savoir la Menuiserie, la Construction Métallique, la Fabrication Mécanique, la Mécanique Automobile, le Génie Électrique, et la Conception Assistée par Ordinateur/Dessin Assisté par Ordinateur (CAO/DAO), forment un ensemble diversifié de compétences techniques destinées à offrir aux étudiants une expérience pratique approfondie.
        </p>
        <p>
Le SP est chargé de superviser la gestion quotidienne de ces ateliers, en veillant à ce que chaque domaine soit équipé des ressources nécessaires pour garantir un apprentissage pratique de qualité. Chacun des ateliers joue un rôle spécifique dans la préparation des apprenants aux réalités concrètes du monde professionnel, en fournissant une formation spécialisée correspondant aux exigences de chaque domaine technique.


        </p>
        <p>
La Menuiserie, par exemple, se concentre sur les compétences liées à la transformation du bois, tandis que la Construction Métallique se consacre aux techniques de travail des métaux. La Fabrication Mécanique couvre les processus de production industrielle, tandis que la Mécanique Automobile se concentre sur les systèmes automobiles complexes. Le Génie Électrique s’attache aux principes fondamentaux de l’électricité, et la CAO/DAO offre une approche moderne et informatisée du dessin technique.
        </p>
        <p>
Chaque atelier du SP fonctionne comme un laboratoire vivant où les étudiants peuvent mettre en pratique les concepts théoriques appris en classe. Cela permet de renforcer leur compréhension des principes techniques et de développer des compétences pratiques essentielles à leur future carrière. Le SP s’engage ainsi à offrir un environnement d’apprentissage dynamique et stimulant, favorisant le développement de compétences professionnelles pertinentes
        </p>
        <p>
La diversité des ateliers au sein du Service de Production reflète la volonté de l’Institut de fournir une formation complète et spécialisée, couvrant un large éventail de domaines techniques. En combinant l’expertise pratique avec les enseignements théoriques, le SP contribue activement à la préparation des étudiants à des carrières réussies et productives dans le domaine de l’enseignement technique et professionnel. En fin de compte, ces ateliers constituent une pièce maîtresse de l’engagement continu de l’institution envers l’excellence dans l’éducation technique.


        </p>
      </div>
    </section>

    <section class="form-container">
      <h2 class="form-title">Écrire au SP</h2>
      <form @submit.prevent="handleSubmit" class="form-box">
        <div class="form-row">
          <div class="form-group">
            <label for="nom">Votre nom</label>
            <input type="text" id="nom" v-model="form.nom" required />
          </div>

          <div class="form-group">
            <label for="prenom">Votre prénom</label>
            <input type="text" id="prenom" v-model="form.prenom" required />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="contact">Votre contact</label>
            <input type="tel" id="contact" v-model="form.contact" required />
          </div>

          <div class="form-group">
            <label for="email">Votre e-mail</label>
            <input type="email" id="email" v-model="form.email" required />
          </div>
        </div>

        <div class="form-group">
          <label for="objet">Objet</label>
          <input type="text" id="objet" v-model="form.objet" required />
        </div>

        <div class="form-group">
          <label for="message">Votre message (facultatif)</label>
          <textarea id="message" rows="5" v-model="form.message"></textarea>
        </div>

        <button type="submit" class="submit-btn">Envoyer</button>
      </form>
    </section>
  </main>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        nom: '',
        prenom: '',
        contact: '',
        email: '',
        objet: '',
        message: '',
      }
    }
  },
  methods: {
    handleSubmit() {
      console.log('Formulaire envoyé :', this.form);
      alert('Message envoyé avec succès !');
    }
  }
}
</script>

<style scoped>

.form-row {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.form-row .form-group {
  flex: 1 1 100%;
}
@media (min-width: 600px) {
  .form-row .form-group {
    flex: 1 1 calc(50% - 0.5rem);
  }
}

/* Styles existants inchangés */
section.s1 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
main {
  padding-top: 100px;
  background-color: #0f1e3d0a;
}
:root {
  --blue: #007bff;
  --blue-light: #e6f0ff;
  --dark: #0f1e3d;
  --text-color: #333;
  --bg: #f9f9f9;
}
.banner {
  background-color: var(--dark);
  color: white;
  padding: 4rem 1rem;
  text-align: center;
  position: relative;
}
section.s1 {
  padding: 3rem 1.5rem;
  background-color: var(--bg);
  max-width: 1200px;
  margin: auto;
}
section.s1 h2 {
  font-size: 2rem;
  color: white;
  background-color: #1A3397;
  padding: 20px;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  margin-bottom: 2rem;
  text-align: center;
}
.box-img {
  overflow: hidden;
  width: 55vw;
  height: 30vw;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 123, 255, 0.15);
  margin-bottom: 2rem;
}
img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.box-txt {
  box-shadow: 0 4px 16px rgba(0, 123, 255, 0.15);
  background-color: #fff;
  padding: 20px;
  border-radius: 12px;
}
.form-container {
  overflow: hidden;
  position: relative;
  margin: 70px auto;
  background-color: #ffffff;
  color: #0f1e3d;
  padding: 2rem;
  width: 70vw;
  max-width: 800px;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}

.form-container::after{
  content: "";
  position: absolute;
  width: 110%;
  height: 15px;
  background-color: #007bff;
  left: 0;
  top: -5px;
}


.form-title {
  text-align: center;
  color: #3399FF;
  margin-bottom: 2rem;
  font-size: 1.8rem;
}
.form-box {
  display: grid;
  gap: 1.5rem;
}
.form-group {
  display: flex;
  flex-direction: column;
}
.form-group label {
  margin-bottom: 0.5rem;
  font-weight: bold;
}
.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}
.submit-btn {
  background-color: #3399FF;
  width: 20%;
  min-width: 200px;
  margin: auto;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}
.submit-btn:hover {
  background-color: #0070C9;
}
@media (max-width: 600px) {
  .form-container {
    padding: 1rem;
    width: 90vw;
  }
}
.description p {
  margin-bottom: 1.3rem;
  font-size: 1.05rem;
  color: var(--text-color);
  line-height: 1.7;
  text-align: justify;
}
@media screen and (max-width: 768px) {
  .formation-initiale h2 {
    font-size: 1.5rem;
  }
  .table-wrapper {
    padding: 1rem;
  }
}
</style>
