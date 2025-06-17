<template>
  <main class="page-container">
    <!-- Section Historique de l'IPNETP -->
    <section class="historique">
      <div class="box-txt">
        <h2>Historique</h2>
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
        <div class="d1">
          <img
            src="https://ipnetp.ci/wp-content/uploads/2023/12/ipnetp2.png"
            alt=""
          />
        </div>
        <div class="video-section">
          <div class="video-container">
            <iframe
              src="https://www.youtube.com/embed/NyOMnTtldkI?start=2"
              title="Présentation vidéo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Mission de l'IPNETP -->
    <section class="mission">
      <div class="box-img">
        <div class="d1">
          <img
            src="https://ipnetp.ci/wp-content/uploads/2023/12/ipnetpEntree.png"
            alt=""
          />
        </div>
        <div class="d2">
          <div>
            <img
              src="https://ipnetp.ci/wp-content/uploads/2014/02/AFI4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://ipnetp.ci/wp-content/uploads/2023/12/mission2-768x512.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="box-txt">
        <h2>Mission de l'IPNETP</h2>
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
  width: 35%;
  height: 100%;
  gap: 20px;
}
.box-img .d1 {
  height: 60%;
  width: 100%;
}

.box-img .d2 {
  height: 30%;
  width: 100%;
  gap: 20px;
  display: flex;
}

.box-img .d2 div {
  height: 100%;
  width: 50%;
  gap: 20px;
  display: flex;
}

.box-img img {
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

/* Style vidéo preview */

.historique .box-img{
    height: fit-content;
}

.video-section {
  padding: 2rem 1rem;
  position: relative;
  background-color: #f9f9f9;
}

.video-title {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #333;
}

/* Rendre la vidéo responsive */
.video-container {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 aspect ratio */
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}

/* Responsivité */

@media (max-width: 1600px) {
  section {
    flex-direction: column;
    align-items: start;
  }
  section.mission {
    flex-direction: column-reverse;
    align-items: start;
  }
  .box-img,
  .box-txt {
    width: 100%;
  }
  .box-img {
    width: 80%;
    height: 60vw;
  }
}
</style>
