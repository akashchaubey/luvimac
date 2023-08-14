import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueMeta from 'vue-meta'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './../public/css/animate.css';
import './../public/css/icofont.min.css';
import './../public/css/style.css';
import './../public/css/responsive.css';
// import 'jquery/src/jquery.js';
// import '../public/js/main.js';np

import store from './store'
import AOS from 'aos';
import 'aos/dist/aos.css'

Vue.config.productionTip = false
Vue.use(VueMeta)
new Vue({
  router,
  store,
  created(){
    AOS.init({
      duration: 900,
      once: true,
    });
  },

  render: h => h(App)
}).$mount('#app')