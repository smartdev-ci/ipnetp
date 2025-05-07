<template>
<HeroSection background="https://scontent.fabj7-1.fna.fbcdn.net/v/t39.30808-6/495367572_122206707464171003_906942137193410451_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHGem9psvlXeRUVw-nCMstkrRVQIYMWKaetFVAhgxYpp1bx3OY9BhpxvQHqPoSPR2CF4u11p4uUGtoT5nel6Vgi&_nc_ohc=Xt8IBYYjW5wQ7kNvwEvbuGe&_nc_oc=AdnhkT6JyIQ4aTo_5We0l0HM16znBzQUhWRluJ9RCRZZ9mzJ9uDBvSRnnJCZeTCgauI&_nc_zt=23&_nc_ht=scontent.fabj7-1.fna&_nc_gid=D7Pnnez1G5MCixLZx04mJg&oh=00_AfLtiDtZli-1ZACve9magPm4D7bh5xDnfWzUsXQl4sjnIQ&oe=6820F816">
  <h1 class="hero-title">LES MOTS DE LA DIRECTION</h1>
</HeroSection>
  <div class="page-container">
    <!-- Header Section -->
    <section class="header-direction">
      <!-- <h1>LES MOTS DE LA DIRECTION</h1> -->
    </section>

    <!-- Intro Section
      <section class="intro">
        <h2>Bienvenue à l'Ensemble Montplaisir !</h2>
        <p>
          Montplaisir est un ensemble scolaire situé à Valence dans la Drôme. Il se compose de 4 unités pédagogiques réparties sur deux sites :
        </p>
        <ul>
          <li>Le premier, situé dans les bâtiments historiques...</li>
          <li>Le second, situé dans la zone industrielle...</li>
        </ul>
      </section>
       -->
    <!-- First Content Section -->
    <section class="content">
      <div class="image-block">
        <img src="https://ipnetp.ci/wp-content/uploads/2023/12/DG2.png" />
      </div>
      <div class="text-block">
        <h2>Intégrer l'IPNETP</h2>
        <p>
          Chers étudiants, chers partenaires, chers visiteurs, <br>
          C’est avec une immense joie que je vous souhaite la bienvenue sur le site officiel de l’Institut Pédagogique
          National de l’Enseignement Technique et Professionnel (IPNETP).
          Depuis sa création, notre établissement s’engage à former des professionnels compétents, passionnés et prêts à
          relever les défis du monde de l’enseignement technique et de la formation professionnelle. Forts d’un corps
          enseignant qualifié, de programmes adaptés aux réalités du marché et d’un environnement propice à
          l’apprentissage, nous œuvrons chaque jour à l’excellence académique et à l’innovation pédagogique.
          Que vous soyez un étudiant en quête de formation, un professionnel désireux d’enrichir ses compétences, ou un
          partenaire souhaitant collaborer avec nous, sachez que l’IPNETP vous ouvre ses portes avec enthousiasme et
          engagement.
          Nous vous invitons à explorer notre site pour découvrir nos formations, nos actualités et nos opportunités.
          Ensemble, bâtissons l’avenir de l’éducation et de la formation professionnelle !
          Bienvenue à l’IPNETP !
        </p>
      </div>
    </section>

    <!-- Second Content Section (Reversed) -->
    <section class="content reverse">
      <div class="image-block">
        <img src="https://ipnetp.ci/wp-content/uploads/2023/12/2.jpg" alt="Illustration" />
      </div>
      <div class="text-block">
        <h2>Choisir une formation parmi des parcours variés...</h2>
        <p>
          Depuis sa création, l'IPNETP est une institution dédiée à la formation des futurs formateurs de l'enseignement
          technique. Sa mission principale consiste à transmettre des connaissances pédagogiques et techniques à travers
          des programmes complets alliant théorie et pratique. L'École actualise régulièrement ses contenus pour
          s'adapter aux évolutions technologiques et pédagogiques ainsi qu'aux exigences du marché du travail. En créant
          un environnement d'apprentissage dynamique et collaboratif, elle favorise les échanges entre formateurs en
          formation. Son rôle est donc essentiel pour préparer une nouvelle génération de professionnels qualifiés,
          contribuant ainsi à l'amélioration de l'éducation professionnelle.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import HeroSection from "../components/home/HeroSection.vue";
</script>

<style>
.page-container {
  padding-top: 10%;
  width: 80%;
  margin: 0 auto;
  font-family: sans-serif;
  color: #12274a;
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
}

.intro ul {
  list-style-type: disc;
  margin-left: 24px;
  margin-top: 8px;
}

.content {
  display: flex;
  align-items: center;
  margin: 20px 0;

  .text-block {
    box-shadow: 0 0 35px 0 rgba(0, 0, 0, .09);
    border-radius: 20px;
  }
}

.content.reverse {
  flex-direction: row-reverse;
}

.text-block {
  width: 50%;
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
  width: 50%;
}

.image-block img {
  width: 100%;
  border-radius: 8px;
  height: 330px;
}
</style>