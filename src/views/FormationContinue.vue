<template>
  <main>
    <section class="formation-continue">
      <h2>🎓 ÉCOLE DE FORMATION CONTINUE</h2>

      <img
        src="https://ipnetp.ci/wp-content/uploads/2023/12/FC.jpg"
        alt="Image de couverture formation continue"
        class="cover-image"
      />

      <div class="description">
        <p>
          Le Service de Formation Continue des Personnels d'Éducation constitue
          l'un des piliers essentiels de l'École de Formation Initiale. Sa
          mission principale est de dispenser des formations continues aux
          personnels des institutions d'éducation et de formation. Ces
          formations sont conçues pour accompagner les changements d'emploi au
          sein du secteur éducatif, garantissant ainsi une adaptation constante
          aux évolutions du domaine. De plus, ce service s'engage à offrir des
          programmes de formation destinés aux demandeurs d'emploi, favorisant
          ainsi l'accès à des opportunités professionnelles.
        </p>

        <p>
          Le Service de Formation en Entreprise représente un autre volet clé de
          l'École de Formation Continue. Il est spécifiquement dédié à la
          conception et à la mise en œuvre de programmes de formation destinés
          aux employés en entreprise. Ces formations visent à actualiser les
          compétences des travailleurs, à favoriser l'innovation dans les
          pratiques professionnelles et à répondre aux besoins spécifiques des
          entreprises partenaires.
        </p>

        <p>
          Le Centre d'Anglais de Spécialités complète cette structure tripartite
          en offrant des formations spécialisées en anglais. Ce centre vise à
          renforcer les compétences linguistiques des apprenants dans des
          domaines spécifiques, favorisant ainsi leur intégration et leur
          performance dans des contextes professionnels variés.
        </p>

        <p>
          Dans l'ensemble, ces trois services interconnectés témoignent de la
          volonté de l'École de Formation Continue de couvrir un large spectre
          de besoins en formation, que ce soit au sein du secteur éducatif, en
          entreprise, ou dans le domaine linguistique. Cette approche
          diversifiée contribue à assurer une formation continue de qualité,
          alignée sur les exigences du marché du travail et les évolutions
          constantes de la société.
        </p>
      </div>

      <div class="table-wrapper">
        <h3>📌 Formation continue : concours professionnel</h3>
        <table>
          <thead>
            <tr>
              <th>Emplois</th>
              <th>Profils exigés</th>
              <th>Durée de Formation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CAP/PCFP</td>
              <td>IFPB + 3 années d'ancienneté</td>
              <td>2 ans</td>
            </tr>
            <tr>
              <td>CAP/PLP</td>
              <td>PCFP + 3 années d'ancienneté</td>
              <td>2 ans</td>
            </tr>
            <tr>
              <td>CAP/PETP</td>
              <td>PLP + 3 années d'ancienneté</td>
              <td>2 ans</td>
            </tr>
            <tr>
              <td>Agrégation</td>
              <td>PETP + 3 années d'ancienneté</td>
              <td>2 ans</td>
            </tr>
          </tbody>
        </table>
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
  color: #1A3397;
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
