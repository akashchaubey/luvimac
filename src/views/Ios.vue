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
import appData from '../../metadata/ios.json'
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
              title:"Everything about iOS Development",
              description:'<p>We employ strategists and skilled iOS Apple developers for apps development projects who fully master Swift and Objective-C. We design the user interface, set up a technology stack, develop a back end and front end.</p> <p>We make custom apps for each of our customers. We value professionalism and want to develop the best apps that meet every customer need. Are you looking for a successful iOS solution? Then hire an experienced company to develop your apps.</p><p>By providing product prototyping we intricate details of the project and the user flow. Based on this, we develop graphic designs.</p>',
              img:'../../img/app-development/everything-about-ios-development.png',
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
              
              sectionTitle:"Fulltime & Part time App Developer",
              sectionDescription:'We are tech versed in mobile apps development worldwide. Whether you’re a Startup or an Enterprise, Luvimac’s driven, smart and experienced team is ready to collaborate with you  to build a leading-edge mobile app solution for your next app project that will set you apart.',
              subTitle:'iOS App Innovation',
              subDescription:'<p>Most innovative businesses trust us to build their apps. We work collaboratively with you to develop a tailored application that meets your unique needs and requirements. We develop all our apps utilizing Swift, objective C with latest architecture and design practices. We ensure flawless execution to satisfy your needs. Our technical experts work with you to gather all requirements and define the scope of the mobile apps development project.</p>',
              img:'../../img/app-development/ios-app-innovation.png',
            },
            services:{
              title:`How do we<span class='works' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">Work</span>`,
              sectionTitle:"Your app in our hands, this is how it works",
              sectionSubText:"for iOS Development",
              sectionDec:"<We>We partner with forward thinking clients, to transform ideas in real products. We work hard to create the most beautiful iOS Apps. Our basic requirements are regular feedback discussions and open communication - internally and externally.</p>",
              data:[
              {
                "id": 1,
                "title": "App Design",
                "description": "iPhone users believe in user-friendliness. We believe that an app should trigger something from the user from the first touch. UI/UX Design is paramount to how the user engages with our mobile application and has a massive impact on success of the app",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-app-design.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 2,
                "title": "App Development",
                "description": "Building an iPhone app requires a different approach. We help you to develop a mobile strategy, concept, design and the realization of your iOS applications. We build your app or iOS Native in intensive Scrum development sprints.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-app-development.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 3,
                "title": "Maintenance & Support",
                "description": "The launch is just the beginning. After the launching apps we measure how the users experience the app or website. Take advantage of our iOS support and maintenance services and focus on your business as we maintain, manage and support your iOS applications.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-support.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 4,
                "title": "Agile approach",
                "description": "Our iOS app development process is agile, enabling us to deliver products to customers on time, guarantee better quality and mitigate risks.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-agile-approach.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 5,
                "title": "Testing",
                "description": "We can help you every step of the project development, from concept to finished product and beyond. We take care of  every aspect of your project:  analysis, project management, development, implementation, testing, etc. - all tailored to your needs.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-testing-quality-assurance.svg" class="vue-logo" />',
                "linkOne": "link1",
                }
            ]
            },
            whyChooseUsServices:{
              sectionTitle:"Why Choose Us",
              leftImg: '<img svg-inline src="../../img/app-development/ios-why-choose-us.png" class="img-fluid" />',
              shortPara:"<p>From strategies and concepts to development and deploy' we have all techniques in-house. We are passionate about mobile app development, guiding you from that initial spark to a high quality solution.</p>",
              data:[
              {
                "id": 1,
                "title": "Expert Developers",
                "description": "<p>Our experienced iOS developers specialize in Native iOS solutions for apps, the development of iOS apps and the debugging and optimization of code in these apps.</p>",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-testing-quality-assurance.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 2,
                "title": "Knowledge partner",
                "description": `<p>Direct communication  with the right person, while maintaining a single point of contact for all your questions.</p>`,
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
            link:[{ rel:"canonical", href: window.location.href}],
            meta: [
            { name: 'description', content: this.metadata.description},
              { name: 'keyword', content: this.metadata.keyword},
              { name: 'twitter:title', content: this.metadata.twitter_title},
              { property: 'og:title', content: this.metadata.og_title},
              { property: 'og:description', content: this.metadata.og_description},
              {property: 'og:url', content: window.location.href}
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