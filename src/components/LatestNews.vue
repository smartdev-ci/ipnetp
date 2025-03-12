<template>
    <section class="latest-news">
      <div class="content-container">
        <!-- Bloc "News & Updates" -->
        <div class="news-updates">
          <h2>News & Updates</h2>
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
  
        <!-- Bloc "Quick Links" -->
        <div class="quick-links">
          <h2>Quick Links</h2>
          <ul>
            <li v-for="(link, index) in quickLinks" :key="index">
              <a :href="link.url">{{ link.text }}</a>
            </li>
          </ul>
        </div>
      </div>
  
      <!-- Bouton flottant "Apply Now" -->
      <button class="apply-now">Apply Now</button>
    </section>
  </template>
  
  <script>
  export default {
    name: "LatestNews",
    data() {
      return {
        newsList: [
          {
            image: "https://placehold.co/100x100",
            date: "June 6, 2019",
            title: "Professor Albert joint research on mobile money in Tanzania",
            category: "Admission, Student",
          },
          {
            image: "https://placehold.co/100x100",
            date: "June 6, 2019",
            title: "A Global Man for the next generation of business leaders",
            category: "Hot, Updates",
          },
          {
            image: "https://placehold.co/100x100",
            date: "June 6, 2019",
            title: "Professor Tom comments on voluntary recalls by snack brands",
            category: "Admission, Event",
          },
        ],
        quickLinks: [
          { text: "Alumni & Donors", url: "#" },
          { text: "Athletic Calendar", url: "#" },
          { text: "All Kingster’s Events", url: "#" },
          { text: "Partnerships & Outreach", url: "#" },
          { text: "Academic Programs", url: "#" },
          { text: "Tuition And Fees", url: "#" },
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
  
  .news-updates h2 {
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
  
  .quick-links {
    flex: 1;
    background: #0f1e3d;
    color: white;
    padding: 20px;
  }
  
  .quick-links h2 {
    color: #2ecc71;
  }
  
  .quick-links ul {
    list-style: none;
    padding: 0;
  }
  
  .quick-links li {
    margin-bottom: 10px;
  }
  
  .quick-links a {
    color: white;
    text-decoration: none;
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
  