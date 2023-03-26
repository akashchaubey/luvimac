<template>
    <section class="section pt-50 pb-50">
		<div class="container wd-container">
			<div class="row align-items-start justify-content-between">
                <div class="col-lg-6 order-lg-2 align-self-center">
                    <div class="thatswhy-content pr-5">
                        <h2 data-aos="fade-up" data-aos-duration="1000">{{thatWhy.title}} </h2>
                        <div class="sub-text" data-aos="fade-up" data-aos-duration="1000" v-html="thatWhy.description">
                        </div>
                        <!-- <div class="check-list">
                            <ul>
                                <li data-aos="fade-up" data-aos-duration="1000">We work <strong>pragmatically</strong> and according to <strong>plan</strong></li>
                                <li data-aos="fade-up" data-aos-duration="1000">We work <strong>with</strong> you, but <strong>for</strong> your visitors</li>
                                <li data-aos="fade-up" data-aos-duration="1000">We work <strong>openly</strong> and with <strong>open source</strong></li>
                                <li data-aos="fade-up" data-aos-duration="1000">We work content <strong>first</strong> and mobile <strong>first</strong></li>
                                <li data-aos="fade-up" data-aos-duration="1000">We work with <strong>experiences</strong> to increase <strong>spending</strong></li>
                            </ul>
                        </div> -->
                    </div>		 
                </div>
                <div class="col-lg-6 mt-5 mt-lg-0 order-lg-3">
                    <div class="thatswhyImg" data-aos="fade-up" data-aos-duration="1000">
                        <img :src="thatWhy.img" style="width:100%;" alt="" class="sb-media ">
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
    
}
.thatswhyImg {
    img {
    width: 100%;
    }
}
</style>