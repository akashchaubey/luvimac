<template>
    <div id="pagetitle" class="page-info">
        <div class="page-bg">
            <div class="bg" :style="{'background-image': 'url('+ bgImg + ')'}"></div>
        </div>
        <div class="info d-flex flex-column align-items-center justify-content-center">
            <h1>{{ mainTtitle }}</h1>
            <p> {{ subTitle }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Pagetitle',
    data (){
        return {
            mainTtitle : '',
            subTitle : '',
            bgImg : '',
        }
    },

    mounted () {
        if(this.$route.path === ''){
            this.mainTtitle = 'Home';
            this.subTitle = 'We’re a creative agency located in Brooklyn, New York.';
        } else if(this.$route.path == '/about'){
            this.mainTtitle = 'About Us';
            this.subTitle = 'We’re a creative agency located in Brooklyn, New York.';
            this.bgImg = "../../img/page-bg/about-bg.jpg" 

        } else if(this.$route.path == '/blog'){
            this.mainTtitle = 'Blog';
            this.subTitle = 'We’re a creative agency located in Brooklyn, New York.';
            this.bgImg = "../../img/page-bg/blog-bg.jpg" 

        } else if(this.$route.path == '/services'){
            this.mainTtitle = 'Services';
            this.subTitle = 'We’re a creative agency located in Brooklyn, New York.';
            this.bgImg = "../../img/page-bg/services-bg.jpg" 

        }
        else if(this.$route.path == '/web-development'){
            this.mainTtitle = 'Web Development';
            this.subTitle = 'We’re a creative agency located in Brooklyn, New York.';
            this.bgImg = "../../img/page-bg/services-bg.jpg" 

        }
        else if(this.$route.path == '/digital-marketing'){
            this.mainTtitle = 'Digital Marketing';
            this.subTitle = 'We’re a creative agency located in Brooklyn, New York.';
            this.bgImg = "../../img/page-bg/contact-bg.jpg" 

        } 
        else if(this.$route.path == '/magento'){
            this.mainTtitle = 'Magento';
            this.subTitle = 'We’re a creative agency located in Brooklyn, New York.';
            this.bgImg = "../../img/page-bg/contact-bg.jpg" 

        }
        else if(this.$route.path == '/wordpress'){
            this.mainTtitle = 'Wordpress';
            this.subTitle = 'We’re a creative agency located in Brooklyn, New York.';
            this.bgImg = "../../img/page-bg/contact-bg.jpg" 

        }
        else if(this.$route.path == '/custom-php'){
            this.mainTtitle = 'Custom php';
            this.subTitle = 'We’re a creative agency located in Brooklyn, New York.';
            this.bgImg = "../../img/page-bg/contact-bg.jpg" 

        }
        
         else if(this.$route.path == '/our-work'){
            this.mainTtitle = 'Our Work';
            this.subTitle = 'We’re a creative agency located in Brooklyn, New York.';
            this.bgImg = "../../img/page-bg/our-work-bg.jpg" 

        }
         else if(this.$route.path == '/contact-us'){
            this.mainTtitle = 'contact us';
            this.subTitle = 'We’re a creative agency located in Brooklyn, New York.';
            this.bgImg = "../../img/page-bg/contact-bg.jpg" 

        }
        
    }
}
</script>

<style lang="scss" scoped>
    .page-info{
        position: relative;
        height: 75vh;
        min-height: 350px;
        .page-bg{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: -1;
            .bg{
                height: 100%;
                background-repeat: no-repeat;
                background-size: 100%;
                background-position: center center;
            }
            &:before{
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.8) 100%);
            }
        }
        .info{
            height: 100%;
            padding: 0px 15px;
            h1{
                position: relative;
                font-size:7.8rem;
                font-weight: 800;
                letter-spacing: -0.5rem;
                color:var(--w-color);
                text-transform: uppercase;
                margin-bottom: 15px;
                &:after{
                    content: "";
                    position: absolute;
                    width: 160px;
                    left: 0;
                    right: 0;
                    bottom: -10px;
                    height: 2px;
                    background: var(--s-color);
                    margin: 0 auto;
                }
                }
                p{
                    font-size: 1.12rem;
                    font-weight: 500;
                    color: var(--w-color);
                    text-align: center;
                }
        }
    }

    @media(max-width: 1199px){
        .page-info{
            .info{
                h1{font-size: 5rem;}
            }
        }
    }
     @media(max-width: 991px){
        .page-info{
            .info{
                h1{font-size: 3rem; letter-spacing: 0px;}
            }
        }
    }
    @media(max-width: 767px){
        .page-info {
            .page-bg{
                .bg{
                    background-size: cover;
                }
        }
        }
    }
    @media(max-width: 575px){
        .page-info{
            .info{
                h1{font-size: 2.5rem; letter-spacing: 0px;}
                p{font-size: 1rem;}
            }
        }
    }

</style>