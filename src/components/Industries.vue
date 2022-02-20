<template>
        <section class="lm-services section">
            <div class="container wd-container">
                <div class="sec-title text-center">
                    <h2 data-aos="fade-up" data-aos-delay="50">Industries</h2>
                </div>
                <div class="industries align-items-center d-flex mt-md-5">
                    <div class="industries_name mr-md-5">
                        <div class="industries_title" @mouseover="showIndustries('food_drink')">Food & Drink</div>
                        <!-- <div class="industries_title" @mouseover="showIndustries('education')">Education</div> -->
                        <div class="industries_title" @mouseover="showIndustries('real_state')">Real State</div>
                        <div class="industries_title" @mouseover="showIndustries('e_commerce')">E-commerce</div>
                        <div class="industries_title" @mouseover="showIndustries('health_fitness')">Sports & Fitness</div>
                        <!-- <div class="industries_title" @mouseover="showIndustries('entertainment')">Entertainment</div> -->
                        <div class="industries_title" @mouseover="showIndustries('travel_tourism')">Travel & Tourism</div>
                        <!-- <div class="industries_title" @mouseover="showIndustries('sports')">Sports</div> -->
                    </div>
                    <div class="industries_img d-none d-md-block">
                        <div class="image_slide" v-for="d in data" :key="d.id">
                            <img class="img1" v-if="type == d.type" :src="d.img1" :alt="d.type" data-aos="fade-right" data-aos-delay="50">
                            <img class="img2" v-if="type == d.type" :src="d.img2" :alt="d.type" data-aos="fade-left" data-aos-delay="50">
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>
<script>
export default {
    data(){
        return {
            type:'food_drink',
            data:[
                {
                    id:1,
                    type:'food_drink',
                    img1:'/img/industries/food-drinks.png',
                    img2:'/img/industries/mobile-view.png',
                },
                {
                    id:2,
                    type:'education',
                    img1:'/img/industries/2.jpg',
                    img2:'/img/industries/phone-2.png',
                },
                {
                    id:3,
                    type:'real_state',
                    img1:'/img/industries/real-estate-1.png',
                    img2:'/img/industries/real-estate-2.png',
                },
                {
                    id:4,
                    type:'e_commerce',
                    img1:'/img/industries/ecommerce-1.png',
                    img2:'/img/industries/ecommerce-2.png',
                },
                {
                    id:5,
                    type:'health_fitness',
                    img1:'/img/industries/sport-fitness-1.png',
                    img2:'/img/industries/sport-fitness-2.png',
                },
                {
                    id:6,
                    type:'entertainment',
                    img1:'/img/industries/6.jpg',
                    img2:'/img/industries/phone-6.png',
                },
                {
                    id:7,
                    type:'travel_tourism',
                    img1:'/img/industries/travel-tourism-1.png',
                    // img2:'/img/industries/phone-7.png',
                },
                {
                    id:8,
                    type:'sports',
                    img1:'/img/industries/8.png',
                    img2:'/img/industries/phone-8.png',
                },
            ]
        }
    },
    methods: {
        showIndustries(value) {
            this.type = value
        }
    }
}
</script>
<style lang="scss">
.industries {
    .industries_name {
        width: 250px;
        .industries_title {
            font-size: 2.1vw;
            line-height: 2.5vw;
            font-weight: 800;
            cursor: pointer;
            margin: 0px 0 15px;
            white-space: nowrap;
             color: var(--font-stl-one);
        }
    }
    .industries_img {
        width: calc(100% - 250px);
        // position: relative;
        .image_slide {
            position: relative;
            img {
                width: 100%;
            }
            // .img1 {
            //     max-height: 500px;
            // }
            .img2 {
                position: absolute;
                bottom: 0;
                right: 20%;
                // height: 55vh;
                max-width: 270px;
                height: auto;
            }
        }
    }
}
@media screen and (max-width:767px) {
    .industries {
        display: flex;
        .industries_name {
            .industries_title {
                font-size: 7.2vw;
                line-height: 7.2vw;
            }
        }
    }
}
</style>