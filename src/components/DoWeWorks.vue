<template>
    <section class="section we-works">
        <div class="row container mx-auto">
            <div class="col-md-12 p-0 mx-auto main-title">
                <div class="subtitle-text-work" data-aos="fade-up" data-aos-duration="1000">How Do We</div>
                <div class="works" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">Works</div>
                <div class="subtitle-text-work" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">for Web Development</div>
            </div>
        </div>
        <div class="row container px-0 mx-auto my-4 py-4">
            <div class="col-md-6">
                <div class="first-item">
                    <div class="first-item-title mb-3" data-aos="fade-up" data-aos-duration="1000">
                        {{ commonServices.sectionTitle }}
                    </div>
                    <div class="first-item-dec mb-3" data-aos="fade-up" data-aos-duration="1000" v-html="commonServices.sectionDec">
                       {{ commonServices.sectionDec }}
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="second-item">
                    <div class="second-item-content mb-3" data-aos="fade-up" data-aos-duration="1000" v-for="service of commonServices.data" :key="service.id">
                        <div class="d-flex align-items-center mb-3">
                            <div class="icon-box" v-html="service.icon"></div>
                            <div class="second-item-title mb-md-3">{{ service.title }}</div>
                        </div>
                        
                        <div class="second-item-dec">{{ service.description }}</div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: ['commonServices', 'pageClass'],
}
</script>

<style lang="scss">
.subtitle-text-work {
    font-size: 10vw;
    line-height: 10vw;
    font-weight: 800;
}
.works {
        font-size: 14vw;
        line-height: 14vw;
        -webkit-text-stroke: 1.4px var(--font-stl-one);
        color: var(--strok-text);
        letter-spacing: -.9vw;
        font-weight: 800;
    }
.we-works {
    color: var(--font-stl-one);
    .first-item {
        position: sticky;
        top: 70px;
        left: 0;
        .first-item-title {
            font-size: 22px;
            line-height: 26px;
            font-weight: 800;
        }
        // .first-item-dec {
        //     font-size: 22px;
        //     line-height: 26px;
        // }
    }
    .second-item {
        .second-item-content {
                padding: 15px;
                transition: all .5s ease-in-out;
                box-shadow: none;
                border-radius: 10px;
                &:hover {
                    box-shadow: 0 5px 20px 0px #0000001a;
                    .icon-box {
                        svg {
                            transform: rotateY(180deg);
                             transition: all .5s ease-in-out;
                        }
                    }
                }
            .icon-box {
                margin-right: 15px;
                // padding-top: 15px;
                svg {
                    width: 64px;
                    height: 64px;
                    fill: var(--font-stl-one);
                    transform: rotateY(0deg);
                     transition: all .5s ease-in-out;
                }
            }
            .second-item-title {
                font-size: 32px;
                line-height: 45px;
                letter-spacing: -2px;
                font-weight: 800;
            }
        }
    }
}

@media screen and (min-width:576px) {
    .subtitle-text-work {
        font-size: 6vw;
        line-height: 6vw;
    }
    .works {
        font-size: 12vw;
        line-height: 12vw;
    }
}
@media screen and (min-width:992px) {
    .subtitle-text-work {
        font-size: 4.4vw;
        line-height: 4.4vw;
    }
    .works {
        font-size: 11vw;
        line-height: 11vw;
    } 
    .we-works .first-item .first-item-title {
        font-size: 25px;
        line-height: 26px;
    }
    
}
@media screen and(max-width:576px) {
    .we-works .second-item .second-item-content .second-item-title {
        font-size: 25px;
        line-height: 30px;
    }
}
</style>