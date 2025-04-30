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
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour, or randomised words which don't look even slightly believable. If you are going
          to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of
          text amr songr balga ami toami valo lasi ciri din akr dali
        </p>
        <AppButton text="En savoir plus" type="primary" href="#" />
      </div>
      <div class="why-educat-image">
        <img src="https://ipnetp.ci/wp-content/uploads/slider/cache/c3bf1008026890e2e7f32d3dfcbf5688/Capture-decran-2025-04-21-a-6.25.08%E2%80%AFPM.png" alt="Students" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-educat {
  background-color: #2e4356;
  color: #fff;
  padding: 0;
  /* overflow: hidden; */
  margin-top: 7%;
}

.why-educat-header {
  background-color: #0f1e3d;
  clip-path: polygon(0 0, 30% 0%, 35% 100%, 0% 100%);
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
    font-size: 1.4rem;
    clip-path: polygon(0 0, 95% 0, 100% 100%, 0% 100%);
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
</style>
