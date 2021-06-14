<template>
    <div class="inner">
    <Pagetitle/>
     <Texttitle />
    <Doweworks :commonServices="services" :servicesSectionClass="'web'"></Doweworks>
    <!-- <Services :commonServices="services" :servicesSectionClass="'web'"></Services> -->
    <section class="how-it-work section" :style="{'background-image': `url('${howItWork.bgImg} ')`}">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-12">
            <div class="ctn-box p18">
              <div class="sub-title">
                <!-- <h4>How do We Works</h4> -->
                <h2>How Do We Works</h2>
              </div>
                <p>We provide mockup to verify their website requirements, until our end user is satisfied. We make an appointment to discuss with our client why certain choices have been made and how / whether we can technically realize them.</p>
                <p>We believe in building a work culture of personal responsibility and trust, where people want to stay for a long time.</p>
                <p><strong>Advantages of engagement model</strong></p>
                <p>We always pay attention to the convenience for the customer to update the website himself later. Once the site is finished, we may support migration of the content and launch the website.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Whychooseus :commonWhyChoose="whyChooseUsServices" :whyChooseClass="'web'"></Whychooseus>
    </div>
</template>
<script>

import Pagetitle from '../components/Pagetitle';
// import Services from '../components/Services';
import Texttitle from '../components/TextTitle';
import Doweworks from '@/components/DoWeWorks';
import Whychooseus from '../components/Whychooseus';
export default {
  components:{
    Pagetitle,
    Texttitle,
    Doweworks,
    // Services,
    Whychooseus
  },
  data(){
        return{
            services:{
              sectionTitle:"WordPress Development, Support, Maintenance",
              sectionDec:"Web design & development, strong in customization, proven concepts that meet your needs.",
              data:[
              {
                "id": 1,
                "title": "WooCommerce",
                "description": "Are you looking for an affordable webshop? WooCommerce is the most popular e-commerce solution for WordPress. We deliver custom work based on WooCommerce with all desired functionalities and user-friendly packages.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-woocommerce.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 2,
                "title": "Custom WordPress Development",
                "description": "WordPress is one of our favorites. We build beautiful, highly functional, scalable and responsive websites with the power of WordPress as a platform. We believe your website should look great and generate business for you - simply and clearly which meets your unique specifications.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-wordpress.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 3,
                "title": "Custom applications",
                "description": "Our custom application is tailor made for your business and eliminates the need to change your business procedures to fit a pre-developed software. From our premises you can full access to the in-house development team so any issues that arise can be resolved quickly and efficiently.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-custom-applications.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 4,
                "title": "Wordpress Plug-in",
                "description": "Custom plugin development and WordPress API integrations ensure a 100% fit for any special challenges you and your clients meet.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-plugin.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 5,
                "title": "Support & Maintenance",
                "description": "We have skilled laravel developers in-house to take over existing Laravel projects. Our developers also actively participate in improving the Laravel framework and developing new libraries.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-maintenance-support.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 6,
                "title": "Design",
                "description": "With our friendly and talented development team. We offer WordPress maintenance contracts for regular support and maintenance to ensure that you don't have any problems with your website or if you need changes in the future.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-design.svg" class="vue-logo" />',
                "linkOne": "link1",
                }
            ]
            },
            whyChooseUsServices:{
              sectionTitle:"Why Choose Us",
              shortPara:"Have you built a site in WordPress yourself or wanto create from a sketch. If things go wrong we are always here to help you and give 100% unique solutions. You can be sure that everything in the website design & development can actually be technically realized in WordPress.",
              leftImg: '<img svg-inline src="../../img/why-choose-us.png" class="img-fluid" />',
              data:[
              {
                "id": 1,
                "title": "100% Customer Satisfaction",
                "description": "We are a customer-oriented company. We treat every development project with the care and attention it deserves to ensure the best possible results.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-satisfaction.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 2,
                "title": "Quality & Security",
                "description": "By hiring our developer, you are assured of a website built with enhanced security measures. Your customer data is safe from hackers and your website ranks higher in search engine results.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-quality.svg" class="vue-logo" />',
                "linkOne": "link1",
                }
            ]
            },
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