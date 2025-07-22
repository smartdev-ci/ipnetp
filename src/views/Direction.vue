<template>
  <div class="page-container">
    <h1>Mot de la directrice</h1>
    <section class="content">
      <div class="image-block dg-img">
        <img src="/images/dg.jpg" />
      </div>
      <div class="text-block">
        <h2>Intégrer l'IPNETP</h2>
        <p>
          Chers étudiants, chers partenaires, chers visiteurs, <br />
          C'est avec une immense joie que je vous souhaite la bienvenue sur le
          site officiel de l'Institut Pédagogique National de l'Enseignement
          Technique et Professionnel (IPNETP). Depuis sa création, notre
          établissement s'engage à former des professionnels compétents,
          passionnés et prêts à relever les défis du monde de l'enseignement
          technique et de la formation professionnelle. Forts d'un corps
          enseignant qualifié, de programmes adaptés aux réalités du marché et
          d'un environnement propice à l'apprentissage, nous œuvrons chaque jour
          à l'excellence académique et à l'innovation pédagogique. Que vous
          soyez un étudiant en quête de formation, un professionnel désireux
          d'enrichir ses compétences, ou un partenaire souhaitant collaborer
          avec nous, sachez que l'IPNETP vous ouvre ses portes avec enthousiasme
          et engagement. Nous vous invitons à explorer notre site pour découvrir
          nos formations, nos actualités et nos opportunités. Ensemble,
          bâtissons l'avenir de l'éducation et de la formation professionnelle !
          Bienvenue à l'IPNETP !
        </p>
      </div>
    </section>

    <!-- Second Content Section (Reversed) -->
    <section class="content reverse">
      <div class="image-block">
        <img
          src="https://ipnetp.ci/wp-content/uploads/2023/12/2.jpg"
          alt="Illustration"
        />
      </div>
      <div class="text-block">
        <h2>Choisir une formation parmi des parcours variés...</h2>
        <p>
          Depuis sa création, l'IPNETP est une institution dédiée à la formation
          des futurs formateurs de l'enseignement technique. Sa mission
          principale consiste à transmettre des connaissances pédagogiques et
          techniques à travers des programmes complets alliant théorie et
          pratique. L'École actualise régulièrement ses contenus pour s'adapter
          aux évolutions technologiques et pédagogiques ainsi qu'aux exigences
          du marché du travail. En créant un environnement d'apprentissage
          dynamique et collaboratif, elle favorise les échanges entre formateurs
          en formation. Son rôle est donc essentiel pour préparer une nouvelle
          génération de professionnels qualifiés, contribuant ainsi à
          l'amélioration de l'éducation professionnelle.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style>
h1 {
  border-bottom: solid 2px;
  width: fit-content;
  margin: auto;
  color: #1A3397;
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

.header-direction {
  text-align: center;
  /* margin-top: 10px; */
}

.header h1 {
  font-size: 24px;
  font-weight: bold;
  position: relative;
  right: 40%;
  /* font-family: MisoBold, serif; */
}

.intro {
  margin: 20px 0;
  padding: 16px;
  background-color: #f3f4f6;
  border-radius: 8px;
}

.intro h2 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #000;
}

.intro ul {
  list-style-type: disc;
  margin-left: 24px;
  margin-top: 8px;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding-top: 70px;
}

.text-block {
  border-radius: 20px;
  box-shadow: 0 0 35px 0 rgba(0, 0, 0, 0.09);
}
.content.reverse {
  flex-direction: row-reverse;
  margin-bottom: 100px;
  gap: 50px;
}

.text-block {
  width: 500px;
  padding: 20px;

  p {
    text-align: justify;
  }
}

.text-block h2 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
}

.text-block p {
  margin-top: 8px;
}

.image-block {
  position: relative;
  width: 600px;
  height: 370px;
  box-shadow: 0 0 35px 0 rgba(0, 0, 0, 0.09);
}

.dg-img:after {
  position: absolute;
  content: 'Professeur Edmee MANSILLA';
  bottom: 3%;
  right: 0;
  height: fit-content;
  width: fit-content;
  padding: 8px;
  background-color: #1a339782;
  color: white;
  border-top-left-radius: 15px;
}

.image-block {
  border-radius: 8px;
}

.image-block img {
  width: 100%;
  border-radius: 8px;
  height: 100%;
  object-fit: cover;
}

/* Responsive */
@media (max-width: 1400px) {
  .content,
  .content.reverse {
    flex-direction: column;
  }

  .text-block {
    width: 100%;
    padding: 20px;
  }
}

@media (max-width: 668px) {
  .image-block {
    width: 88vw;
    height: 50vw;
    min-width: 300px;
    min-height: 100px;
  }
}
</style>
