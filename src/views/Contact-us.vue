<template>
    <div class="inner">
    <Pagetitle/>
    
      <section class="section contact-us pt-100 pb-50">
        <div class="container">
          <div class="contact-box-wrap">
            <div class="row no-gutters flex-md-row-reverse">
              <div class="contact-details">
                
                <h1 class="text-shadow"><strong>Get in touch today</strong></h1>
                <p>Do you want to work with one of our developers or simply be accompanied?</p>
                <p class="contect-us-details">
                  <i class="icofont-email"></i> 
                  <a href="mailto:hello@luvimac.com"> <p class="m-0">hello@luvimac.com</p></a>
                </p>
                <p class="contect-us-details">
                  <i class="icofont-google-map"></i>
                  NH64, GJ IN
                </p>
              </div>
              <!-- <div class="col-md-12 right-wrap">
                <div class="sub-title">
                  <h3>Send Messege</h3>
                </div>
                <form>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="input-group">
                        <label>First Name</label>
                        <input type="text" class="form-control" placeholder="First Name" disabled>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-group">
                        <label>Last Name</label>
                        <input type="text" class="form-control" placeholder="Last Name" disabled>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-group">
                        <label>Phone</label>
                        <input type="text" class="form-control" placeholder="phone" disabled>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-group">
                        <label>Budget</label>
                        <select class="form-control" disabled>
                          <option>Select</option>
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
                        <textarea class="form-control" placeholder="messege" rows="3" disabled></textarea>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <button type="submit" class="btn cta-black" disabled>Send</button>
                    </div>
                  </div>
                </form>
              </div> -->
            </div>
          </div>
        </div>
      </section>
      <!-- Calendly inline widget begin -->
      <div class="book-meeting text-center">
        <h2 class="text-shadow"><strong>Book Meeting</strong></h2>
      </div>
    <div class="calendly-inline-widget" data-url="https://calendly.com/luvimac/30min" style="min-width:320px;height:700px;"></div>
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
.contact-details {
    display: flex;
    flex-direction: column;
    align-items: center;
  .contect-us-details {
    display: flex;
    align-items: center;
    width: 200px;
    i {
      font-size: 30px;
      margin-right: 5px;
    }
    a {
      color: #000;
    }
  }
}
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
      margin: 0 auto;
      box-shadow: 1px 1px 17px #e1e1e1, -1px -1px 17px #e1e1e1;
      border-radius: 15px;
      padding: 50px;
    }
  }
  .text-shadow {
      text-shadow: 1px 1px 2px;
    }
</style>