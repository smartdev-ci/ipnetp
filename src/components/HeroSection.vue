<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="highlight">INSTITUT PEDAGOGIQUE</h1>
      <h2><span class="highlight">NATIONALE DE L'ENSEIGNEMENT</span></h2>
      <h2><span class="highlight">TECHNIQUE ET PROFESSIONNELLE</span></h2>
      <!-- <button class="cta-button">Take A Tour</button> -->
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
.hero {
  background: url('https://zupimages.net/up/25/11/dk7p.png') no-repeat center center/cover;
  width: 100%;
  height: 500px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  text-align: left;
  color: white;
  padding: 10px;
  margin-top: 120px;
}

.hero-content {
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 10px;
}

.highlight {
  font-size: 36px;
  font-weight: bold;
}

.cta-button {
  background-color: #2ecc71;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
}

.cta-button:hover {
  background-color: #27ae60;
}
</style>
