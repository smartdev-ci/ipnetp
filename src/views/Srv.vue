<template>
  <main>
    <section class="s1">
      <h2>Service de recherche et de valorisation (SRV)</h2>

      <div class="box-img">
        <img
          src="https://ipnetp.ci/wp-content/uploads/2023/12/SRV.webp"
          alt=""
        />
      </div>

      <div class="box-txt">
        <p>
          Le Service de Recherche et de Valorisation (SRV) joue un rôle central
          au sein de l'institution en élaborant une politique de recherche
          pédagogique, technologique et didactique. En tant que force motrice
          derrière l'innovation éducative, le SRV s'efforce de définir des
          orientations stratégiques pour la recherche qui contribuent à
          l'amélioration constante des pratiques pédagogiques et à l'adaptation
          aux avancées technologiques.
        </p>
        <p>
          Une autre mission essentielle du SRV consiste à gérer les équipes et
          les projets de recherche. Cela implique la coordination des chercheurs
          et des collaborateurs, favorisant une approche collaborative et
          multidisciplinaire pour aborder les défis complexes de l'enseignement
          technique et professionnel. La gestion proactive des projets vise à
          maximiser l'efficacité des efforts de recherche et à garantir des
          résultats significatifs.
        </p>
        <p>
          Le SRV est également chargé d'assurer le suivi, le contrôle et
          l'évaluation des activités de recherche. En mettant en place des
          mécanismes de suivi rigoureux, le service s'assure que les projets
          avancent conformément aux objectifs définis. Le contrôle et
          l'évaluation garantissent la qualité des travaux de recherche et
          permettent d'ajuster les approches si nécessaire, favorisant ainsi une
          recherche de haut niveau.
        </p>
        <p>
          La diffusion des connaissances est une priorité pour le SRV, qui
          s'engage à publier les résultats de recherche. La mise à disposition
          des découvertes contribue à l'enrichissement du corpus de
          connaissances dans le domaine de l'éducation technique et
          professionnelle, tout en renforçant la visibilité et la réputation de
          l'institution dans la communauté académique.
        </p>
        <p>
          Enfin, le SRV organise des tables rondes, des séminaires et des
          colloques pour promouvoir un échange continu d'idées et de
          connaissances. Ces événements créent un forum propice à la
          collaboration entre chercheurs, praticiens et experts, favorisant
          ainsi l'émergence de nouvelles perspectives et approches innovantes
          dans le domaine de l'éducation.
        </p>
        <P>
          En conclusion, le Service de Recherche et de Valorisation (SRV) est un
          pilier fondamental de l'institution, contribuant activement à
          l'avancement de la recherche et à la valorisation des connaissances
          dans le domaine de l'enseignement technique et professionnel. Ses
          missions variées reflètent l'engagement de l'institution envers
          l'excellence académique, l'innovation et la contribution significative
          au progrès éducatif.
        </P>
      </div>
    </section>

    <section class="form-container">
      <h2 class="form-title">Ecrire au SRV</h2>
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
  name: "ContactForm",
  data() {
    return {
      form: {
        nom: "",
        prenom: "",
        contact: "",
        email: "",
        objet: "",
        message: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      console.log("Formulaire envoyé :", this.form);
      alert("Message envoyé avec succès !");
    },
  },
};
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
  background-color: #0f1e3d;
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 2rem;
  text-align: center;
}
.box-img {
  overflow: hidden;
  width: 55vw;
  height: 40vw;
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

.form-container::after {
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
  color: #007bff;
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
  background-color: #007bff;
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
  background-color: #0056b3;
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
