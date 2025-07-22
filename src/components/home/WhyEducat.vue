<script setup lang="ts">
import AppButton from '../common/AppButton.vue'
</script>

<template>
  <section class="why-educat ">
    <div class="why-educat-header">
      <h2>POURQUOI L'IPNETP ?</h2>
    </div>
    <div class="why-educat-content">
      <div class="why-educat-text">
        <p>
          L’IPNETP est la référence nationale en formation de formateurs pour l’enseignement technique et professionnel.
          Grâce à son expertise reconnue, ses programmes de qualité et son ouverture à l’innovation pédagogique,
          l’Institut prépare efficacement ses apprenants aux exigences du terrain.
          <br>
          Choisir l’IPNETP, c’est investir dans une formation solide, orientée vers l’emploi et le développement des
          compétences.
        </p>
        <AppButton class="view_more" text="En savoir plus" type="primary" href="#" />
      </div>
      <div class="why-educat-image">
        <img
          src="https://ipnetp.ci/wp-content/uploads/slider/cache/c3bf1008026890e2e7f32d3dfcbf5688/Capture-decran-2025-04-21-a-6.25.08%E2%80%AFPM.png"
          alt="Students" />
      </div>
    </div>
  </section>
</template>

<style scoped>

.view_more{
  background-color: #C23B22;
}

.view_more:hover{
  background-color: #ffffff;
  color: #0f1e3d;
}

.why-educat {
  background-color: #0070C9;
  color: #fff;
  padding: 0;
  /* overflow: hidden; */
  margin-top: 5%;
}

.why-educat-header {
  background-color: #1A3397;
  clip-path: polygon(0 0, 450px 0%, 528px 100%, 0% 100%);
  padding: 1rem 3rem;
  font-size: 1.8rem;
  font-weight: bold;
  transform: translateY(-25px);
}

.why-educat-header h2 {
  margin: 0;
  color: white;
}

.why-educat-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
  flex-wrap: wrap;
  gap: 2rem;
}

.why-educat-text {
  flex: 1;
  max-width: 600px;
  font-size: 1rem;
  line-height: 1.8;
}

.why-educat-text p {
  margin-bottom: 2rem;
  text-align: justify;
}

.why-educat-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.why-educat-image img {
  max-height: 350px;
  object-fit: contain;
}

@media (max-width: 768px) {
  .why-educat-header {
    clip-path: polygon(0 0, 55% 0, 65% 100%, 0% 100%);
    font-size: 16px;
  }
  
  .why-educat-header h2{
    font-size: 1.3rem;
  }

  .why-educat-content {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }

  .why-educat-text {
    max-width: 100%;
  }
}

@media (max-width: 468px) {
  .why-educat-header {
    clip-path: polygon(0 0, 55% 0, 65% 100%, 0% 100%);
    font-size: 16px;
  }
  
  .why-educat-header h2{
    font-size: 1rem;
  }

  .why-educat-content {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }
  
}


@media (max-width: 418px) {
  
  .why-educat-header h2{
    font-size: 0.7rem;
  }

  
}


</style>
