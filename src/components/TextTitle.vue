<template>
    <section class="lm-services bg section">
      <div class="container wd-container">
        <div class="sec-title text-center" data-aos="fade-down" data-aos-delay="50">
          <h2>{{ textTitleServices.sectionTitle }}</h2>
          <div class="sub-text mx-auto max-700">
            <p>{{ textTitleServices.sectionDescription }}</p>
          </div>
        </div>
        <div class="row flex-md-row-reverse">
            <div class="col-lg-6 col-md-6 col-12">
              <div class="img-box-wrap">
                <img :src="textTitleServices.img" data-aos="fade-left" data-aos-delay="300" class="img-fluid">
                <div class="mobile-layer-stl" v-if="this.$route.path == '/app-development'">
                <img src="img/app-development/app-mobile.png" :alt="`app ${index}`" v-for="(n, index) of 4" :key="index">
              </div>
            </div>
            </div>
            <div class="col-lg-6 col-md-6 col-12 d-flex align-items-center">
              <div class="ctn-box pr-5" data-aos="fade-right" data-aos-delay="80">
                <div class="sub-title line-left">
                  <h2>{{ textTitleServices.subTitle }}</h2>
                </div>
               <div class="sub-text">
                 <p>{{ textTitleServices.subDescription }}</p>
               </div>
              </div>
            </div>
          </div>
      </div>
    </section>
</template>
<script>
  export default {
    props: ['textTitleServices'],
    data() {
      return {
        appDevelompentImg : '../../img/app-development/app-mobile.png',
      }
    },
    mounted() {
      if(this.$route.path == '/app-development'){
              this.appDevelompentImg = ""
          }
      }
  }
</script>


<style lang="scss" scoped>
  .img-box-wrap{
    position: relative;
  }
  .mobile-layer-stl{
    // position: absolute;
    // bottom: 35px;
    // right: 0;
    // width: 320px;
		// height: 100%;
    // transform: rotate(0deg) skew(0) scale(1);
    // transition: 0.5s;
		// border-radius: 40px;
    img{
      position: absolute;
      max-width: 30%;
      transition: 0.5s;
      bottom: 0;
      right: 10%;
      // $var : 4;
      // $op: 1;
      // @for $i from 2 through 4 {
      //   &:nth-child(#{$i}) {
      //     transform: translate(#{$var}px, -#{$var}px);
      //     $var: $var + 30;
      //     opacity: #{$op};
      //     $op: $op - .2;
      //   }
      // }
    }
    &:hover{
        img{
          &:nth-child(1){
            transform: translate(0px, 0px);
            opacity: 0.4;
          }
          &:nth-child(2){
            transform: translate(25px, -25px);
            opacity: 0.6;
          }
          &:nth-child(3){
            transform: translate(50px, -50px);
            opacity: 0.8;
          }
          &:nth-child(4){
            transform: translate(75px, -75px);
            opacity: 1;
          }
        }
      }
  }


</style>