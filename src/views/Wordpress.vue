<template>
    <div class="inner">
    <Pagetitle/>
    <Texttitle :textTitleServices="texttitle"></Texttitle>
    <Doweworks :commonServices="services" :servicesSectionClass="'web'"></Doweworks>
    <ThatsWhy :thatWhy="texttitleContent"></ThatsWhy>
     <OurApproach />
    <Whychooseus :commonWhyChoose="whyChooseUsServices" :whyChooseClass="'web'"></Whychooseus>
    </div>
</template>
<script>
import Pagetitle from '../components/Pagetitle';
import Texttitle from '../components/TextTitle';
import Doweworks from '@/components/DoWeWorks';
import ThatsWhy from '../components/ThatsWhy';
import OurApproach from '../components/OurApproach';
import Whychooseus from '../components/Whychooseus';
export default {
  components:{
    Pagetitle,
    Texttitle,
    Doweworks,
    ThatsWhy,
    OurApproach,
    Whychooseus
  },
  data(){
        return{
            texttitleContent:{
              title:"Workflow & Process",
              description:'<p>We provide mockup to verify their website requirements, until our end user is satisfied. We make an appointment to discuss with our client why certain choices have been made and how / whether we can technically realize them.</p><p>We believe in building a work culture of personal responsibility and trust, where people want to stay for a long time.</p><p>Advantages of engagement model</p><p>We always pay attention to the convenience for the customer to update the website himself later. Once the site is finished, we may support migration of the content and launch the website.</p>',
              img:'../../img/wordpress/wordpress-development-1.jpg',
              data:[
                {
                  'id':1,
                  'li': 'We work pragmatically and according to plan',
                },
                {
                  'id':2,
                  'li': 'We work with you, but for your visitors',
                },
                {
                  'id':2,
                  'li': 'We work with you, but for your visitors',
                }
              ]
            },
            texttitle:{
              sectionTitle:"WordPress Development Company",
              sectionDescription:'We can help you to create your WordPress Website. Find the solution about WordPress here. Fast, Secure and Scalable WooCommerce Shops at Luvimac. WordPress is intuitive and easy to manage platform with all the features to manage the websites content.',
              subTitle:'Our WordPress Services',
              subDescription:'<p>Looking for a developer for your WordPress website or WooCommerce webshop? We design and build professional WordPress websites for our end user that are well-liked by Google and perform well in search engine ranking. We do agreements with our client and usually work on the basis of an agreed price.</p>',
               img:'../../img/wordpress/wordpress-development.jpg',
            },
            services:{
               title:`How do we<span class='works' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">Work</span>`,
              sectionTitle:"WordPress Development, Support, Maintenance",
              sectionSubText:"for Wordpress webshop",
              sectionDec:"By utilizing a headless frontend, WordPress can be further enhanced to support application-based websites, unlocking even greater potential.",
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
                "title": "Wordpress Plug-in",
                "description": "Custom plugin development and WordPress API integrations ensure a 100% fit for any special challenges you and your clients meet.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-plug-in.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 4,
                "title": "Support & Maintenance",
                "description": "With our friendly and talented development team. We offer WordPress maintenance contracts for regular support and maintenance to ensure that you don't have any problems with your website or if you need changes in the future.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-support.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 5,
                "title": "PSD to WordPress Design",
                "description": "If you have a PSD that you want to convert into WordPress, So our team of WordPress development is ready for you. Our WordPress web designers, developers, and conversion specialists put their skill to create a good wireframe and structure for your wordpress websites",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-psd-wordpress.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 6,
                "title": "SEO Friendly",
                "description": "We can increase your conversion and ensure a higher position in search engines like Google. In WordPress we can technically optimize the website like functional and visual design, we use a number of tricks to also present the content for search engines such as Google",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-seo-friendly.svg" class="vue-logo" />',
                "linkOne": "link1",
                }
            ]
            },
            whyChooseUsServices:{
              sectionTitle:"Why Choose Us",
              shortPara:"Have you built a site in WordPress yourself or wanto create from a sketch. If things go wrong we are always here to help you and give 100% unique solutions. You can be sure that everything in the website design & development can actually be technically realized in WordPress.",
              leftImg: '<img svg-inline src="../../img/wordpress/why-choose-us.png" class="img-fluid" />',
              data:[
              {
                "id": 1,
                "title": "100% Customer Satisfaction",
                "description": "<p>We are a customer-oriented company. We treat every development project with the care and attention it deserves to ensure the best possible results.</p>",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-satisfaction.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 2,
                "title": "Quality & Security",
                "description": "<p>By hiring our developer, you are assured of a website built with enhanced security measures. Your customer data is safe from hackers and your website ranks higher in search engine results.</p>",
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