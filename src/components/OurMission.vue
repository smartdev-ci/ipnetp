<template>
  <div class="news-updates">
    <h2>Notre mission</h2>
  </div>
  <div class="container">
    <!-- Image associée à l'onglet sélectionné -->
    <div class="image-section">
      <img :src="selectedTab.image" :alt="selectedTab.title" class="tab-image" />
    </div>

    <!-- Contenu des onglets -->
    <div class="content-section">
      <div class="tabs">
        <button v-for="(tab, index) in tabs" :key="index" @click="selectedTab = tab"
          :class="{ active: selectedTab.title === tab.title }">
          {{ tab.title }}
        </button>
      </div>
      <div class="tab-content">
        <h2>{{ selectedTab.title }}</h2>
        <p>{{ selectedTab.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        {
          title: "Formation Initiale",
          content: "L’Institut s’engage à offrir une vaste gamme de formations, tant initiales que continues, visant à développer les compétences et les connaissances des apprenants. Dans le cadre de la formation initiale, notre mission est d’assurer une préparation complète pour l’entrée dans le monde professionnel, en mettant l’accent sur l’acquisition de compétences pratiques et théoriques.",
          image: "https://ipnetp.ci/wp-content/uploads/2025/03/20-1.jpg"
        },
        {
          title: "Formation Continue & Production Didactique",
          content: "Parallèlement, l’Institut se consacre à la production didactique et industrielle, en élaborant des contenus pédagogiques innovants et en favorisant des liens étroits avec l’industrie pour garantir une formation alignée sur les besoins du marché du travail.",
          image: "formation-continue.jpg"
        },
        {
          title: "Recherche & Innovation",
          content: "La recherche pédagogique et technologique constitue un axe majeur de nos activités, visant à rester à la pointe des avancées éducatives et technologiques. Nous encourageons activement la participation du corps enseignant dans des projets de recherche novateurs.",
          image: "recherche-innovation.jpg"
        },
        {
          title: "Conseil & Expertise",
          content: "En tant qu’expert en éducation, l’Institut offre des services de conseil et d’expertise, mettant à profit son savoir-faire pour accompagner d’autres institutions éducatives et entreprises. Nous mettons également l’accent sur la production de solutions innovantes adaptées aux besoins spécifiques de nos partenaires.",
          image: "conseil-expertise.jpg"
        },
        {
          title: "Applications Industrielles & Employabilité",
          content: "Enfin, notre mission inclut la mise en œuvre de projets pédagogiques intégrant des applications industrielles concrètes. Nous veillons à ce que nos apprenants puissent appliquer leurs connaissances dans des contextes réels, renforçant ainsi leur employabilité et contribuant au développement de l’industrie. En résumé, l’Institut s’engage à être un acteur dynamique et polyvalent, participant activement à la formation, la recherche et l’innovation dans le domaine éducatif et industriel.",
          image: "applications-industrielles.jpg"
        }
      ],
      selectedTab: null
    };
  },
  created() {
    this.selectedTab = this.tabs[0];
  }
};
</script>

<style scoped>
.container {
  display: flex;
  gap: 20px;
  /* max-width: 1000px; */
  margin: auto;
  padding: 20px;
}

.image-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tab-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.content-section {
  flex: 1;
}

.tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.tabs button {
  padding: 10px 15px;
  border: none;
  background-color: #ddd;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;
}

.tabs button.active,
.tabs button:hover {
  background-color: #3498db;
  color: white;
}

.tab-content {
  background: #f9f9f9;
  padding: 15px;
  border-radius: 5px;

  p {
    text-align: justify;
  }
}

.news-updates {
  flex: 2;
  background: white;
  padding-left: 55px;
}

.news-updates h2 {
  color: #0f1e3d;
}
</style>