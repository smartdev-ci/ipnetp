<script setup lang="ts">
import AppButton from '../common/AppButton.vue';

const footerLinks = {
  company: [
    { text: 'About Us', href: '#' },
    { text: 'Contact Us', href: '#' },
    { text: 'Our Team', href: '#' },
    { text: 'Privacy Policy', href: '#' },
    { text: 'Terms of Service', href: '#' }
  ],
  usefulLinks: [
    { text: 'How it works', href: '#' },
    { text: 'FAQ', href: '#' },
    { text: 'Student Resources', href: '#' },
    { text: 'Become a Teacher', href: '#' },
    { text: 'Careers', href: '#' }
  ]
};

const socialLinks = [
  { icon: 'facebook', href: '#' },
  { icon: 'twitter', href: '#' },
  { icon: 'instagram', href: '#' },
  { icon: 'linkedin', href: '#' },
  { icon: 'youtube', href: '#' }
];

const instagramFeed = [
  'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/4778621/pexels-photo-4778621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
];
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
              <span>IPNETP</span>
            </div>
            <p>Transform your learning experience with our comprehensive educational platform. Join thousands of students worldwide.</p>
            <div class="contact-info">
              <p><strong>Phone:</strong> +1 (234) 567-8900</p>
              <p><strong>Email:</strong> info@educat.com</p>
              <p><strong>Address:</strong> 123 Education St, Learning City</p>
            </div>
            <div class="social-links">
              <a v-for="(link, index) in socialLinks" :key="index" :href="link.href" class="social-icon">
                <span class="material-icons">{{ link.icon }}</span>
              </a>
            </div>
          </div>
          
          <div class="footer-column">
            <h4>USEFUL LINKS</h4>
            <ul class="footer-links">
              <li v-for="(link, index) in footerLinks.usefulLinks" :key="index">
                <a :href="link.href">{{ link.text }}</a>
              </li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h4>INSTAGRAM</h4>
            <div class="instagram-feed">
              <a v-for="(image, index) in instagramFeed" :key="index" 
                 :href="'#'" class="instagram-item">
                <img :src="image" alt="Instagram post" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="container">
        <p>&copy; 2025 IPNETP. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--secondary-color);
  color: var(--text-white);
}

.newsletter-section {
  background-color: var(--primary-color);
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
  background-color: var(--secondary-color);
  padding: var(--space-xxl) 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
}

.footer-logo {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: var(--space-md);
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: rgba(255, 255, 255, 0.1);
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
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-sm);
}

.instagram-item {
  border-radius: var(--border-radius-sm);
  overflow: hidden;
  transition: transform var(--transition-fast);
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
  background-color: var(--secondary-dark);
  padding: var(--space-md) 0;
  text-align: center;
}

@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: 2fr 1fr 1fr;
  }
  
  .newsletter-content {
    flex-wrap: nowrap;
  }
}
</style>