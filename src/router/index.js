import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PropertiesView from '@/views/PropertiesView.vue';
import AboutView from '@/views/AboutView.vue';
import ContactView from '@/views/ContactView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/properties', component: PropertiesView }, // Küçük harf
  {path: '/about', component: AboutView},
  {path: '/contact', component: ContactView},
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
