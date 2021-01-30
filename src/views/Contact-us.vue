<template>
    <div class="inner">
    <Pagetitle/>
    <section class="lm-services bg section">
      <div class="container wd-container">
        <div class="sec-title text-center">
        <h2>About Brooklyn.</h2>
        <p>We’re a creative agency located in <strong>Brooklyn, New York.</strong><br> We’ve won a ton of awards and have been featured in all of the magazines.</p>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-12">
          <div class="srvs-single-box stl-one">
            <div class="icon-box">
              <img svg-inline svg-sprite alt="Vue logo" src="../../public/img/icons/lm-sample-icon.svg" class="vue-logo" />              
            </div>
            <div class="ctn-box">
              <h3>Planning & Strategy</h3>
              <p>Praesent faucibus nisl sit amet nulla sollicitudin pretium a sed purus. Nullam bibendum porta magna.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
          <div class="srvs-single-box stl-one">
            <div class="icon-box">
              <img svg-inline svg-sprite alt="Vue logo" src="../../public/img/icons/lm-sample-icon.svg" class="vue-logo" />
            </div>
            <div class="ctn-box">
              <h3>Branding & Design</h3>
              <p>Praesent faucibus nisl sit amet nulla sollicitudin pretium a sed purus. Nullam bibendum porta magna.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
          <div class="srvs-single-box stl-one">
            <div class="icon-box">
              <img svg-inline svg-sprite alt="Vue logo" src="../../public/img/icons/lm-sample-icon.svg" class="vue-logo" />
            </div>
            <div class="ctn-box">
              <h3>Web Design & Development</h3>
              <p>Praesent faucibus nisl sit amet nulla sollicitudin pretium a sed purus. Nullam bibendum porta magna.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
          <div class="srvs-single-box stl-one">
            <div class="icon-box">
              <img svg-inline svg-sprite alt="Vue logo" src="../../public/img/icons/lm-sample-icon.svg" class="vue-logo" />
            </div>
            <div class="ctn-box">
              <h3>APP Design & Development</h3>
              <p>Praesent faucibus nisl sit amet nulla sollicitudin pretium a sed purus. Nullam bibendum porta magna.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
          <div class="srvs-single-box stl-one">
            <div class="icon-box">
              <img svg-inline svg-sprite alt="Vue logo" src="../../public/img/icons/lm-sample-icon.svg" class="vue-logo"/>
            </div>
            <div class="ctn-box">
              <h3>Online Marketing</h3>
              <p>Praesent faucibus nisl sit amet nulla sollicitudin pretium a sed purus. Nullam bibendum porta magna.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
          <div class="srvs-single-box stl-one">
            <div class="icon-box">
              <img svg-inline svg-sprite alt="Vue logo" src="../../public/img/icons/lm-sample-icon.svg" class="vue-logo" />
            </div>
            <div class="ctn-box">
              <h3>Maintenance & Support</h3>
              <p>Praesent faucibus nisl sit amet nulla sollicitudin pretium a sed purus. Nullam bibendum porta magna.</p>
            </div>
          </div>
        </div>
        <div class="col-12 text-center">
          <a href="#" class="btn stl-one">Start a Project</a>
        </div>
      </div>
      </div>
    </section>
    </div>
</template>

<script>

import Pagetitle from '../components/Pagetitle';

export default {
  components:{
    Pagetitle,
  }
}
</script>