<template>
    <div class="wrapper" :class="{sticky: scrollPosition > 100}">
      <Header/>
        <router-view/>
      <Footer/>
      </div> 
</template>

<script>

import Header from './components/Header';
import Footer from './components/Footer';



export default {
      components:{
        Header,
        Footer
      },

      data() {
        return {
          scrollPosition: null  
        }
      },
       methods: {
        updateScroll() {
          this.scrollPosition = window.scrollY
        }
      },
      
      mounted() {
        window.addEventListener('scroll', this.updateScroll);
      },
    //   watch:{
    //     $route (to, from){
    //         console.log('called', this.$route.name)
    //     }
    // }

  }
</script>