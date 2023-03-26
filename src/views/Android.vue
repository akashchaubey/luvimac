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
              title:"Put Your Business on Android Apps",
              description:'<p>We analyze your requirements of the application and suggest a procedure together with a tailor-made offer. After discussion about how the structure of the project should look and which technologies we use, We advise you the phase UX / UI design and then marketing and distribution strategy for your app. </p> <p>Our android app developers create apps for all of Google Play’s major categories including:</p> <ul class="bullet"> <li>Business Apps</li> <li>Social Apps</li> <li>Gaming Apps</li> <li>On-Demand Apps</li> <li>Entertainment Apps</li> <li>Productivity & Personalisation Apps</li> <li>Education Apps</li> <li>Health Care Apps</li> <li>Finance Apps</li> </ul>',
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
              sectionTitle:"App with us",
              sectionDescription:'Developing apps for Android is a profession in itself. As an independent app design and development company we offer Native Android Apps development from the conception of the app to the launch in the Google Play Store.',
              subTitle:'Native app development',
              subDescription:'<p>Before the beginning of the project we get involved in a beautiful adventure of our customers where we help companies with their android apps development together. Based on technical challenges of the project, expectations and goals together we create a precise needs analysis for you that becomes very challenging and fun to solve.</p>',
              img:'../../img/app-development/app-development.jpg',
            },
            services:{
              title:`How do we<span class='works' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">Work</span>`,
              sectionTitle:"Native Android Apps development with Kotlin & Java",
              sectionSubText:"for Android Development",
              sectionDec:"Make dreams come True - We develop the Native Android App with outstanding features. Your institution or business can stand out on the web and mobile together with Luvimac, no matter who you're & where you're! Our steamed team of android app development comes up with a proven track record.",
              data:[
              {
                "id": 1,
                "title": "Sprint",
                "description": "To initiate the process, we first brainstorm and design a sprint based on your ideas. A prototype is then created and tested by users to verify the concept before proceeding with actual app development. It enables us to fine-tune the user experience design while keeping investment and time to a minimum.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-sprint.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 2,
                "title": "App Design",
                "description": "Creative Apps design plays an important role in the mobile apps world. An app design defines how a user thinks and feels about a particular service from a company. Through this approach, we deliver app design that performs optimally and that your customer falls in love with.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-app-development.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 3,
                "title": "App Development",
                "description": "In the App Development phase, our android app developers develop apps for android usually consist of the development of a backend , API , and management environment. We work on the Agile method and therefore do interim deliveries in which you can give feedback on the app.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-app-development.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 4,
                "title": "Maintenance & Support",
                "description": "After the successful app launch, we will work with you as a development partner. We regularly meet to make the version update. We always look to use new technology to make the app even faster. ",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-support.svg" class="vue-logo" />',
                "linkOne": "link1",
                }
            ]
            },
            whyChooseUsServices:{
              sectionTitle:"Why Choose Us",
              leftImg: '<img svg-inline src="../../img/app-development/why-choose-us.png" class="img-fluid" />',
              shortPara:"<p>We have all our app developers working at our in-house. We keep transparency in our communication and provide our clients with insight into the advantages and disadvantages of the chosen development platform. At Luvimac we do not indoor only project but for building long-term relationships and high-quality deliveries.</p>",
              data:[
              {
                "id": 1,
                "title": "Prototype & Design Sprint",
                "description": "<p>We provide our client prototype & design sprint to clear the vision of application. To ensure the best results, our in-house experts in the field of UX, design, development and project management are present.</p>",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-testing-quality-assurance.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 2,
                "title": "Quality & Support",
                "description": `<ul class="bullet"><li>Certified Quality Assurance</li> <li>User Acceptance Testing</li> <li>Exploratory Testing</li> <li>Multi Device Testing</li> <li>Automated Scripted Testing</li> <li>24/7 Support</li> </ul>`,
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