<template>
  <main>
    <section class="partners-intro">
      <h1>Nos Partenaires</h1>
      <p class="subtitle">
        Découvrez les organisations qui nous accompagnent dans notre mission
      </p>
      <div class="divider"></div>
    </section>

    <section class="partners-grid">
      <!-- Partenaire en grille 2 par ligne -->
      <div class="partner-card" v-for="partner in partners" :key="partner.id">
        <div class="logo-container">
          <img
            :src="partner.logo"
            :alt="partner.name + ' logo'"
            class="partner-logo"
          />
        </div>
        <div class="partner-info">
          <h2>{{ partner.name }}</h2>
          <p class="partner-description">{{ partner.description }}</p>
          <div class="partner-meta">
            <span class="partner-type">{{ partner.type }}</span>
            <a
              :href="partner.website"
              target="_blank"
              rel="noopener noreferrer"
              class="partner-link"
            >
              Visiter le site <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="call-to-action">
      <h2>Devenez partenaire</h2>
      <p>
        Vous souhaitez collaborer avec nous ? Contactez-nous pour discuter des
        opportunités de partenariat.
      </p>
      <router-link to="/contacts/nous-contacter" class="cta-button">Nous contacter</router-link>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      partners: [
        {
          id: 1,
          name: "GIZ (Deutsche Gesellschaft für Internationale Zusammenarbeit)",
          logo: "https://www.giz.de/static/en/images/giz-logo.gif",
          description:
            "La GIZ (Coopération allemande) accompagne notre institut dans le renforcement des capacités professionnelles et l'innovation pédagogique, à travers des programmes financés et des expertises techniques.",
          type: "Coopération internationale",
          website: "https://www.giz.de/en/worldwide/346.html",
        },
        {
          id: 2,
          name: "Université Alassane Ouattara (UAO)",
          logo: "https://i0.wp.com/univ-ao.edu.ci/wp-content/uploads/2021/06/LOGO-PSD.png?w=1250&ssl=1",
          description:
            "L'Université Alassane Ouattara (UAO) est un partenaire académique clé pour notre institut. Ce partenariat stratégique permet de mutualiser nos expertises en formation enseignante et recherche pédagogique, afin de développer des solutions innovantes pour l'éducation en Côte d'Ivoire.",
          type: "Université public",
          website: "https://univ-ao.edu.ci/",
        },
        {
          id: 3,
          name: "Université du Québec à Trois-Rivières",
          logo: "https://www.uqtr.ca/u20-img/logos/logo-uqtr-entete.png",
          description:
            "L'Université du Québec à Trois-Rivières (UQTR) collabore avec notre institut pour des échanges d'expertise en pédagogie universitaire et la co-construction de programmes de formation innovants.",
          type: "Université internationale (Canada)",
          website: "https://www.uqtr.ca/index.shtml",
        },
        {
          id: 4,
          name: "Direction des Examens et Concours (DEXCO)",
          logo: "data:image/png;base64,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",
          description:
            "La DEXCO collabore avec notre institut pour l'élaboration et la modernisation des dispositifs d'évaluation certificative, garantissant l'excellence et l'équité des examens nationaux",
          type: "Institution gouvernementale",
          website: "https://inscription.mesrs-ci.net/dexco",
        },
        {
          id: 5,
          name: "Centre de la Promotion des Nouvelles Technologies de l'Information et de la Communication (CPNTIC)",
          logo: "https://cpntic.com/assets/img/core-img/cpntic.png",
          description:
            "Le CPNTIC, centre d’excellence ivoirien des TIC, est notre partenaire pour innover dans l’éducation numérique. Ensemble, nous formons aux métiers du futur et modernisons les pratiques pédagogiques.",
          type: "Partenaire technologique",
          website: "https://cpntic.com/",
        },
        {
          id: 6,
          name: "Ministère de l'Enseignement Technique, de la Formation Professionnelle et de l'Apprentissage",
          logo: "https://scontent-los2-1.xx.fbcdn.net/v/t1.6435-9/175196433_1375295989512146_3541640708401330709_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEW8qZ8N9mqgRyendL8l4THDZS3sBEe5iMNlLewER7mI-MbW6UVwfDX6xrrqgP3CAu0ELxMMKTG7cEbzX5ZPfQl&_nc_ohc=lJpGX6ZvFJgQ7kNvwGo9fZL&_nc_oc=Adlr8qM45qStyFbzaI-xwUtEP9IKXCYVTANkcCmL7wuE7iCChIWgW8ALdmRJrJOxuic&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=_aacy-lrftuT5BvRReiCYQ&oh=00_AfRNYE7idfHOKK8PkiKLowJYjDMRM8EFc4zHFvbB2W9xdg&oe=68A18C93",
          description:
            "Partenaire institutionnel clé, ce ministère valide et soutient nos programmes de formation professionnelle, garantissant leur alignement sur les besoins du marché de l'emploi en Côte d'Ivoire.",
          type: "Institution gouvernementale",
          website: "https://formation-professionnelle.gouv.ci/",
        },
        {
          id: 7,
          name: "AGEFOP (Agence Nationale de la Formation Professionnelle)",
          logo: "/images/logo-agefop.png",
          description:
            "L'AGEFOP finance et certifie nos programmes de formation professionnelle, facilitant l'accès des apprenants à des qualifications reconnues par le marché du travail ivoirien",
          type: "Opérateur public de la formation professionnelle",
          website: "https://www.agefop.ci/",
        },
        // {
        //   id: 8,
        //   name: "AFD",
        //   logo: "https://via.placeholder.com/150?text=AFD",
        //   description:
        //     "Appui au développement des infrastructures et équipements pédagogiques de pointe.",
        //   type: "Agence de développement",
        //   website: "https://afd.fr",
        // },
        // {
        //   id: 9,
        //   name: "Union Européenne",
        //   logo: "https://via.placeholder.com/150?text=UE",
        //   description:
        //     "Financement de projets éducatifs dans le cadre des programmes de coopération internationale.",
        //   type: "Institution internationale",
        //   website: "https://europa.eu",
        // },
      ],
    };
  },
};
</script>

<style scoped>
main {
  padding-top: 100px;
  background-color: #f9f9f9;
  min-height: 100vh;
  padding-bottom: 60px;
}

.partners-intro {
  text-align: center;
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto 40px;
}

.partners-intro h1 {
  font-size: 2.5rem;
  color: var(--dark);
  margin-bottom: 15px;
}

.subtitle {
  font-size: 1.1rem;
  color: var(--text-color);
  opacity: 0.8;
}

.divider {
  width: 80px;
  height: 4px;
  background-color: var(--blue);
  margin: 25px auto;
  border-radius: 2px;
}

/* Grille de partenaires */
.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.partner-card {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.partner-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.logo-container {
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--blue-light);
  padding: 20px;
}

.partner-logo {
  max-width: 70%;
  max-height: 70%;
  object-fit: contain;
  /* Suppression du filtre grayscale et de l'opacité réduite */
  transition: transform 0.3s ease;
}

.partner-card:hover .partner-logo {
  /* On garde juste un léger zoom au survol */
  transform: scale(1.05);
}

.partner-info {
  padding: 25px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.partner-info h2 {
  color: var(--dark);
  margin-bottom: 12px;
  font-size: 1.4rem;
}

.partner-description {
  color: var(--text-color);
  line-height: 1.6;
  margin-bottom: 20px;
  flex: 1;
}

.partner-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.partner-type {
  font-size: 0.85rem;
  color: var(--blue);
  background-color: var(--blue-light);
  padding: 4px 10px;
  border-radius: 12px;
  font-weight: 500;
}

.partner-link {
  display: inline-flex;
  align-items: center;
  color: var(--blue);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.partner-link span {
  margin-left: 5px;
  transition: transform 0.3s ease;
}

.partner-link:hover {
  color: var(--dark);
}

.partner-link:hover span {
  transform: translateX(3px);
}

.call-to-action {
  text-align: center;
  max-width: 800px;
  margin: 80px auto 0;
  padding: 40px 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.call-to-action h2 {
  font-size: 2rem;
  color: var(--dark);
  margin-bottom: 15px;
}

.call-to-action p {
  color: var(--text-color);
  margin-bottom: 30px;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-button {
  display: inline-block;
  padding: 12px 30px;
  background-color: #0069d9;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.cta-button:hover {
  background-color: #0069d9;
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 1000px) {
  .partners-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .partners-grid {
    grid-template-columns: 1fr;
    max-width: 600px;
  }

  .partner-card {
    flex-direction: row;
    height: auto;
  }

  .logo-container {
    width: 150px;
    height: auto;
    flex-shrink: 0;
  }
}

@media (max-width: 600px) {
  .partner-card {
    flex-direction: column;
  }

  .logo-container {
    width: 100%;
    height: 150px;
  }

  .partners-intro h1 {
    font-size: 2rem;
  }

  .call-to-action {
    margin-top: 40px;
  }
}

@media (max-width: 480px) {
  .partners-intro h1 {
    font-size: 1.8rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .call-to-action h2 {
    font-size: 1.6rem;
  }
}
</style>
