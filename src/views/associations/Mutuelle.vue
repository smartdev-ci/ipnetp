<template>
  <main class="page-container">
    <section class="s1">
      <div class="box-txt">
        <h2>Mutuelle des Agents de l'IPNETP(MUAGI)</h2>
        <div>
          <p>
            Fondée le 8 mars 1995, la Mutuelle des Agents de l'IPNETP (MUAGI)
            incarne une initiative commune et solidaire au sein de l'institut.
            Cette association, apolitique et non confessionnelle, est établie
            dans un esprit à but non lucratif, résultant de la volonté
            collective des travailleurs de l'IPNETP de renforcer les liens de
            solidarité entre eux.
          </p>
          <p>
            La MUAGI se définit comme un pilier essentiel favorisant le
            bien-être et la cohésion au sein de la communauté des travailleurs
            de l'institut. Tout agent de l'IPNETP peut devenir membre actif de
            cette mutuelle en adhérant et en s'acquittant régulièrement de ses
            cotisations. Cette adhésion permet non seulement de participer
            activement à la vie de la mutuelle mais également d'accéder aux
            nombreux avantages et services mis en place pour les membres.
          </p>
          <p>
            La mutuelle s'engage à offrir un soutien solide à ses membres, que
            ce soit en termes de protection sociale, d'aide mutuelle en cas de
            besoin, ou encore en favorisant des initiatives visant à améliorer
            la qualité de vie au travail. La MUAGI représente ainsi un espace
            d'échange, de partage et de solidarité au sein de l'IPNETP,
            contribuant à renforcer le tissu social et professionnel au sein de
            l'institution.
          </p>
        </div>
      </div>
      <div class="box-img">
        <img
          src="https://ipnetp.ci/wp-content/uploads/2023/12/mut.jpg"
          alt=""
        />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
section {
  margin: 0;
  display: flex;
  gap: 3%;
  height: fit-content;
  padding: 30px 0;
  width: 85vw;
  border-top: 1px solid rgba(55, 56, 58, 0.201);
}
section > div {
  border-radius: 15px;
}

.box-img {
  width: 45vw;
  height: 30vw;
  overflow: hidden;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.box-txt {
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  padding: 8px;
}

.box-txt div {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.box-txt h2 {
  color: #007bff;
  font-size: 28px;
  font-weight: bold;
}

h1 {
  border-bottom: solid 2px;
  width: fit-content;
  margin: auto;
}

.page-container {
  padding-top: 140px;
  width: 80%;
  margin: 0 auto;
  font-family: sans-serif;
  color: #12274a;
  position: relative;
  height: fit-content;
  display: flex;
  justify-content: start;
  flex-direction: column;
}

/* Responsivité */

@media (max-width: 1600px) {
  section {
    flex-direction: column;
    align-items: start;
  }

  .box-img,
  .box-txt {
    width: 100%;
  }
  .box-img {
    width: 60%;
    height: 30vw;
  }
}
</style>
