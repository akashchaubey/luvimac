<template>

  <div class="home">
      <Slider :main-slider-title="metadata.main_image_alt_name" />
        <section class="lm-services section">
      <div class="container wd-container">
        <div class="sec-title text-center">
        <h2 data-aos="fade-up" data-aos-delay="50">About Luvimac</h2>
        <div class="sub-text" data-aos="fade-up" data-aos-delay="200">
          <p>We are Luvimac- A Digital agency for technology and creativity; building an online brand experience that converts.<br> We’ll collaborate with you to build a plan that works for your business.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-12" v-for="service of HomeServices" :key="service.id">
          <div class="srvs-single-box left" data-aos="fade-up" data-aos-delay="50">
            <div class="icon-box" v-html="service.icon">
            </div>
            <div class="ctn-box">
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
    <section class="lm-passion section d-flex align-items-center">
      <div class="container">
        <div class="sec-title text-center">
          <h2>PASSION LEADS TO SUCCESS</h2>
            <p><small>We believe that teamwork and an open exchange of ideas leads to the greatest success.</small></p>
        </div>
      </div>
    </section>
    <section class="lm-home-services section">
      <div class="container wd-container">
        <div class="sec-title text-center">
        <h2>Our Services.</h2>
        <div class="sub-text max-800 mx-auto">
          <p>Do you want to create your own website, blogs, custom webshop and mobile apps for restaurants, fashion stores, real estates and consulting services?<br> Luvimac builds unique websites & native mobile apps and ensures that your website stands out.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
            <img src="../../public/img/lm-home-services.png" class="img-fluid" alt="">
        </div>
      </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-12" v-for="services of HomeOurServices" :key="services.id">
          <div class="srvs-single-box left">
            <div class="icon-box" v-html="services.icon">
            </div>
            <div class="ctn-box">
              <h3>{{ services.title }}</h3>
              <p>{{ services.description }}</p>
              </div>
          </div>
        </div>
        </div>
      </div>
    </section>
    <section class="lm-hm-talk">
      <div class="container wd-container text-center">
        <router-link to="/contact-us">Let’s Talk About Your Project</router-link>
        {{ homemeta }}
      </div>
    </section>
    <Industries />
    <!-- <ClientSlide /> -->
  </div>
</template>


<script>
import Slider from '../components/Slider'
import ClientSlide from '../components/ClientSlide'
import Industries from '../components/Industries'
import homemeta from '../../metadata/home.json'
  export default {
    name: 'Home',
    components: {
    Slider,
    ClientSlide,
    Industries
    
  },
  data(){
        return{
          metadata:homemeta,
            HomeServices:[
              {
                "id": 1,
                "title": "Branding & Design",
                "description": "We help you with every possible design and branding needs, from a new logo to a complete company branding. Your corporate identities are in safe hands with our designers.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-branding-design.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 2,
                "title": "Web Design & Development",
                "description": "We help you to sell your products via online. We ensure you that I developed a number of e-commerce and custom websites based on our customer requirements.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-web-design-development.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 3,
                "title": "APP Design & Development",
                "description": "Mobile App Development for all small and big size growing companies. Expert in user-friendly apps design development.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-app-design.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 4,
                "title": "Online Marketing",
                "description": "Here is all in one place for your online marketing. We work remotely to promote and advertise your products or services online in the world.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-online-marketing.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 5,
                "title": "Maintenance & Support",
                "description": "We provide support and maintenance services for our clients.  Also, we can manage all those projects which we have not developed. We can help you maintain your website by performing checks and updates on your website.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-maintenance-support.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 6,
                "title": "Planning & Strategy",
                "description": "Our Strategy and Consulting Team acts as your team member for your business, We make sure that you are equipped to tackle your digital challenges. We have several years of experience creating affordable websites for customers.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-planning-strategy.svg" class="vue-logo" />',
                "linkOne": "link1",
                }
            ],

            HomeOurServices:[
              {
                "id": 1,
                "title": "Web Development",
                "description": "Looking for web development? We are here to help you, specialized in creating stunning websites for start-ups, large and small size of businesses. We develop; as you want.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-web-design-development.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 2,
                "title": "E-Commerce",
                "description": "We offer countless opportunities to stimulate sales, increase brand awareness and discover new opportunities. We specialize in developing E-commerce webshops that meet your requirements because a good online web store attract more customers and deliver good results.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-e-commerce.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 3,
                "title": "Digital Marketing",
                "description": "We are experienced agency partners for digital marketing that believes in the power of data-driven marketing and brand communication. Luvimac specializes in creating optimal content for your products and services, we know how to use that content in the perfect way.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-digital-marketing.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
            ]
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


<style lang="scss" scoped>

  .lm-passion{
    padding: 0px;
    height: 100vh;
    min-height: 250px;
    max-height: 470px;
    position: relative;
    background: url("../../public/img/passion-bg.jpg");
    background-position: center center;
    background-attachment: fixed;
    .sec-title{padding-bottom: 0px; z-index: 1; p,h2{color: var(--w-color);}}
    &:after{
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: var(--black-color);
      opacity: 0.9;
    }
  }

  .lm-hm-talk{
    background: #141618;
    padding: 45px 0px;
    a{color:var(--w-color); font-size: 20px; font-weight: 700;}
  }

  @media(max-width: 991px){
    .lm-passion{max-height: 400px;}
  }

  @media(max-width: 767px){
    .lm-passion{max-height: 350px;}
  }

  @media(max-width: 480px){
    .lm-passion{max-height: 300px;}
  }

</style>