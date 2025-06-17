<template>
  <main>
    <section class="formation-continue">
      <h2>Demande d'adhésion</h2>

      <img
        src="https://ipnetp.ci/wp-content/uploads/2023/12/ipnetpEntree.png"
        alt="Image de couverture formation continue"
        class="cover-image"
      />

      <div class="description">
        <p>
          Les métiers de la formation professionnelle jouent un rôle crucial
          dans le développement des compétences et la préparation des individus
          pour le marché du travail. Le formateur, au cœur de ce processus, est
          responsable de concevoir des programmes d'enseignement-apprentissage
          adaptés, favorisant l'acquisition de compétences pratiques et
          théoriques par les apprenants. Son expertise pédagogique contribue à
          façonner la future main-d'œuvre qualifiée et compétente.
        </p>

        <p>
          L'inspecteur, quant à lui, assume un rôle d'encadrement et
          d'accompagnement éducatif. Sa mission consiste à assurer la qualité
          des enseignements dispensés, à évaluer les performances des
          formateurs, et à mettre en place des stratégies visant l'amélioration
          continue de la formation. Il contribue ainsi à maintenir des normes
          élevées dans le domaine de la formation professionnelle.
        </p>

        <p>
          Au sommet de la hiérarchie se trouve le chef d'établissement, qui
          assume une fonction de gestionnaire. Responsable de la coordination
          des activités éducatives et administratives, le chef d'établissement
          s'engage dans la planification stratégique, la gestion des ressources,
          et la création d'un environnement propice à l'apprentissage et au
          développement professionnel. Sa vision globale et ses compétences en
          gestion sont essentielles pour assurer le bon fonctionnement de
          l'établissement et la réussite des apprenants.
        </p>

        <p>
          Ensemble, ces métiers de la formation professionnelle forment une
          équipe dynamique et complémentaire, œuvrant à la création d'une
          main-d'œuvre qualifiée, adaptée aux exigences du monde professionnel
          contemporain. Ils incarnent l'importance de l'éducation dans le
          façonnement d'individus compétents et prêts à contribuer positivement
          à la société.
        </p>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
// Page statique – pas de logique JS pour le moment
</script>

<style scoped>
main {
  padding-top: 100px;
}

:root {
  --blue: #007bff;
  --blue-light: #e6f0ff;
  --dark: #0f1e3d;
  --text-color: #333;
  --bg: #f9f9f9;
}

.formation-continue {
  padding: 3rem 1.5rem;
  background-color: var(--bg);
  max-width: 1200px;
  margin: auto;
}

.formation-continue h2 {
  font-size: 2rem;
  color: var(--blue);
  margin-bottom: 2rem;
  text-align: center;
}

.cover-image {
  width: 100%;
  height: auto;
  max-height: 420px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 123, 255, 0.15);
  margin-bottom: 2rem;
}

.description p {
  margin-bottom: 1.3rem;
  font-size: 1.05rem;
  color: var(--text-color);
  line-height: 1.7;
  text-align: justify;
}

.table-wrapper {
  margin-top: 3rem;
  overflow-x: auto;
  border-radius: 12px;
  background: white;
  padding: 2rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.table-wrapper h3 {
  font-size: 1.5rem;
  color: var(--dark);
  margin-bottom: 1.5rem;
  text-align: center;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
  border-radius: 8px;
  overflow: hidden;
}

thead {
  background-color: var(--blue);
  color: white;
}

th {
  color: #0f1e3d;
}

th,
td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

td small {
  display: block;
  color: #666;
  font-size: 0.85rem;
}

tbody tr:hover {
  background-color: var(--blue-light);
}

@media screen and (max-width: 768px) {
  .formation-continue h2 {
    font-size: 1.5rem;
  }

  .table-wrapper {
    padding: 1rem;
  }

  table {
    font-size: 0.85rem;
  }

  th,
  td {
    padding: 0.75rem;
  }
}
</style>
