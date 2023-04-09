<template>
  <section class="section pt-50 pb-50">
		<div class="container wd-container">
			<div class="row align-items-start justify-content-between">
        <div class="col-lg-6 order-lg-2 align-self-center">
          <div class="thatswhy-content pr-5">
            <h2 data-aos="fade-up" data-aos-duration="1000">{{thatWhy.title}} </h2>
            <div class="sub-text" data-aos="fade-up" data-aos-duration="1000" v-html="thatWhy.description"></div>
          </div>		 
        </div>
        <div class="col-lg-6 mt-4 mt-lg-0 order-lg-3">
          <div class="thatswhyImg" data-aos="fade-up" data-aos-duration="1000">
            <img :src="thatWhy.img" style="width:100%;" :alt="thatWhy.alt" class="sb-media ">
          </div>
        </div>
			</div>
		</div>
	</section>
</template> 
<script>
    export default {
    props: ['thatWhy'],
  }
</script>
<style lang="scss">
.thatswhy-content {
  &:last-child {
    margin-bottom: 0;
  }
  h2 {
    font-weight: 600;
    font-size: calc(1.5rem + 1vw);
  }
  .sub-text{
    p{
      &:last-child{
        margin: 0;
      }
    }
  }
}
.thatswhyImg {
  img {
    width: 100%;
  }
}
</style>