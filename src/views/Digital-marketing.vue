<template>
    <div class="inner">
    <Pagetitle/>
    <Texttitle :textTitleServices="texttitle"></Texttitle>
    <Doweworks :commonServices="services" :servicesSectionClass="'web'"></Doweworks>
    <Whychooseus :commonWhyChoose="whyChooseUsServices" :whyChooseClass="'web'"></Whychooseus>
    </div>
</template>
<script>
import Texttitle from '../components/TextTitle';
import Pagetitle from '../components/Pagetitle';
import Doweworks from '@/components/DoWeWorks';
import Services from '../components/Services';
import Whychooseus from '../components/Whychooseus';
export default {
  components:{
    Pagetitle,
    Texttitle,
    Doweworks,
    Services,
    Whychooseus
  },
  data(){
        return{
            texttitle:{
              sectionTitle:"What We Do.",
              sectionDescription:'We’re best placed to help build your online business: taking the time to learn about your company, industry and commercial challenges',
              subTitle:'Tools And Technologies',
              subDescription:'At Luvimac We provide our managed IT services to small and big size of businesses that have had software developed and to organizations that are looking for outsourcing expertise for the maintenance and development of their application. Whatever form of IT resource you are looking for, we can support you in this.',
              img:'../../img/digital-marketing/web-development.jpg',
            },
            services:{
              sectionTitle:"Digital Strategy & Content  Creation",
              sectionDec:"Perfection does not exist, but we do bring our solutions one step closer to perfection. At luvimac! We provide digital marketing service to grow your business that suits both start-ups and established companies. Our digital marketing strategies can increase the level of your brand online, bringing you and your customers together.",
              data:[
              {
                "id": 1,
                "title": "Seo",
                "description": "Improve the traffic results of your website in search engines. Our experienced SEO specialists are ready to help you from technology to good content.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-seo.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 2,
                "title": "Google Ads",
                "description": "Are you not getting enough return from your current Ads campaign? With Google Ads you get new visitors and more sales. It provides the fastest return.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-adwords.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 3,
                "title": "Social Media Advertising",
                "description": "Broad knowledge in the field of social media such as; Facebook, Instagram, Pinterest & Linkedin, we know how to reach your target group exactly on the right channel and phase in the customer journey.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-social.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 4,
                "title": "Display Marketing",
                "description": "Reach your target audience effectively. We set up a Display Advertising campaign for you via the Google and Bing network and help you Increase brand awareness and product awareness. ",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-display-marketing.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 5,
                "title": "Email Marketing",
                "description": "We help you with email marketing strategy, action plan and optimization process by our comprehensive industries data list. We have a lot of experience in different industries and know what we do!",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-email-marketing.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 6,
                "title": "Link building",
                "description": "Link building is an important part of getting higher in search engines. Internal and external links both are important to get ranks in google. We create content to grow sales and businesses.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-link-building.svg" class="vue-logo" />',
                "linkOne": "link1",
                }
            ]
            },
            whyChooseUsServices:{
              sectionTitle:"Why Choose Us",
              shortPara:"Your website is not just a showcase of content or images. It is an integral segment of your marketing and business strategy. We completely understand your business, vision and goals in your industry and competitors to put together a tailor-made strategy to achieve the results you require.",
              leftImg: '<img svg-inline src="../../img/why-choose-us.png" class="img-fluid" />',
              data:[
              {
                "id": 1,
                "title": "Quality Service",
                "description": "We have an expert dynamic team. Transparency and openness lead to more confidence. As an online marketing partner We ensure clients to provide fruitful results, more conversion, leads, customers and higher return.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-quality.svg" class="vue-logo" />',
                "linkOne": "link1",
                },
                {
                "id": 2,
                "title": "Feel free to contact",
                "description": "Anyone can reach us by 24x7. We are ready to help you. Send us direct email or do phone calls. We will respond immediately.",
                "icon": '<img svg-inline src="../../public/img/services-icon/lm-mail.svg" class="vue-logo" />',
                "linkOne": "link1",
                }
            ]
            },
            howItWork:{"bgImg":"../../img/digital-marketing/how-do-we-works.png"},           
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