<template>
    <div class="inner">
      <Pagetitle/>
    <section class="our-mission section">
      <div class="container-fluid wd-container">
        <div class="row flex-md-row-reverse">
          <div class="col-lg-6 col-md-6 col-12">
              <img src="../../public/img/about/our-mision-1.jpg" class="img-fluid">
          </div>
          <div class="col-lg-6 col-md-6 col-12 d-flex align-items-center">
            <div class="ctn-box">
              <div class="sec-title">
                <h2>Our Mission.</h2>
              </div>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
              <a href="#" class="btn stl-one">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="lm-services bg section">
      <div class="container wd-container">
        <div class="sec-title text-center">
          <h2>About Brooklyn.</h2>
          <p>We’re a creative agency located in <strong>Brooklyn, New York.</strong><br> We’ve won a ton of awards and have been featured in all of the magazines.</p>
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
          <a href="/contact-us" class="btn stl-one">Start a Project</a>
        </div>
      </div>
      </div>
    </section>
    <section class="get-started section">
      <div class="container d-flex align-items-center justify-content-center">
        <div class="box-container">
             <div class="sec-title wt text-center">
              <h2>Get Started</h2>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
              <a href="#" class="btn stl-one">Let’s Get Started</a>
            </div>
        </div>
      </div>
    </section>
    </div>
</template>
<script>
import Pagetitle from '../components/Pagetitle';
export default { 
  components:{
    Pagetitle,
  },
  data(){
        return{
            services:[
              {
                "id": 1,
                "title": "Planning & Strategy",
                "description": "We’re digitally inspired web development team and committed to creating cutting-edge web experiences.",
                "icon": '<img svg-inline src="../../public/img/icons/lm-sample-icon.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 1,
                "title": "Planning & Strategy",
                "description": "We’re digitally inspired web development team and committed to creating cutting-edge web experiences.",
                "icon": '<img svg-inline src="../../public/img/icons/lm-sample-icon.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 1,
                "title": "Planning & Strategy",
                "description": "We’re digitally inspired web development team and committed to creating cutting-edge web experiences.",
                "icon": '<img svg-inline src="../../public/img/icons/lm-sample-icon.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 1,
                "title": "Planning & Strategy",
                "description": "We’re digitally inspired web development team and committed to creating cutting-edge web experiences.",
                "icon": '<img svg-inline src="../../public/img/icons/lm-sample-icon.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 1,
                "title": "Planning & Strategy",
                "description": "We’re digitally inspired web development team and committed to creating cutting-edge web experiences.",
                "icon": '<img svg-inline src="../../public/img/icons/lm-sample-icon.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 1,
                "title": "Planning & Strategy",
                "description": "We’re digitally inspired web development team and committed to creating cutting-edge web experiences.",
                "icon": '<img svg-inline src="../../public/img/icons/lm-sample-icon.svg" class="vue-logo" />',
                "linkOne": "link1",
                }
            ]
        }
    }
  
};
</script>

<style lang="scss" scoped>
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