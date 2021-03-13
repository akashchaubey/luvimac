<template>
    <section class="section why-choose-us">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-12">
                    <div class="img-box" v-html="commonWhyChoose.leftImg">
                        {{commonWhyChoose.leftImg}}
                    </div>
                    
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                    <div class="ctn-box p18">
                        <div class="sub-title">
                            <h2>{{ commonWhyChoose.sectionTitle }}</h2>
                            <p>{{ commonWhyChoose.shortPara }}</p>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-12" v-for="service of commonWhyChoose.data"
                                :key="service.service">
                                <div class="srvs-single-box stl-two">
                                    <div class="icon-box" v-html="service.icon">
                                    </div>
                                    <div class="ctn-box">
                                        <h3>{{ service.title }}</h3>
                                        <p>{{ service.description }}</p>
                                        <a :href="service.linkOne">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                console.log("called", value)
                if (this.loadMore == value) {
                    this.loadMore = ''
                } else {
                    this.loadMore = value
                }

            }
        },
    }
</script>