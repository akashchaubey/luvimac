<template>
  <div class="home">
    <Slider />
        <section class="lm-services section">
      <div class="container wd-container">
        <div class="sec-title text-center">
        <h2>About Brooklyn.</h2>
        <p>We’re a creative agency located in <strong>Brooklyn, New York.</strong><br> We’ve won a ton of awards and have been featured in all of the magazines.</p>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-12" v-for="service of HomeServices" :key="service.id">
          <div class="srvs-single-box left">
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
          <p><small>2013 UNITED THEMES™</small></p>
        </div>
      </div>
    </section>
    <section class="lm-home-services section">
      <div class="container wd-container">
        <div class="sec-title text-center">
        <h2>Our Services.</h2>
        <p>We realize that your competition is always just a click away and <strong>creating a professional</strong>,<br> informative and easy-to-use website, on your budget, is our main goal.</p>
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
      </div>
    </section>
    <ClientSlide />
  </div>
</template>


<script>
import Slider from '../components/Slider'
import ClientSlide from '../components/ClientSlide'
  export default {
    name: 'Home',
    components: {
    Slider,
    ClientSlide
  },
  data(){
        return{
            HomeServices:[
              {
                "id": 1,
                "title": "Planning & Strategy",
                "description": "We’re digitally inspired web development team and committed to creating cutting-edge web experiences.",
                "icon": '<img svg-inline src="../../public/img/icons/lm-sample-icon.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 2,
                "title": "Planning & Strategy",
                "description": "We’re digitally inspired web development team and committed to creating cutting-edge web experiences.",
                "icon": '<img svg-inline src="../../public/img/icons/lm-sample-icon.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 3,
                "title": "Planning & Strategy",
                "description": "We’re digitally inspired web development team and committed to creating cutting-edge web experiences.",
                "icon": '<img svg-inline src="../../public/img/icons/lm-sample-icon.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 4,
                "title": "Planning & Strategy",
                "description": "We’re digitally inspired web development team and committed to creating cutting-edge web experiences.",
                "icon": '<img svg-inline src="../../public/img/icons/lm-sample-icon.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 5,
                "title": "Planning & Strategy",
                "description": "We’re digitally inspired web development team and committed to creating cutting-edge web experiences.",
                "icon": '<img svg-inline src="../../public/img/icons/lm-sample-icon.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 6,
                "title": "Planning & Strategy",
                "description": "We’re digitally inspired web development team and committed to creating cutting-edge web experiences.",
                "icon": '<img svg-inline src="../../public/img/icons/lm-sample-icon.svg" class="vue-logo" />',
                "linkOne": "link1",
                }
            ],

            HomeOurServices:[
              {
                "id": 1,
                "title": "Web Development",
                "description": "We’re digitally inspired web development team and committed to creating cutting-edge web experiences.",
                "icon": '<img svg-inline src="../../public/img/icons/lm-sample-icon.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 2,
                "title": "E-Commerce",
                "description": "We’re digitally inspired web development team and committed to creating cutting-edge web experiences.",
                "icon": '<img svg-inline src="../../public/img/icons/lm-sample-icon.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 3,
                "title": "Digital Marketing",
                "description": "We’re digitally inspired web development team and committed to creating cutting-edge web experiences.",
                "icon": '<img svg-inline src="../../public/img/icons/lm-sample-icon.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
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