<template>
  <main class="page-container">
    <section class="s1">
      <div class="box-txt">
        <h2>Cellule des recherches pour l'anglais</h2>
        <div>
          <p>
            La Cellule des Recherches pour l'Anglais est une entité dédiée au
            sein d'une institution éducative ou d'un centre de formation, axée
            spécifiquement sur le perfectionnement et le développement de
            l'enseignement de la langue anglaise. Son objectif principal est de
            promouvoir la recherche, l'innovation pédagogique, et l'amélioration
            continue des programmes d'anglais.
          </p>
          <p>
            Au sein de cette cellule, des chercheurs et des experts en
            linguistique appliquée collaborent pour explorer de nouvelles
            méthodes d'enseignement, analyser les tendances éducatives, et
            développer des approches novatrices pour l'apprentissage de
            l'anglais. La recherche menée par la Cellule vise à répondre aux
            besoins spécifiques des apprenants, en tenant compte des évolutions
            dans le domaine de l'éducation et des exigences du marché du
            travail.
          </p>
          <p>
            Elle favorise également la collaboration avec d'autres institutions
            académiques, des partenaires internationaux, et des organismes
            spécialisés dans l'enseignement des langues. Ces partenariats
            permettent d'échanger des connaissances, de participer à des projets
            de recherche collaboratifs, et d'offrir des opportunités
            d'enrichissement pour les enseignants et les apprenants.
          </p>
          <p>
            La Cellule des Recherches pour l'Anglais joue un rôle essentiel dans
            la formation continue des enseignants d'anglais, en mettant en œuvre
            des programmes de perfectionnement professionnel, des ateliers et
            des formations spécialisées. Elle contribue ainsi à maintenir un
            corps enseignant qualifié et informé des dernières avancées dans
            l'enseignement de la langue anglaise.
          </p>
          <p>
            En résumé, cette cellule représente un centre d'excellence dédié à
            la recherche, au développement pédagogique, et à l'élévation des
            standards dans l'enseignement de l'anglais, contribuant ainsi à la
            qualité de l'éducation linguistique au sein de l'institution.
          </p>
        </div>
      </div>
      <div class="box-img">
        <img
          src="https://ipnetp.ci/wp-content/uploads/2023/12/apprendre-anglais-scaled-1-2048x1401.jpg"
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
  color: #007bff;
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
