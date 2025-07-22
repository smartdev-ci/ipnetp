<template>
  <main class="page-container">
    <section class="mission">
      <div class="box-img">
        <img
          src="https://ipnetp.ci/wp-content/uploads/2023/12/diplome.png"
          alt=""
        />
      </div>
      <div class="box-txt">
        <h2>Nos Diplômes</h2>
        <div>
          <p>
            L'Institut offre un système de formation basé sur le Cycle Licence
            Master Doctorat (LMD) avec des diplômes spécifiques répondant aux
            besoins de l'enseignement et de la formation professionnelle. Pour
            les aspirants enseignants, le programme inclut le diplôme de
            Professeur de Collège (PC), attribué après l'obtention d'une licence
            professionnelle d'enseignement. Ce grade prépare les futurs
            éducateurs à intervenir au niveau du collège avec des compétences
            approfondies dans leur domaine d'expertise.
          </p>

          <p>
            Pour ceux visant à enseigner au lycée, le diplôme de Professeur de
            Lycée (PL) est décerné après l'achèvement d'un master professionnel
            d'enseignement. Ce programme offre une formation avancée pour
            assurer une excellence pédagogique au niveau secondaire.
          </p>

          <p>
            Le cycle doctoral propose un Doctorat en Sciences de l'Éducation
            avec des options spécifiques, offrant aux chercheurs la possibilité
            de se spécialiser dans l'Enseignement, l'Administration et Gestion,
            ou l'Encadrement Pédagogique (ce dernier programme étant en
            partenariat avec l'université Alassane Ouattara, bien que non encore
            ouvert). Ces diplômes de doctorat visent à développer des
            compétences de recherche approfondies dans le domaine de
            l'éducation.
          </p>

          <p>
            Par ailleurs, l'Institut propose des certifications essentielles au
            sein du Cycle Certificat d'Aptitude Pédagogique (CAP), ciblant les
            professionnels de l'enseignement. De plus, les programmes
            Instructeur de Formation Professionnelle de Base (IFPB) et
            Instructeur Adjoint de Formation Professionnelle de Base (IAFPB)
            visent à former des spécialistes compétents dans la transmission de
            connaissances pratiques et techniques, favorisant ainsi
            l'employabilité dans divers secteurs professionnels.
          </p>
          <p>
            Cette variété de diplômes reflète l'engagement de l'Institut à
            former des professionnels qualifiés et compétents dans le domaine de
            l'éducation et de la formation professionnelle, en offrant des
            parcours adaptés aux différentes étapes de la carrière éducative.
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
  display: flex;
  width: 35%;
  height: 100%;
  gap: 20px;
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

/* Style vidéo preview */

.historique .box-img {
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

/* Style map section */

.map-section {
  background-color: #f4f9ff;
  padding: 3rem 1rem;
  display: flex;
  justify-content: center;
}

.map-container {
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 123, 255, 0.1);
  max-width: 700px;
  width: 100%;
  padding: 2rem;
  text-align: center;
}

.map-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.map-icon {
  width: 80px;
  height: 80px;
  flex-shrink: 0;
}

.map-title {
  color: #0f1e3d;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
}

.map-description {
  color: #444;
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.map-button {
  background-color: #007bff;
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  display: inline-block;
}

.map-button:hover {
  background-color: #339eff;
}

@media (max-width: 480px) {
  .map-title {
    font-size: 1.25rem;
  }

  .map-button {
    width: 100%;
    padding: 0.75rem;
  }
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
    width: 60%;
    height: 32vw;
  }
}
</style>
