<template>
  <section class="info-section">
    <div class="info-cards">
      <InfoCard icon="🏛" title="University Life" description="Overall in here" />
      <InfoCard icon="🎓" title="Graduation" description="Getting Diploma" />
      <InfoCard icon="⚽" title="Athletics" description="Sport Clubs" />
      <InfoCard icon="👥" title="Social" description="Overall in here" />
    </div>

    <div class="admission-container">
      <!-- Image ajoutée à gauche -->
      <div class="admission-image">
        <img src="https://ipnetp.ci/wp-content/uploads/2023/12/DG2.png" alt="Campus Life" />
      </div>

      <!-- Bloc Apply for Admission -->
      <div class="admission-box">
        <h2>Mot de la Directrice</h2>
        <p><span class="highlight">Fall 2019 applications</span> are now open</p>
        <p>
          We don’t just give students an education and experiences that set them up for success in a
          career.
        </p>
        <button class="apply-button">Apply Now</button>
      </div>
    </div>
  </section>
</template>

<script>
import InfoCard from '@/components/InfoCard.vue'

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
  max-width: 1320px;
  border-radius: 20px;
  align-items: center;
  justify-content: space-around;
}

/* Conteneur pour l'image + bloc de texte */
.admission-container {
  display: flex;
  align-items: stretch;
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
  background: url('https://placehold.co/600x300') no-repeat center center/cover;
  padding: 20px;
  color: white;
  width: 70%;
  border-radius: 10px;
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
