import { createRouter, createWebHashHistory } from 'vue-router';
import AboutmeSection from '@/components/main-section/content-section/AboutmeSection/index.AboutmeSection.vue';
import PortfolioSection from '@/components/main-section/content-section/PortfolioSection/index.PortfolioSection.vue';
import CertifiedSection from '@/components/main-section/content-section/CertifiedSection/index.CertifiedSection.vue';
import ContactSection from '@/components/main-section/content-section/ContactSection/index.ContactSection.vue';

const routes = [
  { path: '/', redirect: '/about-me' },
  { path: '/about-me', component: AboutmeSection },
  { path: '/portfolio', component: PortfolioSection },
  { path: '/certified', component: CertifiedSection },
  { path: '/contact', component: ContactSection },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;