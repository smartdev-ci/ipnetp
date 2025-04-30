import { defineStore } from 'pinia';
import axios from 'axios';

function decodeHtmlEntities(html: string): string {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}

export const useNewsStore = defineStore('news', {
  state: () => ({
    news: [] as any[],
    formationNews: [] as any[], // ✅ Ajouter la propriété pour les news de formation
    isLoaded: false, // ✅ à ajouter
  }),
  actions: {
    async fetchNews() {
      try {
        const response = await axios.get(
          'https://ipnetp.ci/wp-json/wp/v2/posts?per_page=4&orderby=date&order=desc&_embed'
        );
        this.news = response.data.map((post: any) => ({
          title: decodeHtmlEntities(post.title.rendered),
          date: new Date(post.date).toLocaleDateString('fr-FR'),
          image:
            post.jetpack_featured_media_url ||
            post._embedded['wp:featuredmedia']?.[0]?.source_url ||
            'https://placehold.co/600x400',
          categories:
            post._embedded['wp:term']?.[0]?.map((cat: any) => cat.name) || [],
        }));
      } catch (error) {
        console.error('Erreur lors de la récupération des actualités:', error);
      } finally {
        this.isLoaded = true; // ✅ important
      }
    },
    async fetchNewsByCategory(categoryId: number) {
      try {
        const response = await axios.get(
          `https://ipnetp.ci/wp-json/wp/v2/posts?categories=${categoryId}&per_page=4&orderby=date&order=desc&_embed`
        );
        this.formationNews = response.data.map((post: any) => ({
          title: decodeHtmlEntities(post.title.rendered),
          date: {
            day: new Date(post.date).getDate().toString(),
            month: new Date(post.date).toLocaleString('default', { month: 'short' }),
          },
          image:
            post.jetpack_featured_media_url ||
            post._embedded['wp:featuredmedia']?.[0]?.source_url ||
            'https://placehold.co/600x400',
          categories:
            post._embedded['wp:term']?.[0]?.map((cat: any) => cat.name) || [],
        }));
      } catch (error) {
        console.error('Erreur lors de la récupération des actualités de la catégorie:', error);
      }
    },
  },
});
