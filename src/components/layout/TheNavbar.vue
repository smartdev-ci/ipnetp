<template>
  <header class="header">
    <div class="container">
      <nav class="navbar">
        <!-- LOGO -->
        <div class="logo">
          <a href="#">
            <img src="https://images.pexels.com/photos/5428258/pexels-photo-5428258.jpeg" alt="Logo" class="logo-placeholder" />
            <span>IP<strong>NETP</strong></span>
          </a>
        </div>

        <!-- MENU TOGGLE (Mobile) -->
        <div class="menu-toggle" :class="{ active: isMenuOpen }" @click="toggleMenu">
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
            <!-- TOP LEVEL LINK -->
            <div class="nav-link-wrapper" @click="toggleMobileDropdown(index)">
              <a href="#" class="nav-link">
                {{ item.title }}
                <span v-if="item.children" class="arrow">▾</span>
              </a>
            </div>

            <!-- DROPDOWN MENU -->
            <ul
              v-if="item.children"
              class="dropdown"
              :class="{ open: isDropdownOpen(index) }"
            >
              <li v-for="(child, cIndex) in item.children" :key="cIndex">
                <a href="#" class="dropdown-link">{{ child }}</a>
              </li>
            </ul>
          </li>
        </ul>

      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const isMenuOpen = ref(false);
const dropdownStates = ref<Record<number, boolean>>({});

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const toggleMobileDropdown = (index: number) => {
  if (window.innerWidth <= 768) {
    dropdownStates.value[index] = !dropdownStates.value[index];
  }
};

const desktopOpen = (index: number) => {
  if (window.innerWidth > 768) dropdownStates.value[index] = true;
};

const desktopClose = (index: number) => {
  if (window.innerWidth > 768) dropdownStates.value[index] = false;
};

const isDropdownOpen = (index: number) => !!dropdownStates.value[index];

const menu = [
  {
    title: 'Notre institut',
    children: ['Mot de la directrice', 'Organisation']
  },
  {
    title: 'Formation',
    children: ['Formation initiale', 'Formation continue', 'Demande d\'adhésion', 'Nos spécialités', 'Nos diplômes']
  },
  {
    title: 'Activités & Services',
    children: ['IFEF', 'e-courrier', 'GRH']
  },
  {
    title: 'Actualités',
    children: ['Actualités Générales', 'Actualités Formations', 'Événements à venir']
  },
  {
    title: 'Associations IPNETP',
    children: ['Association des femmes', 'Mutuelle des agents', 'MORES-CI (Section IPNETP)']
  },
  {
    title: 'Documentation',
    children: ['Centre de Recherche et de Production', 'Cellule des Recherches pour l\'anglais', 'Revue IPNETP', 'Bibliothèque']
  },
  {
    title: 'Contacts'
  }
];

</script>

<style scoped>
.header {
  background-color: var(--background-light);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-md) 0;
}

.logo a {
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--text-dark);
}

.logo strong {
  color: var(--primary-color);
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
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
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
  margin: 0.25rem 0; /* espacements verticaux */
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
@media (max-width: 768px) {
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
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }

  .nav-links.active {
    right: 0;
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
