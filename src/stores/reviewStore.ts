import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useReviewStore = defineStore('review', () => {
  const reviews = ref<any[]>([]);

  // Fonction pour récupérer les revues
  async function fetchReviews() {
    try {
      const response = await fetch('https://ipnetp.ci/wp-json/wp/v2/posts?categories=691');
      const data = await response.json();

      // Récupération des données des revues avec les miniatures
      const reviewsWithThumbnails = await Promise.all(
        data.map(async (post: any) => {
          const thumbnailUrl = await fetchThumbnail(post.featured_media);

          return {
            id: post.id,
            title: post.title.rendered,
            thumbnail: thumbnailUrl || 'default-image.jpg', // Image par défaut si non trouvée
            link: post.link,
          };
        })
      );

      reviews.value = reviewsWithThumbnails;
    } catch (error) {
      console.error('Erreur lors de la récupération des revues:', error);
    }
  }

  // Fonction pour récupérer l'URL de la miniature via l'ID du `featured_media`
  async function fetchThumbnail(mediaId: number): Promise<string | null> {
    try {
      const response = await fetch(`https://ipnetp.ci/wp-json/wp/v2/media/${mediaId}`);
      const mediaData = await response.json();
      return mediaData.source_url; // L'URL de l'image
    } catch (error) {
      console.error('Erreur lors de la récupération de la miniature:', error);
      return null; // Si erreur, retourner null
    }
  }

  return { reviews, fetchReviews };
});
