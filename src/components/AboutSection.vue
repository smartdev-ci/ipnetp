<template>
  <section class="about-section">
    <!-- Bannière -->
    <div class="banner">
      <div class="overlay">
        <div class="title">
          <h2> Historique </h2>
        </div>
        <div class="banner-content">
          <!-- Colonne gauche (Vidéo) -->
          <div class="left">
            <iframe width="100%" height="250" src="https://www.youtube.com/embed/NyOMnTtldkI"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>
          <!-- Colonne droite (Texte descriptif) -->
          <div class="right">
            <p>
              L’Institut Pédagogique National de l’Enseignement Technique et Professionnel (IPNETP) est un établissement
              public national d’enseignement à caractère administratif créé par la loi n° 75-939 du 26 décembre 1975 et
              réorganisé par le décret n°2001-715 du 16 novembre 2001 déterminant les attributions, l’organisation et le
              fonctionnement de l’IPNETP.
            </p>
            <p>
              L’IPNETP est un établissement d’Enseignement Technique Supérieur et de Recherche placé sous la tutelle
              administrative du Ministère de l’Education Nationale de l’Enseignement Technique et de la Formation
              Professionnelle et la tutelle financière du Ministère de l’Économie et des Finances.
            </p>
            <ul>
              <li>Formation du personnel enseignant et d’encadrement de l’Enseignement Technique et de la Formation
                Professionnelle.</li>
              <li>Développement de la recherche et de l’innovation technologique.</li>
              <li>Valorisation et diffusion intellectuelle aux plans national et international.</li>
              <li>Réalisation de prestations de formation, conseil, expertise et productions pédagogiques.</li>
              <li>Élaboration et développement des curricula.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Cartes informatives -->
    <div class="info-cards">
      <InfoCard icon="🎓" title="Formation et Perfectionnement"
        description="Formation du personnel enseignant et d'encadrement." />
      <InfoCard icon="🌍" title="Ouverture Internationale"
        description="Partenariats et collaborations académiques variées." />
      <InfoCard icon="📜" title="Diplômes et Certifications"
        description="Programmes d'enseignement supérieur variés et spécialisés." />
      <InfoCard icon="🏛" title="Vie Universitaire" description="Un environnement académique dynamique et inclusif." />

    </div>
  </section>
</template>

<script>
import InfoCard from "./InfoCard.vue";

export default {
  components: {
    InfoCard,
  },
};
</script>

<style scoped>
.about-section {
  background: #0f1e3d;
  color: white;
  padding: 50px 0;
}

.banner {
  background: #bfbfbf;
  position: relative;
  padding: 40px;
}

.overlay {
  background: rgba(0, 0, 0, 0.6);
  padding: 40px;
  display: flex;
  justify-content: center;
  position: relative;

  .title {
    position: absolute;
    top: 20px;
    left: 40px;
  }
}

.banner-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  width: 90%;
}

/* Ajustement de la vidéo */
.left {
  flex: 1;
}

.left iframe {
  width: 100%;
  height: 250px;
  border-radius: 10px;
}

.right {
  flex: 2;
  text-align: justify;
  padding-left: 20px;
}

.right p {
  margin-bottom: 15px;
  line-height: 1.5;
}

.right ul {
  list-style-type: disc;
  padding-left: 20px;
}

.right li {
  margin-bottom: 8px;
}

/* Cartes informatives */
.info-cards {
  display: flex;
  justify-content: space-between;
  padding: 40px;
}

@media (max-width: 768px) {
  .banner-content {
    flex-direction: column;
    text-align: center;
  }

  .right {
    padding-left: 0;
  }

  .info-cards {
    flex-direction: column;
    align-items: center;
  }
}
</style>
