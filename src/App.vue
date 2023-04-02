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
      metaInfo() {
        return {
          htmlAttrs: {
              lang: 'en-US'
            },
            meta: [
              { name: 'twitter:card', content: "summary_large_image"},
              { name: 'twitter:site', content: "@luvimac"},
              { name:"robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"},
              {property: 'og:type', content: "article"},
              {property: 'og:locale', content: "'en-US"},
              { property: 'og:site_name', content: "Luvimac"},
              { property: 'article:publisher', content: "https://www.facebook.com/luvimac"},
              {property: 'og:image:width', content: "1200"},
              {property: 'og:image:height', content: "630"},
              {property: 'og:image:type', content: "image/png"}
            ]
        }
    },
    //   watch:{
    //     $route (to, from){
    //         console.log('called', this.$route.name)
    //     }
    // }

  }
</script>