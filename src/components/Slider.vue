<template>
  <div class="main-banner">
    <carousel :autoplay="true" :nav="false" :dots="false" :items="1" >
     <div class="item" v-for="slider of sliderList" :key="slider.id">
         <div class="slide d-flex justify-content-center align-items-center" :style="{'background-image': 'url('+ slider.bgImg + ')'}">
             <div class="bg-shade"></div>
             <div class="info text-center">
                 <h1>{{slider.title}}</h1>
                 <p class="mr-auto ml-auto">{{ slider.description }}</p>
                 <div class="cta-btn-wrap flex-box d-flex align-items-center justify-content-center">
                     <a :href="slider.linkOne" class="btn cta-black-outline"><span>Go to</span></a>
                     <a :href="slider.linkTwo" class="btn cta-black-outline"><span>Contact Us</span></a>
                 </div>
             </div>
         </div>
     </div>
     <template slot="prev">
        <span class="arrow prev d-flex align-items-center"><Icon name="left-arrow-icon" :width="45" :height="45" /></span>
     </template>
     <template slot="next">
        <span class="arrow next d-flex align-items-center"><Icon name="right-arrow-icon" :width="45" :height="45" /></span>
     </template>
    </carousel>
  </div>
 </template>
<script>
 
 import carousel from 'vue-owl-carousel';
 import Icon from '../inc/Icon.vue';
 
 export default {
     components: { 
         carousel,
         Icon
     },
     props:['main-slider-title'],
     data(){
         return{
             sliderList:[
                 {
                  "id": 1,
                  "title": "web development",
                  "description": "We're a digitally inspired web development team and committed to creating cutting-edge web experiences.",
                  "bgImg": "../../img/slider/banner-1.jpg",
                  "linkOne": "/web-development",
                  "linkTwo": "/contact-us",
                  },
                 {
                 "id": 2,
                 "title": "E Commerce Development ",
                 "description": "We create websites, identities & ecommerce stores to enhance your business online",
                 "bgImg": "../../img/slider/banner-2.jpg",
                 "linkOne": "/e-commerce",
                 "linkTwo": "/contact-us",
                 },
                 {
                 "id": 3,
                 "title": "Digital Marketing",
                 "description": "Transform and grow your product or service based business with digital marketing",
                 "bgImg": "../../img/slider/banner-3.jpg",
                 "linkOne": "/digital-marketing",
                 "linkTwo": "/contact-us",
                 },
             ]
         }
     }
 };
 
 </script>
 
 
 <style lang="scss" scoped>

.main-banner {
  .slide {
    height: 100vh;
    min-height: 480px;
    position: relative;
    background: no-repeat center top / cover;
    :is(h1, p, .cta-btn-wrap) {
      opacity: 0;
      visibility: hidden;
      transition: all 0.5s ease-in-out;
      transform: translateY(30px);
    }
    .bg-shade {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 0;
      background: var(--black-color);
      opacity: 0.4;
    }
    h1 {
      transition-delay: 0.3s;
    }
    p {
      transition-delay: 0.6s;
    }
    .cta-btn-wrap {
      transition-delay: 0.9s;
    }
    .info {
      position: relative;
      z-index: 1;
      h1 {
        color: var(--w-color);
        font-size: 4.5rem;
        margin-bottom: 2.5rem;
        font-weight: 800;
        position: relative;
        &:after {
          content: "";
          position: absolute;
          width: 28px;
          height: 4px;
          bottom: -15px;
          left: 50%;
          right: 50%;
          transform: translate(-50%, -50%);
          background: var(--w-color);
        }
      }
      p {
        color: var(--w-color);
        font-style: italic;
        max-width: 800px;
        width: 100%;
        font-weight: 500;
      }
      .btn {
        font-size: 1rem;
        margin: 10px 5px 0px;
        &:first-child {
          margin-left: 0px;
        }
        &:last-child {
          margin-right: 0px;
        }
      }
    }
  }
  .arrow {
    position: absolute;
    bottom: 30px;
    height: 40px;
    margin: auto 0;
    z-index: 9;
    color: var(--w-color);
    cursor: pointer;
    &:hover {
      .icon {
        opacity: 0.5;
      }
    }
    @media (min-width: 768px) {
      top: 0;
      bottom: 0;
      &.prev {
        left: 1.5%;
      }
      &.next {
        right: 1.5%;
      }
    }
    @media (max-width: 767px) {
      &.prev {
        left: calc(50% - 40px);
      }
      &.next {
        right: calc(50% - 40px);
      }
      .icon {
        width: 15px;
      }
    }
  }
  .active .slide {
    :is(h1, p, .cta-btn-wrap) {
      opacity: 1;
      visibility: visible;
      transform: translateY(0px);
    }
  }
  @media (max-width: 1199px) {
    .slide {
      .info {
        h1 {
          font-size: 4rem;
        }
      }
    }
  }
  @media (max-width: 991px) {
    .slide {
      padding: 0px 50px;
      .info {
        h1 {
          font-size: 3.5rem;
        }
      }
    }
  }
  @media (max-width: 767px) {
    .slide {
      padding: 0px 40px;
      .info {
        h1 {
          font-size: 2.5rem;
        }
      }
    }
  }
  @media (max-width: 480px) {
    .slide {
      .info {
        h1 {
          font-size: 1.75rem;
        }
      }
      .flex-box {
        flex-direction: column;
        a {
          margin: 0 0 5px;
        }
      }
    }
  }
}

 </style>