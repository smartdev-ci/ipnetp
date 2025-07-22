<script setup lang="ts">
import AppButton from '../common/AppButton.vue';
import { onMounted } from 'vue';
import { useReviewStore } from "../../stores/reviewStore";

const reviewStore = useReviewStore();

const socialLinks = [
  { icon: 'fab fa-facebook-f', href: 'https://www.facebook.com/ipnetp225' },
  { icon: 'fab fa-twitter', href: 'https://x.com/i/flow/login?redirect_after_login=%2Fipnetp' },
  { icon: 'fab fa-instagram', href: '#' },
  { icon: 'fab fa-linkedin-in', href: '#' },
  { icon: 'fab fa-youtube', href: 'https://www.youtube.com/watch?v=NyOMnTtldkI&t=4s' }
];

const partners = [
  "https://ipnetp.ci/wp-content/uploads/2023/12/p1.png",
  "https://ipnetp.ci/wp-content/uploads/2023/12/p6.png",
  "https://ipnetp.ci/wp-content/uploads/2023/12/p3.png",
  "https://ipnetp.ci/wp-content/uploads/2023/12/p2.png",
  "https://ipnetp.ci/wp-content/uploads/2023/12/p5.png",
  "https://ipnetp.ci/wp-content/uploads/2023/12/p4.png",
  "https://ipnetp.ci/wp-content/uploads/2023/12/p7.png"
];

onMounted(() => {
  reviewStore.getAllSpecialties()
})
</script>

<template>
  <footer class="footer">
    <div class="newsletter-section">
      <div class="container">
        <div class="newsletter-content">
          <h3>Abonnez-vous à notre newsletter</h3>
          <div class="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <AppButton text="Subscribe" type="primary" />
          </div>
        </div>
      </div>
    </div>

    <div class="footer-main">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-column">
            <div class="footer-logo">
              <img class="img-footer" src="/images/logos/Logo_noir_ipnetp.png"
                alt="">
            </div>
            <!-- <p>Transform your learning experience with our comprehensive educational platform. Join thousands of students worldwide.</p> -->
            <div class="contact-info">
              <p><strong>Phone 1:</strong> +225 27 22 44 67 69</p>
              <p><strong>Phone 2:</strong> +225 27 22 48 50 35</p>
              <p><strong>Boite Postale: </strong>08 BP 2098 ABIDJAN 08, Abidjan, Côte d’Ivoire</p>
            </div>
            <div class="social-links">
              <a v-for="(link, index) in socialLinks" :key="index" :href="link.href" class="social-icon" target="_blank">
                <i :class="link.icon"></i>
              </a>
            </div>
          </div>

          <div class="footer-column">
            <h4>Nos spécialités</h4>
            <ul v-if="reviewStore.isLoaded" class="footer-links">
              <li v-for="spec in reviewStore.specialities" :key="spec.id">{{ spec.title }}</li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>NOS PARTENAIRES</h4>
            <div class="instagram-feed">
              <a v-for="(image, index) in partners" :key="index" :href="'#'" class="instagram-item">
                <img :src="image" alt="Instagram post" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p>&copy; 2025 IPNETP. Tous droits reservés</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--secondary-color);
  color: var(--text-white);
  /* overflow: hidden; */
}

.newsletter-section {
  background-color: #070f2d;
  padding: var(--space-lg) 0;
}

.newsletter-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-lg);
}

.newsletter-content h3 {
  color: var(--text-white);
  margin: 0;
}

.newsletter-form {
  display: flex;
  gap: var(--space-sm);
  flex: 1;
  max-width: 500px;
}

.newsletter-form input {
  flex: 1;
  padding: var(--space-sm) var(--space-md);
  border: none;
  border-radius: var(--border-radius-sm);
}

.footer-main {
  background-color: #1A3397;
  padding: var(--space-xxl) 0;
}

.footer-grid {
  display: flex;
  gap: 100px;
  /* grid-template-columns: 1fr;
  gap: var(--space-xl); */
}

.footer-logo {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: var(--space-md);
  width: 100px;
  height: 40px;
  background-color: #fff;
  padding: 3px;
}

.footer-logo img{
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.footer-logo strong {
  color: var(--primary-color);
}

.contact-info {
  margin: var(--space-md) 0;
}

.social-links {
  display: flex;
  gap: var(--space-sm);
  margin-top: var(--space-md);
}

.social-icon {
  text-decoration: none;;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: #ffffff1a;
  border-radius: 50%;
  color: var(--text-white);
  transition: background-color var(--transition-fast);
}

.social-icon:hover {
  background-color: var(--primary-color);
}

.footer-column h4 {
  color: var(--text-white);
  margin-bottom: var(--space-lg);
  position: relative;
  padding-bottom: var(--space-sm);
}

.footer-column h4::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 2px;
  background-color: var(--primary-color);
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: var(--space-sm);
}

.footer-links a {
  color: var(--text-white);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer-links a:hover {
  color: var(--primary-color);
}

.instagram-feed {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-sm);
}

.instagram-item {
  border-radius: var(--border-radius-sm);
  overflow: hidden;
  transition: transform var(--transition-fast);
  width: 80%;
  height: 100%;
}

.instagram-item:hover {
  transform: scale(1.05);
}

.instagram-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 1;
}

.footer-bottom {
  background-color: #070f2d;
  padding: var(--space-md) 0;
  text-align: center;
}

.img-footer {
  height: 80px;
  width: 120px;
}

@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: 2fr 1fr 1fr;
  }

  .newsletter-content {
    flex-wrap: nowrap;
  }
}


@media (max-width: 980px) {


.library-swiper {
  width: 70vw;
}

.footer-grid {
  display: flex;
  gap: 100px;
  flex-direction: column;
  align-items: center;

}

.footer-grid > div {
  width: 80%;

}

}


@media (max-width: 468px) {
  .newsletter-form {
    flex-direction: column;
  }
}



</style>