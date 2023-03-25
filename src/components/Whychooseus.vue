<template>
    <section class="section why-choose-us">
        <div class="container wd-container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-12">
                    <div class="img-box" v-html="commonWhyChoose.leftImg">
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                    <div class="ctn-box p18">
                        <div class="sub-title">
                            <h2>{{ commonWhyChoose.sectionTitle }}</h2>
                            <div class="sub-text" v-html="commonWhyChoose.shortPara"></div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="srvs-single-box stl-two">
                                    <!-- <div class="icon-box" v-html="service.icon"></div> -->
                                    <div class="ctn-box">
                                        <!-- <h3>{{ service.title }}</h3>
                                        <p>{{ service.description }}</p>
                                        <a :href="service.linkOne">Learn More</a> -->

                                        <div class="accordion accordionWcu" id="accordionChooseUs">
                                            <div class="card" v-for="(service, index) of commonWhyChoose.data" :key="index">
                                                <div class="card-header" :id="`heading-${index}`">
                                                    <h3 data-toggle="collapse" :data-target="`#collapse-${index}`" class="collapsed">{{ service.title }} <span class="icon-plus"><span class="icon"></span></span></h3>
                                                </div>
                                                <div :id="`collapse-${index}`" class="collapse" data-parent="#accordionChooseUs">
                                                    <div class="card-body" v-html="service.description">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="ctn-box">
                        <div class="accordion accordionWcu" id="accordionChooseUs">
                            <div class="card">
                                <div class="card-header" id="heading-1">
                                    <h3 data-toggle="collapse" data-target="#collapse-1" class="collapsed">100% Customer Satisfaction <span class="icon-plus"><span class="icon"></span></span></h3>
                                </div>
                                <div id="collapse-1" class="collapse" data-parent="#accordionChooseUs">
                                    <div class="card-body">
                                        Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> class.
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="heading-2">
                                    <h3 data-toggle="collapse" data-target="#collapse-2" class="collapsed">100% Customer Satisfaction <span class="icon-plus"><span class="icon"></span></span></h3>
                                </div>
                                <div id="collapse-2" class="collapse" aria-labelledby="heading-2" data-parent="#accordionChooseUs">
                                    <div class="card-body">
                                        Some placeholder content for the second accordion panel. This panel is hidden by default.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        props: ['commonWhyChoose', 'whyChooseClass'],
        data() {
            return {
                loadMore: ''
            }
        },
        methods: {
            readMore(value) {
                // console.log("called", value)
                if (this.loadMore == value) {
                    this.loadMore = ''
                } else {
                    this.loadMore = value
                }

            }
        },
    }
</script>

<style lang="scss">
    .accordionWcu{
        .card{
            background: none;
            border: none;
            .card-header {
                border-bottom: 0px solid rgba(0,0,0,.125);
                background-color: #514f4f08;
                margin-bottom: 0px !important;
                h3{
                    margin: 0;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    cursor: pointer;
                    .icon-plus{
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        width: 26px;
                        min-width: 26px;
                        height: 26px;
                        position: relative;
                        color: var(--font-stl-one);
                        .icon{
                            display: inline-flex;
                            width: 20px;
                            height: 3px;
                            background: currentColor;
                            position: relative;
                        }
                    }
                    &.collapsed {
                        .icon-plus{
                            .icon{
                                &::after{
                                    content: "";
                                    position: absolute;
                                    left: 0;
                                    right: 0;
                                    width: 20px;
                                    height: 3px;
                                    background: currentColor;
                                    transform: rotate(90deg);
                                }
                            }
                        }
                    }
                }   
            }
            .card-body{
                p{
                    display: block;
                    -webkit-line-clamp: initial;
                    -webkit-box-orient: initial;
                    overflow: visible;
                }
            }
            
        }
    }
</style>