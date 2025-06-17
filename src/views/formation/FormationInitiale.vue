<template>
  <main>
    <section class="formation-initiale">
      <h2>🎓 ÉCOLE DE FORMATION INITIALE (EFI)</h2>

      <img
        src="https://ipnetp.ci/wp-content/uploads/2023/12/EFI-1.jpg"
        alt="Image de couverture formation initiale"
        class="cover-image"
      />

      <div class="description">
        <p>
          L'École de Formation Initiale assume une mission cruciale dans le
          domaine de l'éducation en étant spécifiquement chargée de la formation
          initiale des formateurs de l'enseignement technique et de la
          formation. Son objectif premier est de préparer ces futurs formateurs
          à exercer leur métier avec excellence et à répondre aux besoins
          évolutifs du secteur de l'enseignement technique.
        </p>
        <p>
          Cette institution joue un rôle central dans la transmission des
          connaissances pédagogiques, des compétences techniques et des méthodes
          d'enseignement aux formateurs en devenir. Elle s'engage à offrir des
          programmes de formation complets, intégrant à la fois des aspects
          théoriques et pratiques, pour garantir une préparation holistique de
          ces professionnels.
        </p>
        <p>
          L'École veille également à actualiser constamment ses programmes pour
          refléter les évolutions technologiques, les nouvelles tendances
          pédagogiques et les exigences du marché du travail. Ainsi, elle
          contribue à former des formateurs adaptés aux réalités actuelles et
          capables d'assurer une formation pertinente et de qualité.
        </p>
        <p>
          En favorisant un environnement d'apprentissage dynamique et en
          encourageant la collaboration entre les formateurs en formation,
          l'École de Formation Initiale crée une communauté professionnelle où
          l'échange de connaissances et d'expériences enrichit la préparation de
          chacun.
        </p>
        <p>
          En résumé, cette école assume la responsabilité stratégique de
          façonner la prochaine génération de formateurs en enseignement
          technique, contribuant ainsi à l'amélioration continue de l'éducation
          professionnelle et à la préparation des apprenants à relever les défis
          du monde professionnel.
        </p>
      </div>

      <div class="table-wrapper">
        <h3>📌 Formation initiale : concours direct</h3>
        <table>
          <thead>
            <tr>
              <th>Emplois</th>
              <th>Profils exigés</th>
              <th>Durée</th>
              <th>Établissements</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CAP/IFPB<br /><small>Adjoint</small></td>
              <td>CAP</td>
              <td>2 ans</td>
              <td>Unités mobiles, Ateliers d'application</td>
            </tr>
            <tr>
              <td>CAP/PCFP</td>
              <td>
                BT, Bac C, E, F, G + 1 an<br />
                BP + 3 ans d'expérience
              </td>
              <td>2 ans</td>
              <td>
                Unités mobiles, Ateliers d'application<br />
                Centre de Formation Professionnelle
              </td>
            </tr>
            <tr>
              <td>CAP/PLP</td>
              <td>BTS, DUT, DEUG, + 1 an</td>
              <td>2 ans</td>
              <td>Centre de Formation Professionnelle</td>
            </tr>
            <tr>
              <td>CAP/PETP</td>
              <td>Maîtrise équivalent</td>
              <td>2 ans</td>
              <td>Lycées Techniques, professionnels</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
// Pas de logique JS ici pour l'instant
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

.banner {
  background-color: var(--dark);
  color: white;
  padding: 4rem 1rem;
  text-align: center;
  position: relative;
}

.formation-initiale {
  padding: 3rem 1.5rem;
  background-color: var(--bg);
  max-width: 1200px;
  margin: auto;
}

.formation-initiale h2 {
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
  .formation-initiale h2 {
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
