import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Blog from '../views/Blog.vue'
import Services from '../views/Services.vue'
import WebDevelopment from '../views/Web-development.vue'
import AppDevelopment from '../views/App-development.vue'
import ECommerce from '../views/E-Commerce.vue'
import DigitalMarketing from '../views/Digital-marketing.vue'
import Magento from '../views/Magento.vue'
import Wordpress from '../views/Wordpress.vue'
import Customphp from '../views/Custom-php.vue'
import Node from '../views/Node.vue'
import Laravel from '../views/Laravel.vue'
import Python from '../views/Python.vue'
import Ourwork from '../views/Our-work.vue'
import ContactUs from '../views/Contact-us.vue'
import Technology from '../views/technology/Index.vue'
import Angular from '../views/Angular.vue'
import Pwa from '../views/Pwa.vue'
import React from '../views/React.vue'
import VueJs from '../views/VueJs.vue'
import Android from '../views/Android.vue'
import Ionic from '../views/Ionic.vue'
import Ios from '../views/Ios.vue'
import Flutter from '../views/Flutter.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {title: 'Home', description: 'test'}
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
    path: '/technology',
    name: 'Technology',
    component: Technology,
    meta: {title: 'technology'}
  },
  {
    path: '/angular',
    name: 'Angular',
    component: Angular,
    meta: {title: 'angular'}
  },
  {
    path: '/pwa',
    name: 'Pwa',
    component: Pwa,
    meta: {title: 'pwa'}
  },
  {
    path: '/react',
    name: 'React',
    component: React,
    meta: {title: 'react'}
  },
  {
    path: '/vue',
    name: 'VueJs',
    component: VueJs,
    meta: {title: 'vue'}
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
    path: '/app-development',
    name: 'App Development',
    component: AppDevelopment,
    meta: {title: 'App Development'}
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
    path: '/node',
    name: 'Node',
    component: Node,
    meta: {title: 'node'}
  },
  {
    path: '/laravel',
    name: 'Laravel',
    component: Laravel,
    meta: {title: 'laravel'}
  },
  {
    path: '/python',
    name: 'Python',
    component: Python,
    meta: {title: 'python'}
  },
  {
    path: '/android',
    name: 'Android',
    component: Android,
    meta: {title: 'Android'}
  },
  {
    path: '/ionic',
    name: 'Ionic',
    component: Ionic,
    meta: {title: 'Ionic'}
  },
  {
    path: '/ios',
    name: 'iOS',
    component: Ios,
    meta: {title: 'iOS'}
  },
  {
    path: '/flutter',
    name: 'Flutter',
    component: Flutter,
    meta: {title: 'Flutter'}
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
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  document.description = to.meta.description;
  next();
});

export default router
