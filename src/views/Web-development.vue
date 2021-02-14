<template>
    <div class="inner">
    <Pagetitle/>
    <Services :commonServices="services" :servicesSectionClass="'web'"></Services>
    <section class="how-it-work section" :style="{'background-image': `url('${howItWork.bgImg} ')`}">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-12">
            <div class="ctn-box p18">
              <div class="sub-title">
                <h4>HOW IT WORKS</h4>
                <h2>MAGENTO 2.0</h2>
              </div>
                <p><strong>We are capable of catering</strong> the diverse Drupal development services such as social networking, corporate, real estate, CMS, blogs and e-commerce websites and solutions.</p>
                <p><strong>We are capable of catering</strong> the diverse Drupal development services such as social networking, corporate, real estate, CMS, blogs and e-commerce websites and solutions.</p>
                <p><strong>We are capable of catering</strong> the diverse Drupal development services such as social networking, corporate, real estate, CMS, blogs and e-commerce websites and solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section why-choose-us">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-12">
            <img src="../../public/img/why-choose-us.png" class="img-fluid" alt="">
          </div>
          <div class="col-lg-6 col-md-6 col-12">
            <div class="ctn-box p18">
              <div class="sub-title">
                <h4>WHAT IS AEGIS</h4>
                <h2>Why Choose Us?</h2>
              </div>
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-12" v-for="whyChooseUs of whyChooseUsServices" :key="whyChooseUs.whyChooseUs">
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
    
    </div>
</template>
<script>
import Pagetitle from '../components/Pagetitle';
import Services from '../components/Services';
export default {
  components:{
    Pagetitle,
    Services,
  },
  data(){
        return{
            services:{
              sectionTitle:"We Are A Well-Known Magento Development Service",
              sectionDec:"We’re a creative agency located in <strong>Brooklyn, New York.</strong><br> We’ve won a ton of awards and have been featured in all of the magazines.",
              data:[
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
            ]
            },
            whyChooseUsServices:[
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
                }
            ],
            howItWork:{"bgImg":"../../img/m-how-it-work-bg.png"},            
        }
    }
}
</script>

<style lang="scss" scoped>
  .how-it-work{
    background-repeat: no-repeat;
    background-position: center right;
    background-size: contain;
    p{font-size: 18px;}
  }

  @media(min-width: 768px){
     .how-it-work{
       .ctn-box{
        padding-right: 25px;
        padding: 7vh 0px;
       }
     }
  }

  @media(max-width: 767px){
    .how-it-work{
      background-image: none !important; 
        p{font-size: 16px;}
      }
  }

</style>