<template>
    <div class="inner">
    <Pagetitle/>
    <Texttitle :textTitleServices="texttitle"></Texttitle>
    <Doweworks :commonServices="services" :servicesSectionClass="'web'"></Doweworks>
    <ThatsWhy :thatWhy="texttitleContent"></ThatsWhy>
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
              title:"Why actually Magento?",
              description:'<p>Increase your online income</p><p>Magento is the marketplace leader in the field of webshop ecommerce platform. Magento e-commerce is an open-source multishop platform.</p><p>Magento helps you grow your online income. It offers tools to attract more traffic, increase conversion, create and maintain customer loyalty. It is a scalable platform that can grow step by step.</p>',
              img:'../../img/wordpress/wordpress-development-1.jpg',
              addClass:'magento-stl',
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
              sectionTitle:"Create a professional webshop",
              sectionDescription:'We are happy to help you develop and optimize your Magento webshop.',
              subTitle:'Tools And Technologies',
              subDescription:'<p>To design and build a Magento website and fulfill your custom magento eCommerce shop requirements you need a team of Magento developers. Our in-house team of specialist Magento developers works to build, support and improve Magento websites or Magento webshop.</p>',
              img:'../../img/magento/web-development.jpg',
            },
            services:{
              title:`How do we<span class='works' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">Work</span>`,
              sectionTitle:"We develop sophisticated e-commerce solutions",
              sectionSubText:"for Magento commerce",
              sectionDec:"We lead demanding e-commerce projects to success. With our interdisciplinary teams of UX specialists with a high level of industry expertise, certified Magento developers, a well thought-out development process and many years of experience, we ensure the success of your project.",
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
              sectionTitle:"The benefits of choosing us",
              shortPara:"<p>We have IT solutions for both local companies and internationally operating organizations that enable faster and smarter collaboration.</p><p>Luvimac offers a customer-friendly platform, where content and user experience would be more focused on the end user.</p>",
              leftImg: '<img svg-inline src="../../img/magento/why-choose-us.png" class="img-fluid" />',
              data:[
              {
                "id": 1,
                "title": "On Time Delivery",
                "description": "<p>We develop and implement smart and high-quality e-commerce solutions that add value for our customers, and for their customers. Together we believe in on time delivery of projects.</p>",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-on-time-delivery.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 2,
                "title": "Quality Service",
                "description": "<p>Our skilled and expert team always ensures that all the needs of your ecommerce website and stores are fulfilled flawlessly. You can engage one or more expert developers directly.</p>",
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