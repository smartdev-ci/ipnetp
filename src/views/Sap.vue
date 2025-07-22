<template>
  <main>
    <section class="s1">
      <h2>Service des appuis pédagogiques (SAP)</h2>

      <div class="box-img">
        <img
          src="https://ipnetp.ci/wp-content/uploads/2023/12/SAP.webp"
          alt=""
        />
      </div>

      <div class="box-txt">
        <p>
          L'École de Formation Initiale assume une mission cruciale dans le
          domaine de l'éducation en étant spécifiquement chargée de la formation
          initiale des formateurs de l'enseignement technique et de la
          formation. Son objectif premier est de préparer ces futurs formateurs
          à exercer leur métier avec excellence et à répondre aux besoins
          évolutifs du secteur de l'enseignement technique.
        </p>
        <p>
          Cette institution joue un rôle central dans la transmission des
          connaissances pédagogiques, des compétences techniques et des méthodes
          d'enseignement aux formateurs en devenir. Elle s'engage à offrir des
          programmes de formation complets, intégrant à la fois des aspects
          théoriques et pratiques, pour garantir une préparation holistique de
          ces professionnels.
        </p>
        <p>
          L'École veille également à actualiser constamment ses programmes pour
          refléter les évolutions technologiques, les nouvelles tendances
          pédagogiques et les exigences du marché du travail. Ainsi, elle
          contribue à former des formateurs adaptés aux réalités actuelles et
          capables d'assurer une formation pertinente et de qualité.
        </p>
        <p>
          En favorisant un environnement d'apprentissage dynamique et en
          encourageant la collaboration entre les formateurs en formation,
          l'École de Formation Initiale crée une communauté professionnelle où
          l'échange de connaissances et d'expériences enrichit la préparation de
          chacun.
        </p>
        <p>
          En résumé, cette école assume la responsabilité stratégique de
          façonner la prochaine génération de formateurs en enseignement
          technique, contribuant ainsi à l'amélioration continue de l'éducation
          professionnelle et à la préparation des apprenants à relever les défis
          du monde professionnel.
        </p>
      </div>
    </section>

    <section class="form-container">
      <h2 class="form-title">Écrire au SAP</h2>
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
  background-color: #3399FF;
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
