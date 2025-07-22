<template>
  <main>
    <section class="s1">
      <h2>Centre de Recherche et de Production ( CREP)</h2>

      <div class="box-img">
        <img
          src="https://ipnetp.ci/wp-content/uploads/2023/12/crep-2.jpg"
          alt=""
        />
      </div>

      <div class="box-txt">
        <p>
          Le Centre de Recherche et de Production (CREP) occupe une place
          centrale au sein de l'Institut de Pédagogie Nationale de
          l'Enseignement Technique et Professionnel (IPNETP) avec pour mission
          première le renforcement de la synergie et de la coordination des
          activités de recherche. En tant qu'entité dédiée à l'avancement du
          savoir, le CREP s'engage à favoriser un environnement propice à
          l'échange d'idées novatrices et à la collaboration entre les
          chercheurs de l'institut.
        </p>
        <p>
          L'objectif fondamental du CREP est d'assurer une liaison harmonieuse
          entre les différents départements de recherche au sein de l'IPNETP,
          favorisant ainsi la mise en commun des ressources intellectuelles et
          matérielles. Cette synergie renforcée contribue à l'émergence de
          projets de recherche innovants et à la promotion d'une culture de
          l'excellence académique au sein de l'institution.
        </p>
        <p>
          Parallèlement, le CREP joue un rôle essentiel dans la dynamisation des
          activités de production au sein de l'IPNETP. En favorisant la mise en
          œuvre de projets de recherche appliquée, le centre contribue
          directement à la création de connaissances pratiques et exploitables.
          Cette approche holistique vise à combler le fossé entre la théorie et
          la pratique, renforçant ainsi la pertinence des formations dispensées
          au sein de l'institut.
        </p>
        <p>
          Le CREP, en tant que catalyseur de l'innovation, encourage également
          la participation active du corps enseignant, des étudiants et du
          personnel administratif aux projets de recherche et de production.
          Cette inclusion favorise un environnement collaboratif, stimulant
          ainsi le développement d'idées novatrices et le partage d'expertise au
          sein de la communauté académique.
        </p>
        <p>
          développement d'idées novatrices et le partage d'expertise au sein de
          la communauté académique. En somme, le CREP incarne l'engagement de
          l'IPNETP envers l'avancement continu de la recherche et de la
          production dans le domaine de l'enseignement technique et
          professionnel. En promouvant l'excellence académique, la collaboration
          interdisciplinaire et l'innovation, le CREP contribue de manière
          significative à la réalisation de la mission globale de l'institut
          dans la préparation des apprenants aux défis dynamiques du monde
          professionnel.
        </p>
        <h4>MISSIONS</h4>
        <p>
          Le Centre de Recherche et de Production (CREP) assume des missions
          cruciales au sein de l'Institut de Pédagogie Nationale de
          l'Enseignement Technique et Professionnel (IPNETP). En tant qu'entité
          multidisciplinaire, le CREP s'est fixé pour objectif principal
          d'assurer une recherche technologique, pédagogique et didactique de
          pointe. Cela implique la mobilisation d'experts dans divers domaines
          afin de contribuer à l'innovation et à l'amélioration continue des
          pratiques pédagogiques au sein de l'institut.
        </p>
        <p>
          Une autre mission majeure du CREP est l'élaboration, la production et
          la diffusion d'aides pédagogiques et didactiques. Cela inclut le
          développement de ressources éducatives novatrices visant à optimiser
          l'expérience d'apprentissage des étudiants. Le centre joue ainsi un
          rôle crucial dans la mise à disposition d'outils didactiques modernes,
          adaptés aux besoins évolutifs du domaine de l'enseignement technique
          et professionnel.
        </p>
        <p>
          Parallèlement, le CREP est chargé d'assurer la production des
          ateliers, contribuant ainsi à la mise en pratique des connaissances
          acquises par les étudiants. Cette mission s'inscrit dans une démarche
          concrète visant à préparer les apprenants aux réalités du monde
          professionnel en favorisant l'acquisition de compétences pratiques et
          techniques essentielles.
        </p>
        <p>
          Enfin, le CREP assume un rôle consultatif en assurant des études et
          conseils. Les experts du centre sont mobilisés pour fournir des
          analyses approfondies et des recommandations stratégiques, contribuant
          ainsi à l'orientation globale de l'IPNETP. Cette dimension conseil
          renforce l'engagement de l'institut dans l'excellence académique et
          l'adaptation constante aux évolutions du secteur éducatif et
          professionnel.
        </p>
        <p>
          En conclusion, le CREP incarne la polyvalence et l'engagement de
          l'IPNETP envers l'innovation, l'excellence pédagogique et la
          préparation efficace des étudiants aux défis du monde professionnel.
          Ses missions diversifiées démontrent un engagement continu envers
          l'amélioration constante des normes éducatives et la promotion d'une
          éducation technique et professionnelle de qualité.
        </p>
      </div>
    </section>

    <section class="form-container">
      <h2 class="form-title">Ecrire au Centre de Recherche et de Production ( CREP)</h2>
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
  color: #4d4f54;
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
