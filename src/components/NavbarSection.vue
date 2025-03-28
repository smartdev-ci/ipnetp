<template>
  <nav>
    <!-- Barre supérieure -->
    <div class="top-bar">
      <div class="container">
        <div class="left">
          <!-- <span>contact@KUTheme.edu</span>
          <span>+1-3435-2356-222</span> -->
        </div>
        <div class="right">
          <button class="support-btn">CONCOURS 2025</button>
        </div>
      </div>
    </div>

    <!-- Barre principale -->
    <div class="main-nav">
      <div class="container">
        <div class="logo">
          <a href="/"> <img src="https://zupimages.net/up/25/11/bhl8.png" alt="IPNETP" /> </a>
        </div>
        <ul class="menu">
          <!-- <li>
            <a href="#" class="icon-home">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 9L12 2l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </a>
          </li> -->
          <li class="has-submenu">
            <a href="#">Formations</a>
            <ul class="submenu">
              <li><a href="#">Formation initiale</a></li>
              <li><a href="#">Formation continue</a></li>
              <li><a href="#">Demande d'adhesion</a></li>
              <li><a href="#">Nos spécialités</a></li>
              <li><a href="#">Nos diplômes</a></li>
            </ul>
          </li>
          <li class="has-submenu">
            <a href="#">Activités et services</a>
            <ul class="submenu">
              <li><a href="#">IFEF</a></li>
              <li><a href="#">e-Courrier</a></li>
              <li><a href="#">GRH</a></li>
            </ul>
          </li>
          <li class="has-submenu">
            <a href="#">Actualités</a>
            <ul class="submenu">
              <li><a href="#">Actualités générales</a></li>
              <li><a href="#">Actualités formation</a></li>
              <li><a href="#">Évenements à venir</a></li>
            </ul>
          </li>
          <li class="has-submenu">
            <a href="#">Association IPNETP</a>
            <ul class="submenu">
              <li><a href="#">Association des femmes de l'IPNETP</a></li>
              <li><a href="#">Mutuelle des Agents de l'IPNETP</a></li>
              <li><a href="#">MORES-CI (Section IPNETP)</a></li>
            </ul>
          </li>
          <li class="has-submenu">
            <a href="#">Documentation</a>
            <ul class="submenu">
              <li><a href="#">Centre de recherche et de production</a></li>
              <li><a href="#">Cellule des recherche pour l'anglais</a></li>
              <li><a href="#">Revue IPNETP</a></li>
              <li><a href="#">Bibliothèque IPNETP</a></li>
            </ul>
          </li>
          <li class="has-submenu">
            <a href="#">Contacts</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* ---------------------- Global ---------------------- */
nav {
  width: 100%;
}

body {
  padding-top: 40px;
  /* Hauteur de la barre supérieure */
}

/* ---------------------- Barre supérieure ---------------------- */
.top-bar {
  width: 100%;
  background-color: #12274a;
  color: white;
  font-size: 14px;
  position: fixed;
  height: 65px;
  top: 0;
  left: 0;
  width: 100%;
  /* padding: 15px 20px; */
  z-index: 1000;
}

.top-bar .container {
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  /* padding: 8px 20px; */
}

.top-bar .left span {
  margin-right: 15px;
}

.top-bar .right {
  display: flex;
  align-items: center;
  padding-right: 30px;
  height: 100%;
}

.icon-home svg {
  vertical-align: middle;
  display: inline-block;
}

/* Animation sur le bouton Concours 2025 */
.support-btn {
  background-color: #3ca2f5;
  border: none;
  color: #FFF;
  font-weight: bolder;
  padding: 8px 12px;
  font-size: 15px;
  cursor: pointer;
  border-radius: 5px;
  height: 50px;
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

/* Effet de pulsation au survol */
.support-btn:hover {
  background-color: #2268a1;
  color: #e9eff3;
  transform: scale(1.1);
  /* Effet de zoom */
}

/* Optionnel: Retour à la taille d'origine lorsque la souris quitte le bouton */
.support-btn:focus,
.support-btn:active {
  transform: scale(1);
}

/* ---------------------- Barre principale ---------------------- */
.main-nav {
  background-color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 65px;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 999;
  /* border: 2px solid green; */
  height: 70px;
  /* Juste sous la barre supérieure */
}

.main-nav .container {
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  height: 40px;
}

.logo img {
  height: 85px;
  width: 90px;
}

.menu {
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0;
}

.menu li {
  display: inline-block;
  position: relative;
  /* Important pour le positionnement des sous-menus */
}

.content {
  margin-top: 120px;
}

.menu a {
  text-decoration: none;
  color: #12274a;
  font-weight: bold;
  font-size: 16px;
  position: relative;
  padding-bottom: 5px;
}

/* Effet de chargement progressif sous les liens */
.menu a::after {
  content: '';
  width: 0;
  height: 3px;
  background-color: #12274a;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: width 0.4s ease-in-out;
}

.menu a:hover::after {
  width: 100%;
}

.menu a.active::after {
  width: 100%;
}

/* ---------------------- Sous-menus ---------------------- */
.has-submenu {
  position: relative;
}

.submenu {
  list-style: none;
  position: absolute;
  top: 100%;
  /* Positionné juste en dessous du parent */
  left: 0;
  background: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  width: 180px;
  display: none;
  opacity: 0;
  transform: translateY(10px);
  transition:
    opacity 0.3s ease-in-out,
    transform 0.3s ease-in-out;
}

.submenu li {
  display: block;
  padding: 8px 15px;
}

.submenu a {
  color: #12274a;
  font-size: 14px;
  text-decoration: none;
  display: block;
}

.submenu a:hover {
  background-color: #f4f4f4;
  border-left: 3px solid #12274a;
  padding-left: 12px;
}

/* Affichage du sous-menu au survol */
.has-submenu:hover .submenu {
  display: block;
  opacity: 1;
  transform: translateY(0);
}


@media screen and (max-width: 1272px)
{
   
  .main-nav {
  /* border: 2px solid green; */
  height: 45px;
  top: 45px;
  /* Juste sous la barre supérieure */
}

.main-nav .container {
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  height: 20px;
  /* border: 1px solid #000; */
}


.top-bar {
  height: 45px;
  z-index: 1000;
}
.top-bar .container {
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  /* border: 3px solid gold; */
  /* padding: 8px 20px; */
}

.support-btn {
  padding: 4px 6px;
  font-size: 12px;
  cursor: pointer;
  border-radius: 5px;
  height: 35px;
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
}


.top-bar .right {
  display: flex;
  align-items: center;
  padding-right: 30px;
  height: 80%;
  /* border: 2px solid red; */
}


}

</style>
