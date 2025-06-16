<template>
  <header class="header">
    <div class="container">
      <nav class="navbar">
        <!-- LOGO -->
        <div class="logo">
          <a href="/">
            <img src="/images/logo_ipnetp.png" alt="Logo" />
          </a>
        </div>

        <!-- MENU TOGGLE (Mobile) -->
        <div
          class="menu-toggle"
          :class="{ active: isMenuOpen }"
          @click="toggleMenu"
          style="z-index: 100"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <!-- NAV LINKS -->
        <ul class="nav-links" :class="{ active: isMenuOpen }">
          <li
            v-for="(item, index) in menu"
            :key="index"
            class="nav-item"
            @mouseenter="desktopOpen(index)"
            @mouseleave="desktopClose(index)"
          >
            <template v-if="item.children">
              <div
                class="nav-link-wrapper"
                @click="toggleMobileDropdown(index)"
              >
                <span class="nav-link">{{ item.title }}</span>
              </div>
              <ul
                v-if="item.children"
                class="dropdown"
                :class="{ open: isDropdownOpen(index) }"
              >
                <li v-for="(child, cIndex) in item.children" :key="cIndex">
                  <template v-if="!child.external">
                    <router-link :to="child.link" class="dropdown-link">
                      {{ child.title }}
                    </router-link>
                  </template>
                  <template v-else>
                    <a
                      :href="child.link"
                      class="dropdown-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {{ child.title }}
                    </a>
                  </template>
                </li>
              </ul>
            </template>

            <template v-else>
              <router-link :to="item.link" class="nav-link">
                {{ item.title }}
              </router-link>
            </template>
          </li>
        </ul>
      </nav>

      <!-- OVERLAY -->
      <div
        v-if="isMenuOpen"
        class="overlay fixed inset-0 bg-black bg-opacity-50 z-[99]"
        @click="toggleMenu"
      ></div>

      <!-- LANGUAGE SWITCHER -->
      <div class="language-switcher">
        <button
          @click="setLanguage('fr')"
          class="lang-flag fr"
          aria-label="Français"
        >
          <span>FR</span>
        </button>
        <button
          @click="setLanguage('en')"
          class="lang-flag"
          aria-label="English"
        >
          <span>EN</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const isMenuOpen = ref(false);
const dropdownStates = ref<Record<number, boolean>>({});

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const toggleMobileDropdown = (index: number) => {
  if (window.innerWidth <= 1200) {
    dropdownStates.value[index] = !dropdownStates.value[index];
  }
};

watch(isMenuOpen, (open) => {
  document.body.style.overflow = open ? "hidden" : "auto";
});

const desktopOpen = (index: number) => {
  if (window.innerWidth > 1200) dropdownStates.value[index] = true;
};

const desktopClose = (index: number) => {
  if (window.innerWidth > 1200) dropdownStates.value[index] = false;
};

const isDropdownOpen = (index: number) => !!dropdownStates.value[index];

const menu = [
  {
    title: "Notre institut",
    children: [
      { title: "Mot de la directrice", link: "/direction" },
      { title: "Organisation", link: "/direction/organisation" },
    ],
  },
  {
    title: "Formation",
    children: [
      { title: "Formation initiale", link: "/formation/initiale" },
      { title: "Formation continue", link: "/formation/continue" },
      { title: "Demande d'adhésion", link: "/formation/adhesion" },
      { title: "Nos spécialités", link: "/formation/specialites" },
      { title: "Nos diplômes", link: "/formation/diplomes" },
    ],
  },
  {
    title: "Activités & Services",
    children: [
      { title: "IFEF", link: "https://ipnetp-ifef.com/", external: true },
      { title: "e-courrier", link: "/" },
      { title: "GRH", link: "/" },
    ],
  },
  {
    title: "Associations IPNETP",
    children: [
      { title: "Association des femmes", link: "/associations/femmes" },
      { title: "Mutuelle des agents", link: "/associations/mutuelle" },
      { title: "MORES-CI (Section IPNETP)", link: "/associations/mores-ci" },
    ],
  },
  {
    title: "Documentation",
    children: [
      {
        title: "Centre de Recherche et de Production",
        link: "/documentation/centre-recherche",
      },
      {
        title: "Cellule des Recherches pour l'anglais",
        link: "/documentation/anglais",
      },
      { title: "Revue IPNETP", link: "/documentation/revue" },
      { title: "Bibliothèque", link: "/documentation/bibliotheque" },
    ],
  },
  {
    title: "Actualités",
    children: [
      { title: "Actualités Générales", link: "/actualites/general" },
      { title: "Actualités Formations", link: "/actualites/formations" },
      { title: "Événements à venir", link: "/actualites/evenements" },
    ],
  },
  {
    title: "Contacts",
    link: "/contacts",
  },
];

const setLanguage = (lang: string) => {
  console.log(`Langue changée en : ${lang}`);
};
</script>

<style scoped>

li{
  cursor: default;
}


.language-switcher {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 3px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
}


.lang-flag {
  padding: 0;
  font-size: 0.8rem;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease;
  color: #007bff;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
}

.fr{
  background-color: #007bff;
  border-radius: 4px;
  color: #fff;

}

.lang-flag:hover {
  transform: scale(1.1);
}

@media (max-width: 1200px) {
  .flag-icon {
    width: 32px;
  }
}

@media (max-width: 1200px) {

}

li {
  list-style: none;
}

.header {
  position: relative;
  background-color: var(--background-light);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding-right: 80px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-md) 0;
}

.logo{
  width: 120px;
  height: 45px;
}

.logo a {
  display: inline-block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--text-dark);
}


.logo img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.logo-placeholder {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 0.5rem;
  object-fit: cover;
  display: none;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  width: 30px;
  height: 21px;
  cursor: pointer;
}

.menu-toggle span {
  display: block;
  height: 3px;
  margin: 3px 0;
  background-color: var(--text-dark);
  transition: all 0.3s ease;
}

.menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translateY(8px);
}

.menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translateY(-8px);
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}



.nav-item {
  position: relative;
}

.nav-link {
  display: inline-block;
  padding: 0.75rem 1rem;
  font-weight: 500;
  color: var(--text-dark);
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 5px;
  width: 0;
  height: 2px;
  background-color: var(--primary-color);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.arrow {
  margin-left: 0.25rem;
  font-size: 0.75rem;
}

.dropdown {
  position: absolute;
  left: 0;
  top: 100%;
  background-color: var(--background-light);
  min-width: 220px;
  display: none;
  flex-direction: column;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
  border-radius: 6px;
  z-index: 999;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
}

.dropdown.open {
  display: flex;
  opacity: 1;
  transform: translateY(0);
}

.dropdown-link {
  display: inline-block;
  padding: 0.5rem 1rem;
  margin: 0.25rem 0;
  /* espacements verticaux */
  color: var(--text-dark);
  text-decoration: none;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
}

.dropdown-link::after {
  content: '';
  position: absolute;
  bottom: 3px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary-color);
  transition: width 0.3s ease;
}

.dropdown-link:hover {
  color: var(--primary-color);
}

.dropdown-link:hover::after {
  width: 100%;
}

/* Responsive */
@media (max-width: 1200px) {
  .menu-toggle {
    display: flex;
  }

  .nav-links {
    flex-direction: column;
    align-items: flex-start;
    position: fixed;
    right: -100%;
    top: 0;
    background: var(--background-light);
    width: 80%;
    height: 100vh;
    padding: 5rem 1rem 1rem;
    transition: right 0.3s ease;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .nav-links.active {
    right: 0;
    overflow: scroll;
  }

  .nav-item {
    width: 100%;
  }

  .nav-link-wrapper {
    width: 100%;
  }

  .dropdown {
    position: static;
    transform: none;
    opacity: 1 !important;
    display: none;
    box-shadow: none;
  }

  .dropdown.open {
    display: flex;
  }

  .dropdown-link {
    padding-left: 2rem;
  }
}
</style>
