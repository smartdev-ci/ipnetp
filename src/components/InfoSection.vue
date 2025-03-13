<template>
  <section class="info-section">
    <div class="info-cards">
      <InfoCard icon="🏛" title="Formation initiale" description="Formation initiale" />
      <InfoCard icon="🎓" title="Formation continue" description="Formation continue" />
      <InfoCard icon="💡" title="Recherche et innovation" description="Recherche et innovation" />
      <InfoCard icon="👥" title="Conseil & Expertise" description="Conseil & Expertise" />
    </div>

    <div class="admission-container">
      <!-- Image ajoutée à gauche -->
      <div class="admission-image">
        <img src="https://ipnetp.ci/wp-content/uploads/2023/12/DG2.png" alt="Campus Life" />
      </div>

      <!-- Bloc Apply for Admission -->
      <div class="admission-box">
        <h2>Mot de la Directrice</h2>
        <p>
          Chers étudiants, chers partenaires, chers visiteurs,
          <br>
          C’est avec une immense joie que je vous souhaite la bienvenue sur le site officiel de l’Institut Pédagogique
          National de l’Enseignement Technique et Professionnel (IPNETP).
          <br>
          Depuis sa création, notre établissement s’engage à former des professionnels compétents, passionnés et prêts à
          relever les défis du monde de l’enseignement technique et de la formation professionnelle. Forts d’un corps
          enseignant qualifié, de programmes adaptés aux réalités du marché et d’un environnement propice à
          l’apprentissage, nous œuvrons chaque jour à l’excellence académique et à l’innovation pédagogique.
          <br />
          Que vous soyez un étudiant en quête de formation, un professionnel désireux d’enrichir ses compétences, ou un
          partenaire souhaitant collaborer avec nous, sachez que l’IPNETP vous ouvre ses portes avec enthousiasme et
          engagement.
          <br />
          Nous vous invitons à explorer notre site pour découvrir nos formations, nos actualités et nos opportunités.
          Ensemble, bâtissons l’avenir de l’éducation et de la formation professionnelle !
          <br />
          Bienvenue à l’IPNETP !
        </p>
        <!-- <button class="apply-button">Apply Now</button> -->
      </div>
    </div>
  </section>
</template>

<script>
import InfoCard from './InfoCard.vue'

export default {
  components: {
    InfoCard,
  },
}
</script>

<style scoped>
/* Section principale */
.info-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background: #f8f8f8;
}

/* Cartes d'information */
.info-cards {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  background: white;
  width: 80%;
  padding: 20px;
  /* z-index: 9999; */
  margin: -60px auto 0px auto;
  padding: 0px 0px 0px 0px;
  max-width: 100%;
  border-radius: 20px;
  align-items: center;
  justify-content: space-around;
}

/* Conteneur pour l'image + bloc de texte */
.admission-container {
  display: flex;
  align-items: center;
  /* gap: 20px; */
  width: 100%;
  justify-content: space-between;
  margin: 10px;
  
}

/* Style de l'image */
.admission-image img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
}

/* Bloc Apply for Admission */
.admission-box {
  /* background: url('https://placehold.co/600x300') no-repeat center center/cover; */
  padding: 20px;
  color: white;
  width: 70%;
  border-radius: 10px;
  text-align: left;
  color: black;
  text-align: justify;
}

.apply-button {
  background-color: #2ecc71;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
}
</style>
