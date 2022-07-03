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
                <img :src="textTitleServices.img" data-aos="fade-left" data-aos-delay="300" class="img-fluid">
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
  }
</script>
