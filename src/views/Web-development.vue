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
import Whychooseus from '../components/Whychooseus';
import Doweworks from '@/components/DoWeWorks';
import webmetadata from '../../metadata/webDevelopment.json'
export default {
  components:{
    Pagetitle,
    Texttitle,
    OurApproach,
    ThatsWhy,
    Whychooseus,
    Doweworks
  },
  data(){
        return{
          metadata:webmetadata,
           texttitleContent:{
              title:"Our added value",
              description:'<p>We are capable of working with all programming languages like PHP, JavaScript, Python, ASP.NET etc. Our expert team have ability to create stunning web application. They are expert in utilize Angular.Js, Vue.Js, React.Js, Node.Js, ElectronJs and bootstrap framework.</p><p>There is solid backend development support behind every successful software & web application. So it is most important to discuss and know about programming languages which make your website application and ecommerce store run smoothly and lightly to upload data information fastly.</p><p>We always offer our customers a tailor-made solution to guarantee the best result.</p>',
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
              sectionTitle:"Web Development Company",
              sectionDescription:'With our dedicated team we do not develop only websites rather develop the tenor of every web application. Whether we develop an API for a mobile application or create a custom website, it is all about under web development.',
              subTitle:'We excel at Web Design & Development',
              subDescription:"<p>Our services help your business online!<br> It doesn't matter that who you are as a designer or developer at Luvimac; everyone works with the same goal in mind: to deliver a salient, eye-catching website that exceeds all expectations of our customers.</p>",
              img:'../../img/web-development/web-development.jpg',
            },
            services:{
              title:`How do we<span class='works' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">Work</span>`,
              sectionTitle:"Create A Professional Webshop",
              sectionSubText:"for Web Development",
              sectionDec:"We are an agile team suited to your needs. We like to work with people who manage themselves. Out of a pool of excellent backend and frontend developers we put together a team that caters exactly to your needs and budget.",
              data:[
                {
                "id": 1,
                "title": "Websites",
                "description": "Company benefits from a high-quality website. We apply the latest methods and techniques to make your website complete. We ensure that your website is optimally focused on speed, design, user-friendliness and mobile.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-website.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 2,
                "title": "Webshops",
                "description": "We build the user experience of your webshop to convert website visitors into customers as effectively as possible. We develop webshops that are aimed at creating new sales opportunities. By effectively offering your products or services online, we jointly build commercial success.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-webshop.svg" class="vue-logo" />',
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
                "title": "Framework Technologies",
                "description": "We authorize our clients with adaptive web applications built using PHP, Python, MongoDB, React, Node.js and latest technology to simplify complex business workflows. We use popular frameworks like Vue.Js, Angular.js, JQuery, Laravel etc.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-framework-technologies.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 5,
                "title": "Laravel",
                "description": "We have skilled laravel developers in-house to take over existing Laravel projects. Our developers also actively participate in improving the PHP Laravel Application Development.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-laravel.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 6,
                "title": "Design",
                "description": "Our designer makes a stunning UX/UI design which creates interest to stuck off website visitors. Together with you we create the desired image and online identity. We then implement this in all online services so that it becomes a powerful brand.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-design.svg" class="vue-logo" />',
                "linkOne": "link1",
                }
            ]
            },
            whyChooseUsServices:{
              sectionTitle:"Why Choose Us",
              leftImg: '<img svg-inline src="../../img/web-development/why-choose-us.png" class="img-fluid" />',
              data:[
              {
                "id": 1,
                "title": "Testing and Quality Assurance",
                "description": "<p>Our QA guys will prepare detailed test cases to cover all the functionality of the website application. We’ll complete and provide reporting on the functional test execution and any defects detected. Our team can provide automated testing which enhances the services quality and efficiency.</p>",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-testing-quality-assurance.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 2,
                "title": "Time And On Budget",
                "description": "<p>A clear working methods and personal contact. We will meet you and discuss your requirements. What do you need? What is the essence of your asignment? We make a concrete step by step plan and clear quotation. We determine the scope of the web development project, create a budget and timeline. Just to make sure, we do weekly status checks on progress and deadlines to keep everyone – you included – on track.</p>",
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