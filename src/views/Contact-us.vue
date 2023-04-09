<template>
    <div class="inner">
    <Pagetitle/>
      <section class="section contact-us pt-100 pb-100">
        <div class="container">
          <div class="contact-box-wrap">
            <div class="row no-gutters flex-md-row-reverse">
              <!-- <div class="col-md-4">
                <div class="left-wrap">
                  <div class="sub-title">
                    <h3>Contact Us</h3>
                  </div>
                  <ul class="contact-info">
                    <li class="d-flex">
                      <div class="icon-wrap">
                      </div>
                      <span>71 Pilgrim Avenue Chevy Chase md 20815</span>
                    </li>
                    <li class="d-flex">
                      <div class="icon-wrap">
                      </div>
                      <span>71 Pilgrim Avenue Chevy Chase md 20815</span>
                    </li>
                    <li class="d-flex">
                      <div class="icon-wrap">
                      </div>
                      <span>71 Pilgrim Avenue Chevy Chase md 20815</span>
                    </li>
                    <li class="d-flex">
                      <div class="icon-wrap">
                      </div>
                      <span>71 Pilgrim Avenue Chevy Chase md 20815</span>
                    </li>
                  </ul>
                </div>
              </div> -->
              <div class="col-md-12 right-wrap">
                <div class="sub-title">
                  <h3>Send Messege</h3>
                </div>
                <form>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="input-group">
                        <label>First Name</label>
                        <input type="text" class="form-control" placeholder="First Name">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-group">
                        <label>Last Name</label>
                        <input type="text" class="form-control" placeholder="Last Name">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-group">
                        <label>Phone</label>
                        <input type="text" class="form-control" placeholder="phone">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-group">
                        <label>Budget</label>
                        <select class="form-control">
                          <option>Option</option>
                          <option>Option</option>
                          <option>Option</option>
                          <option>Option</option>
                          <option>Option</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="input-group">
                        <label>Messege</label>
                        <textarea class="form-control" placeholder="messege" rows="3"></textarea>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <button type="submit" class="btn cta-black">Send</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script>

import Pagetitle from '../components/Pagetitle';
import contactmeta from '../../metadata/contactus.json'

export default {
  components:{
    Pagetitle,
  },
  data(){
    return {
      metadata:contactmeta
    }
  },
  metaInfo() {
        return { 
            title: this.metadata.title,
            link:[{ rel:"canonical", href: window.location.href}],
            meta: [
            { name: 'description', content: this.metadata.description},
              { name: 'keyword', content: this.metadata.keyword},
              { name: 'twitter:title', content: this.metadata.twitter_title},
              { property: 'og:title', content: this.metadata.og_title},
              { property: 'og:description', content: this.metadata.og_description},
              {property: 'og:url', content: window.location.href}
            ]
        }
    }
}
</script>


<style lang="scss" scoped>
  
  .contact-us{
    .sub-title{
      padding-bottom: 15px;
      h3{ font-size: 24px; color:#646363; }
    }
    .input-group{
      padding: 0 0 20px;
      :is(select, textarea, input){
        border-radius: 0px;
        border:0;
        border-bottom:1px solid #cac8c8;
        padding: 10px 0px;
        height: auto;
        min-height: auto;
        background: none;
        width: 100%;
        &:focus{
          outline: none;
          box-shadow:none;
        }
      }
      label{
        font-size: 14px;
        color:#979191;
        display: block;
      }
    }
    .contact-box-wrap{
      max-width: 1000px;
      width: 100%;
      margin:0 auto;
      box-shadow:2px 8px 9px rgba(0, 0, 0, 0.15%);
      border-radius:4px;
      padding: 50px;
    }
  }
</style>