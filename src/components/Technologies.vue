<template>
    <div class="section techno pt-30 pb-100">
      <div class="container">
        <div class="sec-title text-center">
          <h2>Technologies we work with</h2>
        </div>
        <ul class="nav" role="tablist">
          <li v-for="(tab, index) in tabs" :key="index" class="nav-item" role="presentation">
            <button class="nav-link" :class="{ active: activeTab === index }" @click="activeTab = index">{{ tab.name }}</button>
          </li>
        </ul>
        <div class="tab-content">
          <div v-for="(tab, index) in tabs" :key="index" class="tab-pane" :class="{ active: activeTab === index }">
            <ul>
              <li v-for="(item, index) in tab.list" :key="index">
                <div class="box">
                  <div class="icon-box">
                    <TechIcon :name="item.logo" :width="40" :height="40" />
                  </div>
                  <span>{{ item.name }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import TechIcon from '../inc/TechIcon.vue';
  
  export default {
    name: 'Technologies',
    components: { TechIcon },
    data() {
      return {
        activeTab: 0,
        tabs: [
            { 
            name: 'Front End', 
            list:[
              {
                name:"angular",
                logo:"angular-icon"
              },
              {
                name:"react",
                logo:"react-icon"
              },
              {
                name:"vue",
                logo:"vue-icon"
              },
              {
                name:"typescript",
                logo:"typescript-icon"
              },
              {
                name:"html",
                logo:"html-icon"
              }
            ]
          },
          {
            name: 'Backend',
            list:[
              {
                name:"node",
                logo:"node-icon"
              },
              {
                name:"php",
                logo:"php-icon"
              },
              {
                name:"Python",
                logo:"python-icon"
              },
              {
                name:".net",
                logo:"dot-net"
              }
            ]
          },
          {
            name: 'CMS',
            list:[
              {
                name:"Wordpres",
                logo:"wordpres-icon"
              },
              {
                name:"Magento",
                logo:"magento-icon"
              },
              {
                name:"Shopify",
                logo:"shopify-icon"
              }
            ]
          },
          { 
            name: 'Mobile',
            list:[
              {
                name:"iOS",
                logo:"apple-icon"
              },
              {
                name:"Android",
                logo:"android-icon"
              },
              {
                name:"flutter",
                logo:"flutter-icon"
              },
              {
                name:"react Native",
                logo:"react-icon"
              }
            ]
          },
          { 
            name: 'Database',
            list:[
              {
                name:"firebase",
                logo:"firebase-icon"
              },
              {
                name:"MsSQL",
                logo:"mssql-icon"
              },
              {
                name:"MySQL",
                logo:"mysql-icon"
              }
            ]
          },
        ],
      };
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .techno{
    .nav{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding: 30px 0 0;
      border-bottom: 1px solid #eeeeee;
      li{
        button{
          font-size: 16px;
          line-height: 1;
          font-weight: 600;
          color: var(--font-stl-one);
          padding: 10px 20px 24px 20px;
          margin: 0 0 -1px;
          border-bottom: 1px solid transparent;
          &.active{
            color: var(--color-red);
            border-color: var(--color-red);
          }
        }
      }
    }
    .tab-content{
      ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0 -15px -30px;
        li{
          padding: 0 15px 30px;
          .box{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 34px 20px;
            color: var(--font-stl-one);
            span{
              display: inline-flex;
              margin: 16px 0 0;
              color: var(--font-stl-one);
            }
          }
        }
      }
    }
    @media(max-width:767px){
      .nav{
        padding: 0;
      }
      .tab-content{
        padding: 20px 0 0;
        ul{
          li{
            .box{
              padding: 20px;
            }
          }
        }
      }
    }
  }
  </style>
  