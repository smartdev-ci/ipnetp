<template>
  <section class="latest-news">
    <div class="content-container">
      <!-- Bloc "News & Updates" -->
      <div class="news-updates">
        <h2>Actualités récentes</h2>
        <div class="articles">
          <article v-for="(news, index) in newsList" :key="index" class="news-item">
            <img :src="news.image" :alt="news.title" class="news-image" />
            <div class="news-content">
              <p class="date">{{ news.date }}</p>
              <h3 class="title">{{ news.title }}</h3>
              <p class="category">{{ news.category }}</p>
            </div>
          </article>
        </div>
      </div>

      <!-- Bloc Galerie -->
      <div class="gallery">
        <h2>Galerie IPNETP</h2>
        <div class="gallery-grid">
          <img v-for="(image, index) in galleryImages" :key="index" :src="baseUrl + image" class="gallery-image" />
        </div>

        <div class="admission-results">
          <h2>Résultat Admission</h2>
          <p>Consultez les résultats des admissions pour l'année en cours.</p>
          <button class="result-button">Voir les résultats</button>
        </div>
      </div>
    </div>
    <!-- Bouton flottant "Apply Now" -->
    <button class="apply-button" @click="scrollToTop">
      <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#007bff"><path d="M446.67-80v-673l-200 199.67L200-600l280-280 280 280-46.67 47-200-200v673h-66.66Z"/></svg>    
    </button>

  </section>
</template>

<script>
export default {
  name: "LatestNewsGallery",
  data() {
    return {
      newsList: [
        {
          image: "https://ipnetp.ci/wp-content/uploads/2025/03/5-4.jpg",
          date: "11 Mars 2025",
          title: "Mission conjointe de la JICA Senegal et du CFPT Senegal-Japon à l'IPNETP",
          category: "Actualité générale",
        },
        {
          image: "https://ipnetp.ci/wp-content/uploads/2025/03/20-1.jpg",
          date: "07 Mars 2025",
          title: "L’IPNETP et EDF : Une rencontre pour promouvoir l’insertion des femmes dans les métiers techniques !",
          category: "Actualité formation",
        },
        {
          image: "https://ipnetp.ci/wp-content/uploads/2025/03/2-1.jpg",
          date: "05 Mars 2025",
          title: "Retour sur formation aux gestes de premiers secours à l'IPNETP",
          category: "Actualité générale",
        },
      ],
      baseUrl: "https://ipnetp.ci/wp-content/uploads/",
      galleryImages: [
        "2023/12/AFIPNETP-150x150.jpg",
        "2023/12/missions3-150x150.jpg",
        "2023/12/mut-150x150.jpg",
        "2012/08/F-150x150.jpg",
        "2023/12/ecole-150x150.jpg",
        "2023/12/2-150x150.jpg",
        "2012/05/3-150x150.jpg",
        "2012/05/1-150x150.jpg",
        "2012/05/2-1-150x150.jpg",
      ],
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};
</script>

<style scoped>
.latest-news {
  background: white;
  padding: 40px;
  position: relative;
}

.content-container {
  display: flex;
  justify-content: space-between;
}

.news-updates {
  flex: 2;
  background: white;
  padding: 20px;
}

.news-updates h2,
.gallery h2 {
  color: #0f1e3d;
}

.articles {
  display: flex;
  flex-direction: column;
}

.news-item {
  display: flex;
  margin-bottom: 20px;
}

.news-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 15px;
}

.news-content {
  flex: 1;
}

.date {
  font-size: 14px;
  color: gray;
}

.title {
  font-size: 16px;
  font-weight: bold;
  color: #0f1e3d;
}

.category {
  font-size: 14px;
  color: gray;
}

/* Galerie */
.gallery {
  flex: 1;
  background: #0f1e3d;
  color: white;
  padding: 20px;

  h2 {
    color: white;
  }
  
}

.result-button {
  /* background: #0f1e3d; */
  color: #12274a;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}
.admission-results {
  h2 {
    text-align: left;
    padding-top: 20px;
  }
  /* background: #f5f5f5; */
  /* padding: 20px; */
  text-align: center;
  border-radius: 5px;
}
/* .result-button:hover {
  background: #12274a;
  color: white;
} */

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin-top: 20px;
}

.gallery-image {
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
  transition: transform 0.3s ease;
}

.gallery-image:hover {
  transform: scale(1.1);
}

.apply-button {
  position: fixed;
  bottom: 20px;
  right: 60px;
  /* background-color: white; */
  border: none;
  width: 50px;
  height: 55px;
  font-size: 24px;
  color: white;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: background 0.3s;
}

.apply-button svg{
  position: absolute;
  /* border: 3px red solid; */
  width: 70%;
  height: 70%;
}

img.arrow-up {
  height: 35px;
  color: white;
}


.apply-button:hover {
  background-color: white;
}
</style>
