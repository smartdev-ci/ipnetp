<template>
  <section class="about-section">
    <!-- Bannière -->
    <div class="banner">
      <div class="overlay">
        <h2>About Our University</h2>
        <p>
          We are one of the largest, most diverse universities in the USA with over 90,000 students
          and a further 30,000 studying across 180 countries for Kingster University.
        </p>
        <p>
          Kingster University was established by John Smith in 1920 for the public benefit and is
          recognized globally. Throughout our great history, Kingster has offered access to a wide
          range of academic opportunities.
        </p>
        <button class="read-more">Read More</button>
      </div>
    </div>

    <!-- Cartes informatives -->
    <div class="info-cards">
      <InfoCard icon="🎓" title="Education Services" description="Kingster University was established by John Smith in 1920 for the public benefit and is recognized." />
      <InfoCard icon="🌍" title="International Hubs" description="Kingster University was established by John Smith in 1920 for the public benefit and is recognized." />
      <InfoCard icon="📜" title="Bachelor’s and Master’s" description="Kingster University was established by John Smith in 1920 for the public benefit and is recognized." />
      <InfoCard icon="🏛" title="University Life" description="Kingster University was established by John Smith in 1920 for the public benefit and is recognized." />
    </div>
  </section>
</template>

<script>
// import InfoCard from "@/components/InfoCard.vue";

export default {
  // components: {
  //   InfoCard,
  // },
};
</script>

<style scoped>
.about-section {
  background: #0f1e3d;
  color: white;
  padding: 50px 0;
}

.banner {
  background: url("https://placehold.co/1200x400") no-repeat center center/cover;
  position: relative;
  padding: 60px 20px;
}

.overlay {
  background: rgba(0, 0, 0, 0.6);
  padding: 40px;
  text-align: left;
}

.read-more {
  background: #2ecc71;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
}

.info-cards {
  display: flex;
  justify-content: space-between;
  padding: 40px;
}
</style>
