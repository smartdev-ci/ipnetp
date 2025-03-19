import { defineStore } from 'pinia';
import axios from 'axios';

interface NewsItem {
  title: string;
  date: string;
  image: string;
  categories: string[];
}

export const useNewsStore = defineStore('news', {
  state: () => ({
    news: [] as NewsItem[],
  }),
  actions: {
    async fetchNews() {
      try {
        const response = await axios.get('https://ipnetp.ci/wp-json/wp/v2/posts?per_page=5&orderby=date&order=desc&_embed');
        this.news = response.data.map((post: any) => ({
          title: post.title.rendered,
          date: new Date(post.date).toLocaleDateString('fr-FR'),
          image: post.jetpack_featured_media_url || post._embedded['wp:featuredmedia']?.[0]?.source_url || 'https://placehold.co/600x400',
          categories: post._embedded['wp:term']?.[0]?.map((cat: any) => cat.name) || [],
        }));
      } catch (error) {
        console.error('Erreur lors de la récupération des actualités:', error);
      }
    },
  },
});
