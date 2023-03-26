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
import OurApproach from '../components/OurApproach';
import ThatsWhy from '../components/ThatsWhy';
// import Services from '../components/Services';
import Whychooseus from '../components/Whychooseus';
import Doweworks from '@/components/DoWeWorks';
import appData from '../../metadata/appDevelopment'
export default {
  components:{
    Pagetitle,
    Texttitle,
    OurApproach,
    ThatsWhy,
    // Services,
    Whychooseus,
    Doweworks
  },
  data(){
        return{
          metadata:appData,
          texttitleContent:{
              title:"Innovate and grow",
              description:'<p>Partner with us to bring your app idea to life. Our team of experts specializes in custom Flutter App development, offering top-quality design, development, and maintenance services for all platforms. </p> <p>We create exactly the app that works for your organization and users. Whether you are a small start-up or a large-scale enterprise: we look at which technology suits you best, in order to launch a successful digital product.</p><p>Flutter eliminates the need to develop separate apps for different platforms. By using a single codebase, a Flutter app can be compiled into both iOS and Android apps, streamlining the development process and saving time and resources.</p>',
              img:'../../img/web-development/web-development-1.jpg',
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
              sectionTitle:"Flutter App Development Agency",
              sectionDescription:`We're growing a agency and help agencies to complete their project, help SMBs, startups to build their apps from scratch. Most of IT agencies outsource the project to Luvimac and we provide them end to end services to fullfil their apps development in Flutter.`,
              subTitle:'Build Flutter Apps',
              subDescription:'<p>Flutter is rapidly becoming the go-to choice for businesses worldwide who want to build high-quality apps on cross platforms. With its lightweight and efficient design, Flutter seamlessly runs on both Android and iOS, providing a smooth user experience across all devices. Developed by Google, this open-source mobile application development framework offers unparalleled flexibility and customization options, making it an ideal choice for businesses of all sizes. Whether you are building a simple app or a complex enterprise-level solution, Flutter can help you achieve your goals quickly and efficiently. Experience the power of Flutter and take your app development to the next level.</p>',
              img:'../../img/app-development/app-development.jpg',
            },
            services:{
              title:`How we can<span class='works' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">Assist</span>`,
              sectionTitle:"Building high-performing mobile apps for B2C & B2B.",
              sectionSubText:"in Flutter App Development",
              sectionDec:"<p>Well versed in flutter apps development who can form to your ideas and imaginations. They can sketch your imagination into native mobile apps and cross-platform solutions. We deliver flutter development services specially in Europe,  middle east & USA.</p>",
              data:[
              {
                "id": 1,
                "title": "Flutter App",
                "description": "Building apps in Flutter, It make fast and productive programming and working whole on both Android and iOS devices. Our Flutter mobile apps feature an elegant interface combined with an aesthetic appearance to delight its users.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-flutter.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 2,
                "title": "UI/UX Design",
                "description": "Starting with a focus on UX design during the initial phase. By prioritizing the UX/UI design, we ensure that your concept comes to life in a visually appealing and intuitive way. Flutter gives you the ability to directly support multiple platforms., which makes the development process much more efficient and cost-effective",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-web-design-development.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 3,
                "title": "Flutter App Migration",
                "description": "By migrating your app to Flutter, you'll enjoy faster development times, improved performance, and a more efficient development process overall. With our Flutter app migration services, we can help you seamlessly transition your existing Android and iOS apps to the Flutter framework",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-app-migration.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 4,
                "title": "Third-Party APIs Integration",
                "description": "We customize server-side APIs for cross-platform mobile apps according to specific business needs and integrate them seamlessly into the app development process. Our flutter developer can help you launch full-fledged Flutter apps.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-api-integration.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 4,
                "title": "App Maintenance & Support",
                "description": "We incorporate the latest technologies and frameworks to deliver Flutter apps that are secure, scalable, and user-friendly. Despite it dev team has skilled in fullstack development, have experience with HTML, CSS and React.Js, Vue.Js, Angular.Js, Node.Js and Laravel. These skill enable us to mainten & support your existing app as well.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-support.svg" class="vue-logo" />',
                "linkOne": "link1",
                }
            ]
            },
            whyChooseUsServices:{
              sectionTitle:"Why Choose Us",
              leftImg: '<img svg-inline src="../../img/app-development/why-choose-us.png" class="img-fluid" />',
              shortPara:"<p>At every step of the journey, our team of experienced professionals is dedicated to ensuring the success of your project. From inception to completion, we help sketch you the smartest yet quickest solution for your cross-platform development project and bring to life the expectations you aspire for them. Partner with us for unparalleled service and rest easy knowing that your project is in good hands.</p>",
              data:[
              {
                "id": 1,
                "title": "Dedicated Remote Teams",
                "description": "<p>At our company, we prioritize transforming your ideas into digital applications with the help of our dedicated team. We recognize the significance of your project, and therefore, focus on delivering quality results over cost. We value our customers' ideas and ensure to work within their budget to meet their requirements. Our top priority is to fulfill our customers' needs to the best of our ability. Hire dedicated flutter app developer at very low cost on monthly basis.</p>",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-testing-quality-assurance.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 2,
                "title": "Flexible Work Model",
                "description": `<p>We can initiate working together, for that we have 3 business models: Hourly rates, Fixed cost and Dedicated model. It helps our clients pretty much to ensure their project is in safe hands. Despite it, if he/she has any doubt in mind before hand-over the project to us, he/she can take a free trial with us. We can start with small tasks . It helps our customer to get confident with us to check our code quality and capability to handle the project.</p>`,
                "icon": '<img svg-inline src="../../public/img/services-icon/time-and-on-budget.svg" class="vue-logo" />',
                "linkOne": "link1",
                }
            ]
            },
            howItWork:{"bgImg":"../../img/web-development/how-do-we-works.png"},            
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
  .how-it-work{
    background-repeat: no-repeat;
    background-position: center right;
    background-size: contain;
     >.container-fluid{ max-width: 1590px;}
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