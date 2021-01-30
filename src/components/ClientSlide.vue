<template>
<section class="client-logo section">
	<div class="container wd-container">
		<carousel class="brand-slide" @changed="changed" @updated="updated"  :autoplay="true" :nav="false" :dots="false" :smartSpeed="2500" :autoplayTimeout="3000" :responsive="{0:{items:1},480:{items:2},768:{items:2},992:{items:3}, 1200:{items:6, margin:30,}}">
            <div v-for="client in clientLists" :key="client.id" class="client d-flex align-items-center justify-content-center">
                <a v-bind:href="client.linkOne">
                    <img :src="client.image" alt="test">
                </a>
			</div>		
        </carousel>
	</div>
</section>
</template>
<script>
import carousel from 'vue-owl-carousel'
export default {
    components: { 
        carousel 
    },
    data(){
        return {
            clientLists:[
                {
                "id": 1,
                "alt": "web development",
                "image": "../../img/client/client-1.png",
                "linkOne": "https//www.brandname.com",
                },
                {
                "id": 2,
                "alt": "web development",
                "image": "../../img/client/client-2.png",
                "linkOne": "https//www.brandname.com",
                },
                {
                "id": 3,
                "alt": "web development",
                "image": "../../img/client/client-3.png",
                "linkOne": "https//www.brandname.com",
                },
                {
                "id": 4,
                "alt": "web development",
                "image": "../../img/client/client-4.png",
                "linkOne": "https//www.brandname.com",
                },
                {
                "id": 5,
                "alt": "web development",
                "image": "../../img/client/client-5.png",
                "linkOne": "https//www.brandname.com",
                },
                {
                "id": 6,
                "alt": "web development",
                "image": "../../img/client/client-6.png",
                "linkOne": "https//www.brandname.com",
                },
                {
                "id": 7,
                "alt": "web development",
                "image": "../../img/client/client-7.png",
                "linkOne": "https//www.brandname.com",
                },
            ]
        }
    },

    methods:{
        changed(){
            console.log(changed)
                
        },
        updated(){
            console.loge(updated);
        }
    }
};

</script>

<style lang="scss" scoped>
.client-logo{
    .client{
        height: 100px;
        padding: 10px;
        img{
        width: 100%;
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        transition: all 0.3s ease-in-out;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -ms-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        max-height: 65px;
        }
    }
}
</style>