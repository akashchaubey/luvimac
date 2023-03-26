<template>
        <section class="section lm-services pt-100 pb-100">
            <div class="container wd-container">
                <div class="sec-title text-center">
                    <h2 data-aos="fade-up" data-aos-delay="50">Industries</h2>
                </div>
                <div class="industries align-items-center d-flex mt-md-5">
                    <div class="industries_name mr-md-5">
                        <div class="industries_title" @click="showIndustries('e_commerce')" :class="{active : type == 'e_commerce'}">E-commerce</div>
                        <div class="industries_title" @click="showIndustries('food_drink')" :class="{active : type == 'food_drink'}">Food & Drink</div>
                        <div class="industries_title" @click="showIndustries('real_state')" :class="{active : type == 'real_state'}">Real State</div>
                        <div class="industries_title" @click="showIndustries('health_fitness')" :class="{active : type == 'health_fitness'}">Sports & Fitness</div>
                        <div class="industries_title" @click="showIndustries('travel_tourism')" :class="{active : type == 'travel_tourism'}">Travel & Tourism</div>
                    </div>
                    <div class="industries_img d-none d-md-block">
                        <div class="image_slide" v-for="d in data" :key="d.id" :class="d.className">
                            <div class="img-1">
                                <img v-if="type == d.type" :src="d.img1" :alt="d.type" data-aos="fade-right" data-aos-delay="50">
                            </div>
                            <div class="img2">
                                <img v-if="type == d.type" :src="d.img2" :alt="d.type" data-aos="fade-left" data-aos-delay="50">
                            </div>
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
            type:'e_commerce',
            data:[
                {
                    id:1,
                    type:'e_commerce',
                    img1:'/img/industries/ecommerce-1.png',
                    img2:'/img/industries/ecommerce-2.png',
                    className:'e-commerce',
                },
                {
                    id:2,
                    type:'food_drink',
                    img1:'/img/industries/food-drinks.png',
                    img2:'/img/industries/mobile-view.png',
                    className:'food-drink',
                },
                {
                    id:3,
                    type:'real_state',
                    img1:'/img/industries/real-estate-1.png',
                    img2:'/img/industries/real-estate-2.png',
                    className:'real-state',
                },
                
                {
                    id:4,
                    type:'health_fitness',
                    img1:'/img/industries/sport-fitness-1.png',
                    img2:'/img/industries/sport-fitness-2.png',
                    className:'health-fitness',
                },
                {
                    id:5,
                    type:'travel_tourism',
                    img1:'/img/industries/tour-travel-1.png',
                    // img2:'/img/industries/phone-7.png',
                    className:'travel-tourism',
                }
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
    height: 80vh;
    .industries_name {
        // width: 310px;
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
        width: calc(100% - 280px);
        // position: relative;
        .image_slide {
            position: relative;
            img{
                width: 100%;
            }
            .img2{
                position: absolute;
            }
            &.food-drink{
                .img2{
                    right: 20%;
                    width: 28%;
                    bottom: 10%;
                }
            }
            &.real-state{
                .img2{
                    left: 20%;
                    width: 23%;
                    bottom: 10%;
                    transform: rotate(32deg);
                }
            }
            &.e-commerce{
                .img2{
                    right: 10%;
                    width: 34%;
                    bottom: 4%;
                }
            }
            &.health-fitness{
                .img2{
                    right: 8%;
                    width: 21%;
                    bottom: 14%;
                }
            }
            &.travel-tourism{
                .img2{
                    display: none;
                }
            }
        }
    }
}
@media screen and (max-width:767px) {
    .industries {
        height: auto;
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