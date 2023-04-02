<template>
    <Pagetitle/>
</template>


<script>

import Pagetitle from '../components/Pagetitle';
// import servicemetadata from '../../metadata/flutter.json'

export default {
  components:{
    Pagetitle,
  },
  data(){
    return {
      // metadata:servicemetadata
    }
  },
    //     metaInfo() {
    //     return { 
    //         title: this.metadata.title,
    //         meta: [
    //           { name: 'description', content: this.metadata.description},
    //           { name: 'keyword', content: this.metadata.keyword},
    //           { name: 'twitter:title', content: this.metadata.twitter_title},
    //           { property: 'og:title', content: this.metadata.og_title},
    //           { property: 'og:description', content: this.metadata.og_description},
    //           {property: 'og:type', content: this.metadata.og_type},
    //           {property: 'og:url', content: this.metadata.og_url}
    //         ]
    //     }
    // }
}
</script>