<template>
<section class="section why-choose-us" :class="pageClass">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-12">
            <div class="ctn-box p18">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-12" v-for="whyChooseUs of services" :key="whyChooseUs.whyChooseUs">
                    <div class="srvs-single-box stl-two">
                      <div class="icon-box" v-html="whyChooseUs.icon">
                      </div>
                      <div class="ctn-box">
                        <h3>{{ whyChooseUs.title }}</h3>
                        <p>{{ whyChooseUs.description }}</p>
                        <a :href="whyChooseUs.linkOne">Learn More</a>
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
        props: ['services', 'pageClass']
     }
</script>