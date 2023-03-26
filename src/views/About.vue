<template>
    <div class="inner">
      <Pagetitle/>
    <section class="our-mission section pt-100 pb-100" style="overflow:hidden;">
      <div class="container-fluid wd-container">
        <div class="row flex-md-row-reverse">
          <div class="col-lg-6 col-md-6 col-12">
              <img src="../../public/img/about/our-mision-2.jpg" class="img-fluid">
              <div class="bgImg" :style="{transform: 'translate3d(0px, '+(-80+windowTop/5)+'px , 0px)'}"></div>
          </div>
          <div class="col-lg-6 col-md-6 col-12 d-flex align-items-center">
            <div class="ctn-box">
              <div class="sec-title line-left">
                <h2>Our Mission.</h2>
              </div>
              <div class="sub-title">
                <h3>Full-service IT support</h3>
              </div>
              <p>At Luvimac We provide our managed IT services to small and big size of businesses that have had software developed and to organizations that are looking for outsourcing expertise for the maintenance and development of their application. Whatever form of IT resource you are looking for, we can support you in this.</p>
              <a href="#" class="btn cta-black">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section lm-services bg pt-100 pb-100">
      <div class="container wd-container">
        <div class="sec-title text-center">
          <h2>What We Do.</h2>
          <p>We’re best placed to help build your online business: taking the time to learn about your company,<br> industry and commercial challenges</p>
        </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-12" v-for="service of services" :key="service.services">
          <div class="srvs-single-box stl-one">
            <div class="icon-box" v-html="service.icon">
            </div>
            <div class="ctn-box">
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
            </div>
          </div>
        </div>
        <div class="col-12 text-center">
          <a href="/contact-us" class="btn cta-black">Start a Project</a>
        </div>
      </div>
      </div>
    </section>
    <section class="get-started section">
      <div class="container d-flex align-items-center justify-content-center">
        <div class="box-container">
             <div class="sec-title wt text-center">
              <h2>Get Started</h2>
              <p>Lets Increase your business & knowledge. We deliver a high quality version of custom software and webshop that meets the basic needs. This is the place where you can get your own development teams in the short term.</p>
              <a href="/contact-us" class="btn cta-black-outline">Let’s Get Started</a>
            </div>
        </div>
      </div>
    </section>
    </div>
</template>
<script>
import Pagetitle from '../components/Pagetitle';
import aboutmeta from '../../metadata/about.json'
export default { 
  components:{
    Pagetitle,
  },
  data(){
        return{
            services:[
              {
                "id": 1,
                "title": "Web Design & Development",
                "description": "Online businesses are developing rapidly. We develop creative custom websites that fulfill your needs and increase ROI Customers. The basis for sustainable online success.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-web-design-development.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 2,
                "title": "Digital Marketing",
                "description": "We are one of the most leading strategic marketing & digital solutions provider companies that boosts online sales conversion and website traffic.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-digital-marketing.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 3,
                "title": "ECommerce Website",
                "description": "We deliver design and development of dynamic e-commerce websites user friendly. Magento, woocommerce platform that’s fully proven.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-e-commerce.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 4,
                "title": "Mobile app development",
                "description": "We can help you develop native apps, hybrid apps and progressive web apps with using mobile push notifications or augmented reality.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-app-design.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 5,
                "title": "Custom Software (PHP)",
                "description": "Develop your custom software system with us. Your webshop and CRM system must be seamlessly integrated into your existing systems. We have experienced software developers.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-custom-software.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 6,
                "title": "Maintenance & Support",
                "description": "We help you in maintenance, support and improve your existing software or new website especially on how practical the developed software is.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-maintenance-support.svg" class="vue-logo" />',
                "linkOne": "link1",
                }
            ],
            windowTop: 0,
            metadata:aboutmeta
        }
    },
    mounted() {
      window.addEventListener("scroll", this.onScroll)
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.onScroll)
    },
    methods: {
      onScroll(e) {
        this.windowTop = window.top.scrollY /* or: e.target.documentElement.scrollTop */
        // console.log({ top: this.windowTop });
      },
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
};
</script>

<style lang="scss" scoped>
.bgImg{
    width: calc(100% - 15px);
    height: calc(100% - 8px);
    position: absolute;
    top: 15px;
    right: 15px;
    background-color: #fff;
    background-image: linear-gradient(-45deg,#ff3b3b,#ffa219 85%);
    opacity: .7;
    z-index: -1;
}
  .get-started{
    position: relative;
    background:url(../../public/img/about/get-started.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    &:after{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(20, 22, 24, 0.65);
      z-index: 1;
    }
    .box-container{
      max-width: 866px;
      width: 100%;
      position: relative;
      z-index: 2;
      padding: 50px;
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0 0 20px rgba(0,0,0,0.1);
      border-radius: 15px;
      }
  }
</style>