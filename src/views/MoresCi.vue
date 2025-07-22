<template>
  <main class="page-container">
    <section class="s1">
      <div class="box-txt">
        <h2>MORES-CI (Section IPNETP)</h2>
        <div>
          <p>
            Mouvement Syndical pour la recherche et l'enseignement supérieur de
            COTE D'IVOIRE <br /> <br>

            L'objectif principal du MORES-CI IPNETP est d'assurer la défense des
            droits des travailleurs de l'institut, que ce soit en matière de
            conditions de travail, de rémunération équitable, ou de
            participation à la prise de décisions institutionnelles. En tant
            qu'interface entre les employés de l'IPNETP et les instances
            décisionnelles, le MORES-CI IPNETP œuvre pour la création d'un
            environnement de travail propice à l'épanouissement professionnel et
            à l'excellence dans l'enseignement et la recherche.
          </p>
          <p>
            Outre ses responsabilités syndicales traditionnelles, cette section
            s'engage activement dans la promotion de la recherche scientifique
            au sein de l'institut. Elle participe également à des initiatives de
            plaidoyer en faveur d'une éducation supérieure de qualité en Côte
            d'Ivoire, contribuant ainsi à l'amélioration continue du secteur
            éducatif.
          </p>
          <p>
            Le MORES-CI IPNETP incarne ainsi une communauté syndicale déterminée
            à défendre les droits et les intérêts des travailleurs de la
            recherche et de l'enseignement supérieur au sein de l'IPNETP. Son
            engagement renforce la cohésion et la dynamique institutionnelle,
            contribuant à l'épanouissement professionnel et académique de ses
            membres.
          </p>
        </div>
      </div>
      <div class="box-img">
        <img
          src="https://ipnetp.ci/wp-content/uploads/2023/12/mers-ci.jpg"
          alt=""
        />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
section {
  margin: 0;
  display: flex;
  gap: 3%;
  height: fit-content;
  padding: 30px 0;
  width: 85vw;
  border-top: 1px solid rgba(55, 56, 58, 0.201);
}
section > div {
  border-radius: 15px;
}

.box-img {
  width: 45vw;
  height: 30vw;
  overflow: hidden;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.box-txt {
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  padding: 8px;
}

.box-txt div {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.box-txt h2 {
  color: #1A3397;
  font-size: 28px;
  font-weight: bold;
}

h1 {
  border-bottom: solid 2px;
  width: fit-content;
  margin: auto;
}

.page-container {
  padding-top: 140px;
  width: 80%;
  margin: 0 auto;
  font-family: sans-serif;
  color: #12274a;
  position: relative;
  height: fit-content;
  display: flex;
  justify-content: start;
  flex-direction: column;
}

/* Responsivité */

@media (max-width: 1600px) {
  section {
    flex-direction: column;
    align-items: start;
  }

  .box-img,
  .box-txt {
    width: 100%;
  }
  .box-img {
    width: 60%;
    height: 30vw;
  }
}
</style>
