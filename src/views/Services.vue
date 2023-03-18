<template>
    <Pagetitle/>
</template>


<script>

import Pagetitle from '../components/Pagetitle';
import servicemetadata from '../../metadata/services.json'

export default {
  components:{
    Pagetitle,
  },
  data(){
    return {
      metadata:servicemetadata
    }
  },
        metaInfo() {
        return { 
            title: this.metadata.title,
            meta: [
                { name: 'description', content: this.metadata.description},
                { name: 'keyword', content: this.metadata.keyword},
                { property: 'og:title', content: this.metadata.og_title},
                { property: 'og:description', content: this.metadata.og_description},
                {property: 'og:type', content: this.metadata.og_type}
            ]
        }
    }
}
</script>