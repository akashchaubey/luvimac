<template>
    <div class="inner">
    <Pagetitle/>
    <Texttitle :textTitleServices="texttitle"></Texttitle>
    <Doweworks :commonServices="services" :servicesSectionClass="'web'"></Doweworks>
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
            texttitle:{
              sectionTitle:"What We Do.",
              sectionDescription:'We’re best placed to help build your online business: taking the time to learn about your company, industry and commercial challenges',
              subTitle:'Tools And Technologies',
              subDescription:'At Luvimac We provide our managed IT services to small and big size of businesses that have had software developed and to organizations that are looking for outsourcing expertise for the maintenance and development of their application. Whatever form of IT resource you are looking for, we can support you in this.',
              img:'../../img/magento/web-development.jpg',
            },
            services:{
              sectionTitle:"Magento eCommerce development company",
              sectionDec:"To design and build a Magento website and fulfill your custom magento eCommerce shop requirements you need a team of Magento developers. Our in-house team of specialist Magento developers works to build, support and improve Magento websites or Magento webshop.",
              data:[
              {
                "id": 1,
                "title": "Magento Development",
                "description": "Do you have an existing webshop OR do you want to switch to Magento 2? We are here to assist you to take your business next level!  We offer the possibility to easily deploy new functionalities in your existing magento based webshop. We build the most efficient and optimized responsive website for your business at pocket-friendly pricing.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-magento.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 2,
                "title": "Magento Version Upgrade",
                "description": "Are you running into the limitations of your current e-commerce platform and do you want to upgrade the webshop functionalities that Magento 2 offers, or do you want to migrate your current Magento store version to the latest version? Luvimac helps you further.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-version.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 3,
                "title": "Magento Performance Optimization",
                "description": "Performance ​​ remains the most important for webshop, there are a lot of things which would comprehensively enhance your website speed. With our performance optimization services, you simply don’t need to worry about this at all as it will boost your store to load faster for users and that will assure more sales conversation.",
                "icon": '<img svg-inline src="../../public/img/services-icon/performance-optimization.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 4,
                "title": "Magento Extension",
                "description": "We fully integrate the extension into your Magento platform so that the plugin works smoothly. Our flawless extension customization services make your Magento based website the user-friendly portal that you want it to be. Your ideas and our designs would together make a fluent and robust combination for the extensions for your eCommerce store.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-extension.svg" class="vue-logo" />',
                "linkOne": "link1",
                }            ]
            },
            whyChooseUsServices:{
              sectionTitle:"Why choose us",
              shortPara:"We have IT solutions for both local companies and internationally operating organizations that enable faster and smarter collaboration.",
              leftImg: '<img svg-inline src="../../img/why-choose-us.png" class="img-fluid" />',
              data:[
              {
                "id": 1,
                "title": "On Time Delivery",
                "description": "We develop and implement smart and high-quality e-commerce solutions that add value for our customers, and for their customers. Together we believe in on time delivery of projects.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-on-time-delivery.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 2,
                "title": "Quality Service",
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