<template>
    <div>
      <!-- Preloader -->
      <div v-if="isLoading" class="loadingScreen">
        <h3 class="loadingScreen__text">
          <span class="loadingScreen__text__span">I</span>
          <span class="loadingScreen__text__span">P</span>
          <span class="loadingScreen__text__span">N</span>
          <span class="loadingScreen__text__span">E</span>
          <span class="loadingScreen__text__span">T</span>
          <span class="loadingScreen__text__span">P</span>
        </h3>
      </div>
  
    <NavbarSection />
    <!-- <HeroSection /> -->
    <ActivityBanner @loaded="handleLoaded" />
    <InfoSection />
    <AboutSection />
    <OurMission />
    <LatestNews />
    <FooterSection />
    <ChatBot />
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  import NavbarSection from '../components/NavbarSection.vue'
  import HeroSection from '../components/HeroSection.vue'
  import InfoSection from '../components/InfoSection.vue'
  import AboutSection from '../components/AboutSection.vue'
  import LatestNews from '../components/LatestNews.vue'
  import FooterSection from '../components/FooterSection.vue'
  import OurMission from '../components/OurMission.vue'
  import ChatBot from '../components/ChatBot.vue'
  import ActivityBanner from '../components/ActivityBanner.vue'
  
  export default {
    components: {
      NavbarSection,
      HeroSection,
      InfoSection,
      AboutSection,
      LatestNews,
      FooterSection,
      OurMission,
      ChatBot,
      ActivityBanner
    },
    setup() {
      const isLoading = ref(true)
  
      const handleLoaded = () => {
        isLoading.value = false
      }
  
      return { isLoading, handleLoaded }
    }
  }
  </script>
  
  
  <style scoped>
  .loadingScreen {
    position: fixed;
    height: 100%;
    width: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 900000;
    overflow: hidden;
    background: #fff;
  }
  
  .loadingScreen__text {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    text-align: center;
    width: auto;
    height: 100px;
    color: #0f1e3d;
    text-transform: uppercase;
    font-size: 30px;
  }
  
  .loadingScreen__text__span {
    display: inline-block;
    padding: 5px;
    vertical-align: middle;
    animation-name: charColor;
    animation-iteration-count: infinite;
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-fill-mode: both;
    backface-visibility: hidden;
  }
  
  @keyframes charColor {
    0% {
      color: #0f1e3d;
    }
    50% {
      color: #5c5c5c;
    }
    100% {
      color: #0f1e3d;
    }
  }
  
  .loadingScreen__text__span:nth-child(1) {
    animation-delay: 100ms;
  }
  .loadingScreen__text__span:nth-child(2) {
    animation-delay: 200ms;
  }
  .loadingScreen__text__span:nth-child(3) {
    animation-delay: 300ms;
  }
  .loadingScreen__text__span:nth-child(4) {
    animation-delay: 400ms;
  }
  .loadingScreen__text__span:nth-child(5) {
    animation-delay: 500ms;
  }
  </style>