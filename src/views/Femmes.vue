<template>
  <main class="page-container">
    <section class="s1">
      <div class="box-txt">
        <h2>Association des femmes de l'IPNETP (AFIPNETP)</h2>
        <div>
          <p>
            L'Institut s'engage à offrir une vaste gamme de formations, tant
            initiales que continues, visant à développer les compétences et les
            connaissances des apprenants. Dans le cadre de la formation
            initiale, notre mission est d'assurer une préparation complète pour
            l'entrée dans le monde professionnel, en mettant l'accent sur
            l'acquisition de compétences pratiques et théoriques.
          </p>
          <p>
            Parallèlement, l'Institut se consacre à la production didactique et
            industrielle, en élaborant des contenus pédagogiques innovants et en
            favorisant des liens étroits avec l'industrie pour garantir une
            formation alignée sur les besoins du marché du travail.
          </p>
          <p>
            La recherche pédagogique et technologique constitue un axe majeur de
            nos activités, visant à rester à la pointe des avancées éducatives
            et technologiques. Nous encourageons activement la participation du
            corps enseignant dans des projets de recherche novateurs.
          </p>
          <p>
            En tant qu'expert en éducation, l'Institut offre des services de
            conseil et d'expertise, mettant à profit son savoir-faire pour
            accompagner d'autres institutions éducatives et entreprises. Nous
            mettons également l'accent sur la production de solutions innovantes
            adaptées aux besoins spécifiques de nos partenaires.
          </p>
          <p>
            Enfin, notre mission inclut la mise en œuvre de projets pédagogiques
            intégrant des applications industrielles concrètes. Nous veillons à
            ce que nos apprenants puissent appliquer leurs connaissances dans
            des contextes réels, renforçant ainsi leur employabilité et
            contribuant au développement de l'industrie. En résumé, l'Institut
            s'engage à être un acteur dynamique et polyvalent, participant
            activement à la formation, la recherche et l'innovation dans le
            domaine éducatif et industriel.
          </p>
        </div>
      </div>
      <div class="box-img">
        <img
          src="https://ipnetp.ci/wp-content/uploads/2023/12/afipnetp.png"
          alt=""
        />
      </div>
    </section>

    <div class="mini-gallery">
      <div class="mini-gallery-item">
        <img
          src="https://ipnetp.ci/wp-content/uploads/2023/12/MotDirecteur-768x892.png"
          alt="Image 1"
        />
      </div>
      <div class="mini-gallery-item">
        <img
          src="https://ipnetp.ci/wp-content/uploads/2012/05/1.jpg"
          alt="Image 2"
        />
      </div>
      <div class="mini-gallery-item">
        <img
          src="https://ipnetp.ci/wp-content/uploads/2012/08/F2-768x578.jpg"
          alt="Image 3"
        />
      </div>
      <div class="mini-gallery-item">
        <img
          src="https://ipnetp.ci/wp-content/uploads/2012/08/F1-768x506.jpg"
          alt="Image 4"
        />
      </div>
      <div class="mini-gallery-item">
        <img
          src="https://ipnetp.ci/wp-content/uploads/2012/05/2-768x578.jpg"
          alt="Image 5"
        />
      </div>
      <div class="mini-gallery-item">
        <img
          src="https://ipnetp.ci/wp-content/uploads/2012/08/F-768x578.jpg"
          alt="Image 6"
        />
      </div>
    </div>
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

/*  */

.mini-gallery {
  display: grid;
  gap: 16px;
  padding: 30px 20px;
  max-width: 1000px;
  margin: auto;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

.mini-gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.mini-gallery-item img {
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

/* Hover effect */
.mini-gallery-item:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.mini-gallery-item:hover img {
  transform: scale(1.05);
}

/* Mobile support */
@media (max-width: 768px) {
  .mini-gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .mini-gallery {
    grid-template-columns: 1fr;
  }
}


/*  */

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
