<template>
    <div class="inner">
    <Pagetitle/>
      <section class="section contact-us">
        <div class="container">
          <div class="contact-box-wrap">
            <div class="row no-gutters flex-md-row-reverse">
              <div class="col-md-4">
                <div class="left-wrap">
                  <div class="sub-title">
                    <h3>Contact Us</h3>
                  </div>
                  <ul class="contact-info">
                    <li class="d-flex">
                      <div class="icon-wrap">
                        <img svg-inline src="../../public/img/icons/map-navigation.svg">
                      </div>
                      <span>71 Pilgrim Avenue Chevy Chase md 20815</span>
                    </li>
                    <li class="d-flex">
                      <div class="icon-wrap">
                        <img svg-inline src="../../public/img/icons/map-navigation.svg">
                      </div>
                      <span>71 Pilgrim Avenue Chevy Chase md 20815</span>
                    </li>
                    <li class="d-flex">
                      <div class="icon-wrap">
                        <img svg-inline src="../../public/img/icons/map-navigation.svg">
                      </div>
                      <span>71 Pilgrim Avenue Chevy Chase md 20815</span>
                    </li>
                    <li class="d-flex">
                      <div class="icon-wrap">
                        <img svg-inline src="../../public/img/icons/map-navigation.svg">
                      </div>
                      <span>71 Pilgrim Avenue Chevy Chase md 20815</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-8 right-wrap">
                <div class="sub-title">
                  <h3>Send Messege</h3>
                </div>
                <form>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>First Name</label>
                        <input type="text" class="form-control" placeholder="First Name">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Last Name</label>
                        <input type="text" class="form-control" placeholder="Last Name">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Phone</label>
                        <input type="text" class="form-control" placeholder="phone">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
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
                      <div class="form-group">
                        <label>Messege</label>
                        <textarea class="form-control" placeholder="messege" rows="3"></textarea>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <button type="submit" class="btn stl-four">Send</button>
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

export default {
  components:{
    Pagetitle,
  }
}
</script>


<style lang="scss" scoped>
  
  .contact-us{
    .sub-title{
      padding-bottom: 15px;
      h3{ font-size: 24px; color:#646363; }
    }
    select,
    textarea,
    input{
      border-radius: 0px;
      border:none;
      border-bottom:1px solid #cac8c8;
      padding: 12px 12px;
      height: auto;
      min-height: auto;
      background: none;
      &:focus{
        outline: none;
        box-shadow:none;
      }

    }
    label{
      font-size: 14px;
      color:#979191;
    }
    .contact-box-wrap{
      max-width: 1000px;
      width: 100%;
      margin:0 auto;
      box-shadow:2px 8px 9px rgba(0, 0, 0, 0.15%);
      border-radius:4px;
    }
    .left-wrap{
      background: var(--bg-color);
      padding: 40px;
      border-radius: 0px 6px 6px 0px;
      height: 100%;
      .sub-title{
        h3{ color:#fff; }
      }
    }
    .right-wrap{
      padding: 40px;
    }
    ul.contact-info{
      .icon-wrap{ width: 20px; margin-right: 10px; svg{ height: 100%; height: auto; fill:#fff } }
      span{color: #fff;}
      li{ padding-bottom: 20px;}
    }
  }
</style>