import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Blog from '../views/Blog.vue'
import Services from '../views/Services.vue'
import WebDevelopment from '../views/Web-development.vue'
import ECommerce from '../views/E-Commerce.vue'
import DigitalMarketing from '../views/Digital-marketing.vue'
import Magento from '../views/Magento.vue'
import Wordpress from '../views/Wordpress.vue'
import Customphp from '../views/Contact-us.vue'
import Ourwork from '../views/Our-work.vue'
import ContactUs from '../views/Contact-us.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {title: 'Home'}
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {title: 'About Us'}
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    meta: {title: 'Blog'}
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
    meta: {title: 'Services'}
  },
  {
    path: '/e-commerce',
    name: 'E Commerce',
    component: ECommerce,
    meta: {title: 'E Commerce'}
  },
  {
    path: '/web-development',
    name: 'Web Development',
    component: WebDevelopment,
    meta: {title: 'Web Development'}
  },
  {
    path: '/digital-marketing',
    name: 'Digital Marketing',
    component: DigitalMarketing,
    meta: {title: 'Digital Marketing'}
  },
  {
    path: '/magento',
    name: 'Magento',
    component: Magento,
    meta: {title: 'Magento'}
  },
  {
    path: '/wordpress',
    name: 'Wordpress',
    component: Wordpress,
    meta: {title: 'Wordpress'}
  },
  {
    path: '/custom-php',
    name: 'Custom php',
    component: Customphp,
    meta: {title: 'Custom php'}
  },
  {
    path: '/our-work',
    name: 'Our Work',
    component: Ourwork,
    meta: {title: 'Our Work'}
  },
  {
    path: '/contact-us',
    name: 'contact us',
    component: ContactUs,
    meta: {title: 'contact us'}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router
