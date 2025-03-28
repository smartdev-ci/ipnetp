<template>
    <div class="page-container">
      <section class="header">
        <h1>LES MOTS DE LA DIRECTION</h1>
      </section>
      
      <section class="intro">
        <h2>Bienvenue à l’Ensemble Montplaisir !</h2>
        <p>
          Montplaisir est un ensemble scolaire situé à Valence dans la Drôme. Il se compose de 4 unités pédagogiques réparties sur deux sites :
        </p>
        <ul>
          <li>Le premier, situé dans les bâtiments historiques...</li>
          <li>Le second, situé dans la zone industrielle...</li>
        </ul>
      </section>
      
      <section class="content">
        <div class="text-block">
          <h2>Intégrer l’Ensemble Montplaisir, c’est…</h2>
          <p>
            Être accompagné par une communauté au service de la réussite des jeunes...
          </p>
        </div>
        <div class="image-block">
          <img src="https://zupimages.net/up/25/11/bhl8.png" alt="Illustration">
        </div>
      </section>
      
      <section class="content reverse">
        <div class="image-block">
          <img src="https://zupimages.net/up/25/11/bhl8.png" alt="Illustration">
        </div>
        <div class="text-block">
          <h2>Choisir une formation parmi des parcours variés...</h2>
          <p>
            Depuis sa création, l’établissement propose des formations répondant aux besoins des milieux professionnels...
          </p>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DirectionPage'
  }
  </script>
  
  <style scoped>
  .page-container {
    width: 80%;
    margin: 0 auto;
    font-family: Arial, sans-serif;
  }
  .header {
    text-align: center;
    margin-top: 20px;
    font-size: 24px;
    font-weight: bold;
  }
  .intro {
    margin: 20px 0;
    padding: 10px;
    background: #f4f4f4;
    border-radius: 8px;
  }
  .content {
    display: flex;
    align-items: center;
    margin: 20px 0;
  }
  .reverse {
    flex-direction: row-reverse;
  }
  .text-block {
    width: 50%;
    padding: 20px;
  }
  .image-block {
    width: 50%;
  }
  .image-block img {
    width: 100%;
    border-radius: 8px;
  }
  </style>
  