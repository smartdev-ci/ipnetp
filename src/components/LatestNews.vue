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
      </div>
    </div>

    <!-- Bouton flottant "Apply Now" -->
    <button class="apply-now">Apply Now</button>
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
      baseUrl: "https://ipnetp.ci/wp-content/uploads/2023/12/",
      galleryImages: [
        "2.jpg", "2-1.jpg", "AFIPNETP.jpg", "p4.png",
        "p5.png", "p6.png", "p7.png", "p1.png",
        "p2.png", "p3.png", "p4.png", "p5.png",
      ],
    };
  },
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

.news-updates h2, .gallery h2 {
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

.apply-now {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #2ecc71;
  color: white;
  padding: 15px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}
</style>
