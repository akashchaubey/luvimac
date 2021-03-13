<template>
    <section class="lm-services section" :class="pageClass">
        <div class="container wd-container">
            <div class="sec-title text-center">
            <h2>{{ commonServices.sectionTitle }}</h2>
            <p v-html="commonServices.sectionDec">{{ commonServices.sectionDec }}</p>
        </div>
        <div class="row">
            <div class="col-lg-4 col-md-6 col-12" v-for="service of commonServices.data" :key="service.service">
            <div class="srvs-single-box stl-one" :class="{ showMore: loadMore === service.title }">
                <div class="icon-box" v-html="service.icon">
                </div>
                <div class="ctn-box">
                <h3>{{ service.title }}</h3>
                <p class="sortContent" >{{ service.description }}</p>
                    <a href="javascript:void(0)" @click="readMore(service.title)" class="readmore">
                        <span></span>
                    </a>
                </div>
            </div>
            </div>
            <div class="col-12 text-center">
            <a href="/contact-us" class="btn stl-four">Start a Project</a>
            </div>
        </div>
        </div>
        </section>
</template>
<script>
    export default {
        props: ['commonServices', 'pageClass'],
        data(){
            return {
                loadMore:''
            }

        },
        methods: {
            readMore(value){
                console.log("called", value)
                if (this.loadMore == value) {
                    this.loadMore = ''
                }else{
                    this.loadMore = value
                }
                
            }
        },
    
    }

</script>