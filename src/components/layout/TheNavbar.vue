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
                <li
                  v-for="(child, cIndex) in item.children"
                  :key="cIndex"
                  :class="{ 'has-children': child.children }"
                  @mouseenter="
                    child.children ? desktopOpenSub(index, cIndex) : null
                  "
                  @mouseleave="
                    child.children ? desktopCloseSub(index, cIndex) : null
                  "
                >
                  <template v-if="!child.children">
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
                  </template>
                  <template v-else>
                    <div
                      class="dropdown-link has-submenu"
                      @click="toggleMobileSubDropdown(index, cIndex)"
                    >
                      {{ child.title }}
                      <span class="sub-arrow">›</span>
                    </div>
                    <ul
                      class="sub-dropdown"
                      :class="{ open: isSubDropdownOpen(index, cIndex) }"
                    >
                      <li
                        v-for="(subChild, scIndex) in child.children"
                        :key="scIndex"
                      >
                        <router-link
                          :to="subChild.link"
                          class="sub-dropdown-link"
                        >
                          {{ subChild.title }}
                        </router-link>
                      </li>
                    </ul>
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
const subDropdownStates = ref<Record<string, boolean>>({});

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const toggleMobileDropdown = (index: number) => {
  if (window.innerWidth <= 1000) {
    dropdownStates.value[index] = !dropdownStates.value[index];
  }
};

const toggleMobileSubDropdown = (parentIndex: number, childIndex: number) => {
  if (window.innerWidth <= 1000) {
    const key = `${parentIndex}-${childIndex}`;
    subDropdownStates.value[key] = !subDropdownStates.value[key];
  }
};

watch(isMenuOpen, (open) => {
  document.body.style.overflow = open ? "hidden" : "auto";
});

const desktopOpen = (index: number) => {
  if (window.innerWidth > 1000) dropdownStates.value[index] = true;
};

const desktopClose = (index: number) => {
  if (window.innerWidth > 1000) dropdownStates.value[index] = false;
};

const desktopOpenSub = (parentIndex: number, childIndex: number) => {
  if (window.innerWidth > 1000) {
    const key = `${parentIndex}-${childIndex}`;
    subDropdownStates.value[key] = true;
  }
};

const desktopCloseSub = (parentIndex: number, childIndex: number) => {
  if (window.innerWidth > 1000) {
    const key = `${parentIndex}-${childIndex}`;
    subDropdownStates.value[key] = false;
  }
};

const isDropdownOpen = (index: number) => !!dropdownStates.value[index];

const isSubDropdownOpen = (parentIndex: number, childIndex: number) => {
  const key = `${parentIndex}-${childIndex}`;
  return !!subDropdownStates.value[key];
};

const menu = [
  {
    title: "Notre institut",
    children: [
      { title: "Mot de la directrice", link: "/direction" },
      { title: "Organisation", link: "/organisation" },
    ],
  },
  {
    title: "Écoles de formation",
    children: [
      { title: "Formation initiale", link: "/initiale" },
      { title: "Formation continue", link: "/continue" },
      { title: "Concours d'entrée", link: "/admission" },
      { title: "Nos diplômes", link: "/diplomes" },
    ],
  },

  {
    title: "Recherche et Productions",
    children: [
      {
        title: "Centre de Recherche et de Production",
        link: "/centre-recherche-production",
      },
      {
        title: "Cellule des Recherches pour l'anglais",
        link: "/anglais",
      },
    ],
  },
  {
    title: "Activités et Services",
    children: [
      {
        title: "IFEF",
        link: "https://ipnetp-ifef.com/",
        external: true,
      },
      {
        title: "Services",
        children: [
          {
            title: "Service des Appuis Pédagogique (SAP)",
            link: "/sap",
          },
          {
            title: "Service de recherche et de valorisation (SRV)",
            link: "/srv",
          },
          { title: "Service de production (SP)", link: "/sp" },
        ],
      },
      {
        title: "Associations",
        children: [
          { title: "Association des femmes", link: "/femmes" },
          { title: "Mutuelle des agents", link: "/mutuelle" },
          {
            title: "MORES-CI (Section IPNETP)",
            link: "/mores-ci",
          },
        ],
      },
      {
        title: "Nos partenaires",
        link: "/partner",
      },
    ],
  },
  {
    title: "Actualités",
    link: "/#actualites",
  },

  {
    title: "Contacts",
    children: [
      {
        title: "Prendre RDV",
        link: "https://rdv.ipnetp.cloud/",
        external: true,
      },
      { title: "Nous contacter", link: "/nous-contacter" },
      { title: "Écrire à nos service", link: "/contact-service" },
    ],
  },
];

const setLanguage = (lang: string) => {
  console.log(`Langue changée en : ${lang}`);
};
</script>

<style scoped>
li {
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

.fr {
  background-color: #007bff;
  border-radius: 4px;
  color: #fff;
}

.lang-flag:hover {
  transform: scale(1.1);
}

@media (max-width: 1000px) {
  .flag-icon {
    width: 32px;
  }
}

li {
  list-style: none;
}

.header {
  position: relative;
  background-color: white;
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

.logo {
  width: 120px;
  height: 45px;
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
  background-color: #007bff;
  content: "";
  position: absolute;
  left: 0;
  bottom: 5px;
  width: 0;
  height: 2px;
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
  background-color: white;
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

.dropdown li {
  position: relative;
}

.dropdown-link {
  display: inline-block;
  padding: 0.5rem 1rem;
  margin: 0.25rem 0;
  color: var(--text-dark);
  text-decoration: none;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
  width: 100%;
  text-align: left;
}

.dropdown-link.has-submenu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sub-arrow {
  font-size: 1.2rem;
}

.dropdown-link::after {
  content: "";
  position: absolute;
  bottom: 3px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #007bff;
  transition: width 0.3s ease;
}

.dropdown-link:hover {
  color: var(--primary-color);
}

.dropdown-link:hover::after {
  width: 100%;
}

.has-children:hover .sub-dropdown {
  display: flex;
}

.sub-dropdown {
  position: absolute;
  left: 100%;
  top: 0;
  background-color: white;
  min-width: 220px;
  display: none;
  flex-direction: column;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
  border-radius: 6px;
  z-index: 1000;
  opacity: 0;
  transform: translateX(10px);
  transition: all 0.3s ease;
}

.sub-dropdown.open {
  display: flex;
  opacity: 1;
  transform: translateX(0);
}

.sub-dropdown-link {
  display: inline-block;
  padding: 0.5rem 1rem;
  margin: 0.25rem 0;
  color: var(--text-dark);
  text-decoration: none;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
}

.sub-dropdown-link::after {
  content: "";
  position: absolute;
  bottom: 3px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #007bff;
  transition: width 0.3s ease;
}

.sub-dropdown-link:hover {
  color: var(--primary-color);
}

.sub-dropdown-link:hover::after {
  width: 100%;
}

/* Responsive */
@media (max-width: 1000px) {
  .menu-toggle {
    display: flex;
  }

  .nav-links {
    flex-direction: column;
    align-items: flex-start;
    position: fixed;
    right: -100%;
    top: 0;
    background: white;
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

  .sub-dropdown {
    position: static;
    transform: none;
    box-shadow: none;
    display: none;
    padding-left: 1rem;
  }

  .sub-dropdown.open {
    display: flex;
    opacity: 1;
    transform: none;
  }

  .sub-dropdown-link {
    padding-left: 2rem;
  }
}
</style>
