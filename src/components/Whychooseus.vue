<template>
  <section class="section why-choose-us pt-50 pb-100">
    <div class="container wd-container">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-12">
          <div class="img-box" v-html="commonWhyChoose.leftImg"></div>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
          <div class="ctn-box p18">
            <div class="sub-title">
              <h2>{{ commonWhyChoose.sectionTitle }}</h2>
              <div class="sub-text" v-html="commonWhyChoose.shortPara"></div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="srvs-single-box stl-two">
                  <div class="ctn-box">
                    <div class="accordion accordionWcu" id="accordionChooseUs">
                      <div class="card" v-for="(service, index) of commonWhyChoose.data" :key="index">
                        <div class="card-header" :id="`heading-${index}`">
                          <h3 data-bs-toggle="collapse" :data-bs-target="`#collapse-${index}`" class="collapsed">{{ service.title }} <span class="icon-plus"><span class="icon"></span></span></h3>
                        </div>
                        <div :id="`collapse-${index}`" class="accordion-collapse collapse" data-bs-parent="#accordionChooseUs">
                          <div class="card-body" v-html="service.description"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    props: ['commonWhyChoose', 'whyChooseClass'],
    data() {
      return {
        loadMore: ''
      }
    },
    methods: {
      readMore(value) {
        if (this.loadMore == value) {
          this.loadMore = ''
        } else {
          this.loadMore = value
        }
      }
    },
  }
</script>
<style lang="scss">
.accordionWcu {
  .card {
    border: 0;
    border-radius: 0;
    background-color: var(--bg-white-black-100);
    &:not(:last-child){
      margin: 0 0 5px;
    }
    .card-header {
      border-bottom: 0px solid rgba(0, 0, 0, .125);
      background-color: transparent;
      margin-bottom: 0px !important;
      padding: 12px 15px;
      h3 {
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        .icon-plus {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 26px;
          min-width: 26px;
          height: 26px;
          position: relative;
          color: var(--font-stl-one);
          .icon {
            display: inline-flex;
            width: 20px;
            height: 3px;
            background: currentColor;
            position: relative;
            &::after {
              content: "";
              position: absolute;
              left: 0;
              right: 0;
              width: 20px;
              height: 3px;
              background: currentColor;
              transition: all 0.3s ease-in-out;
            }
          }
        }
        &.collapsed {
          .icon-plus {
            .icon {
              &::after {
                transform: rotate(90deg);
              }
            }
          }
        }
      }
    }
    .card-body {
      p {
        display: block;
        -webkit-line-clamp: initial;
        -webkit-box-orient: initial;
        overflow: visible;
      }
    }
  }
}
</style>