import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useReviewStore = defineStore('review', () => {
  const reviews = ref<any[]>([]);
  const isLoaded = ref(false); // ✅ à ajouter

  async function fetchReviews() {
    try {
      const response = await fetch('https://ipnetp.ci/wp-json/wp/v2/posts?categories=691');
      const data = await response.json();

      const reviewsWithThumbnails = await Promise.all(
        data.map(async (post: any) => {
          const thumbnailUrl = await fetchThumbnail(post.featured_media);
          return {
            id: post.id,
            title: post.title.rendered,
            thumbnail: thumbnailUrl || 'default-image.jpg',
            link: post.link,
          };
        })
      );

      reviews.value = reviewsWithThumbnails;
    } catch (error) {
      console.error('Erreur lors de la récupération des revues:', error);
    } finally {
      isLoaded.value = true; // ✅ très important !
    }
  }

  async function fetchThumbnail(mediaId: number): Promise<string | null> {
    try {
      const response = await fetch(`https://ipnetp.ci/wp-json/wp/v2/media/${mediaId}`);
      const mediaData = await response.json();
      return mediaData.source_url;
    } catch {
      return null;
    }
  }

  return { reviews, fetchReviews, isLoaded };
});
