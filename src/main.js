import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'


import 'bootstrap/dist/css/bootstrap.min.css';
import './../public/css/animate.css';
import './../public/css/icofont.min.css';
import './../public/css/style.css';
import './../public/css/responsive.css';
// import 'jquery/src/jquery.js';
// import 'popper.js/dist/popper.min.js';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import '../public/js/main.js';

import store from './store'
import AOS from 'aos';
import 'aos/dist/aos.css'

Vue.config.productionTip = false

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