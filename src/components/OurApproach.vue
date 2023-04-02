<template>
  <section class="section ourapproach pt-50 pb-50">
    <div class="container wd-container">
      <div class="sec-title text-center">
        <h2 data-aos="fade-up" data-aos-duration="1000">Our Approach</h2>
      </div>
      <div class="ul-list">
        <ul class="row">
          <li class="col-12 col-md-6 col-lg-3">
            <div class="opproach">
              <div class="opproach-count" data-aos="fade-up" data-aos-duration="1000">01</div>
              <div class="approach-title" data-aos="fade-up" data-aos-duration="1000">Discovery</div>
              <div class="approach-des" data-aos="fade-up" data-aos-duration="1000">As a first step, we will meet with you to understand your exact needs, functionalities, and goals for the project. We will then customize a plan specifically tailored to your business case, ensuring that you receive the highest quality of service</div>
            </div>
          </li>
          <li class="col-12 col-md-6 col-lg-3">
            <div class="opproach">
              <div class="opproach-count" data-aos="fade-up" data-aos-duration="1000">02</div>
              <div class="approach-title" data-aos="fade-up" data-aos-duration="1000">Concept</div>
              <div class="approach-des" data-aos="fade-up" data-aos-duration="1000">We'll start by conceptualizing your website, considering your needs, goals, and desired outcome. Then, we'll design the layout, structure, and features to provide the best user experience possible, ensuring your website meets your expectations.</div>
            </div>
          </li>
          <li class="col-12 col-md-6 col-lg-3">
            <div class="opproach">
              <div class="opproach-count" data-aos="fade-up" data-aos-duration="1000">03</div>
              <div class="approach-title" data-aos="fade-up" data-aos-duration="1000">Design / Development</div>
              <div class="approach-des" data-aos="fade-up" data-aos-duration="1000">We'll design and prototype your project, including system design, wireframing, UI/UX design, architecture, and development. We ensure clear project scope and requirements, maintaining consistency to deliver on time and to the highest quality standards.</div>
            </div>
          </li>
          <li class="col-12 col-md-6 col-lg-3">
            <div class="opproach">
              <div class="opproach-count" data-aos="fade-up" data-aos-duration="1000">04</div>
              <div class="approach-title" data-aos="fade-up" data-aos-duration="1000">Launch and support</div>
              <div class="approach-des" data-aos="fade-up" data-aos-duration="1000">We prioritize meeting your expectations by being responsive and efficient in our communication and putting in extra effort to ensure successful project turnover, including deployment, migration, support, and review.</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.ourapproach {
  padding-bottom: 3.5rem;
  .ul-list{
    > ul{
      margin: 0 -20px -30px;
      > li{
        padding: 0 20px 30px;
      }
    }
  }
  .opproach {
    height: 100%;
    text-align: center;
    transition: all .3s ease-in-out;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0px 0px 2px;
    min-width: 150px;
    color: var(--font-stl-one);
    .opproach-count {
      font-size: 2.5rem;
      font-weight: 600;
      margin-top: 1.5rem;
      padding-bottom: 1.5rem;
      border-bottom: 2px solid;
      color: var(--font-stl-one);
    }
    .approach-title {
      font-size: 1.7rem;
      font-weight: 600;
      padding: 1.5rem 0 1rem;
      line-height: 1.1;
      color: var(--font-stl-one);
      position: relative;
      transition: all .3s ease;
      overflow: hidden;
    }
    .approach-des {
      margin-bottom: 1.5rem;
      color: var(--font-stl-one);
    }
  }
  @media screen and (max-width:767px) {
    .opproach {
      .opproach-count {
        font-size: 2.2rem;
      }
      .approach-title{
        font-size: 1.3rem;
      }
    }
  }
}
</style>