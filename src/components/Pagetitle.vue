<template>
    <div id="pagetitle" class="page-info">
        <div class="page-bg">
            <div class="bg" :style="{'background-image': 'url('+ bgImg + ')'}"></div>
        </div>
        <div class="info d-flex flex-column align-items-center justify-content-center text-center">
            <h1 data-aos="fade-up" data-aos-delay="50" v-html="mainTtitle"></h1>
            <div class="sub-text max-800" data-aos="fade-up" data-aos-delay="300">
                <p> {{ subTitle }}</p>
            </div>
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

        // console.log('this.$route.path',this.$route.path)


        if(this.$route.path == '/about'){
            this.mainTtitle = 'About Us';
            this.subTitle = 'Before committing to a business deal, it is crucial to thoroughly know the history and background of your potential partners.';
            this.bgImg = "../../img/page-bg/about-bg.jpg" 

        } else if(this.$route.path == '/blog'){
            this.mainTtitle = 'Blog';
            this.subTitle = 'We’re a creative agency located in Brooklyn, New York.';
            this.bgImg = "../../img/page-bg/blog-bg.jpg" 

        } else if(this.$route.path == '/technology'){
            this.mainTtitle = 'Technology';
            this.subTitle = 'The secret to getting ahead is getting started.';
            this.bgImg = "../../img/page-bg/technology-bg.jpg" 

        } else if(this.$route.path == '/angular'){
            this.mainTtitle = 'Angular js';
            this.subTitle = 'We’re a creative agency located in Brooklyn, New York.';
            this.bgImg = "../../img/page-bg/blog-bg.jpg" 

        } else if(this.$route.path == '/pwa'){
            this.mainTtitle = 'Pwa';
            this.subTitle = 'We’re a creative agency located in Brooklyn, New York.';
            this.bgImg = "../../img/page-bg/blog-bg.jpg" 

        } else if(this.$route.path == '/react'){
            this.mainTtitle = 'React js';
            this.subTitle = 'We’re a creative agency located in Brooklyn, New York.';
            this.bgImg = "../../img/page-bg/blog-bg.jpg" 

        } else if(this.$route.path == '/vue'){
            this.mainTtitle = 'Vue js';
            this.subTitle = 'We’re a creative agency located in Brooklyn, New York.';
            this.bgImg = "../../img/page-bg/blog-bg.jpg" 

        } else if(this.$route.path == '/services'){
            this.mainTtitle = 'Services';
            this.subTitle = 'We’re a creative agency located in Brooklyn, New York.';
            this.bgImg = "../../img/page-bg/services-bg.jpg" 

        }
        else if(this.$route.path == '/e-commerce'){
            this.mainTtitle = 'E-Commerce';
            this.subTitle = 'We’re a creative agency located in Brooklyn, New York.';
            this.bgImg = "../../img/page-bg/services-bg.jpg" 

        }
        else if(this.$route.path == '/web-development'){
            this.mainTtitle = 'Web Development';
            this.subTitle = 'Strategic Web Development Agency! Once we commit, we will deliver what is expected and beyond.';
            this.bgImg = "../../img/page-bg/services-bg.jpg" 

        }
        else if(this.$route.path == '/app-development'){
            this.mainTtitle = 'App Development';
            this.subTitle = 'We’re a creative agency located in Brooklyn, New York.';
            this.bgImg = "../../img/page-bg/services-bg.jpg" 

        }
        else if(this.$route.path == '/digital-marketing'){
            this.mainTtitle = 'SEO & Digital Marketing';
            this.subTitle = 'Accelerating brand value through digital innovation';
            this.bgImg = "../../img/page-bg/digital-bg.jpg" 

        } 
        else if(this.$route.path == '/magento-ecommerce-development'){
            this.mainTtitle = 'Magento Development';
            this.subTitle = 'Magento eCommerce development company';
            this.bgImg = "../../img/page-bg/magento-bg.jpg" 

        }
        else if(this.$route.path == '/wordpress-website-development'){
            this.mainTtitle = 'WordPress Development';
            this.subTitle = 'Web design & development, strong in customization, proven concepts that meet your needs.';
            this.bgImg = "../../img/page-bg/wordpress-bg.jpg" 

        }
        else if(this.$route.path == '/custom-php'){
            this.mainTtitle = 'Custom php';
            this.subTitle = 'We’re a creative agency located in Brooklyn, New York.';
            this.bgImg = "../../img/page-bg/contact-bg.jpg"
        }
        else if(this.$route.path == '/node'){
            this.mainTtitle = 'Node Js';
            this.subTitle = 'We’re a creative agency located in Brooklyn, New York.';
            this.bgImg = "../../img/page-bg/contact-bg.jpg"
        }
        else if(this.$route.path == '/laravel'){
            this.mainTtitle = 'Laravel';
            this.subTitle = 'We’re a creative agency located in Brooklyn, New York.';
            this.bgImg = "../../img/page-bg/contact-bg.jpg"
        }
        else if(this.$route.path == '/android-app-development'){
            this.mainTtitle = 'Android Apps Development';
            this.subTitle = 'We conceive, design, program, maintain and optimize your app.';
            this.bgImg = "../../img/page-bg/android-bg.jpg"
        }
        else if(this.$route.path == '/ionic'){
            this.mainTtitle = 'Ionic';
            this.subTitle = 'We’re a creative agency located in Brooklyn, New York.';
            this.bgImg = "../../img/page-bg/contact-bg.jpg"
        }
        else if(this.$route.path == '/ios-app-development'){
            this.mainTtitle = '<span class="text-lowercase">i</span>OS App Development';
            this.subTitle = 'Mobile app development for startups & business';
            this.bgImg = "../../img/page-bg/ios-bg.jpg"
        }
        else if(this.$route.path == '/flutter-app-development'){
            this.mainTtitle = 'Flutter App Developer';
            this.subTitle = 'Build Robust & Natively Compiled Mobile apps by Flutter';
            this.bgImg = "../../img/page-bg/flutter-bg.jpg"
        }
        else if(this.$route.path == '/python'){
            this.mainTtitle = 'Python';
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
        else if(this.$route.path == '/privacy-policy'){
            this.mainTtitle = 'Privacy Policy';
            // this.subTitle = 'We’re a creative agency located in Brooklyn, New York.';
            this.bgImg = "../../img/page-bg/privacy.jpg"
        }
        else {
            this.mainTtitle = 'Home';
            this.subTitle = 'We’re a creative agency located in Brooklyn, New York.';
        }
        
    },
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
                background: no-repeat center / cover;
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
            span {
                display: inline-block;
                text-transform: initial;
                } 
            h1{
                position: relative;
                font-size:4.5rem;
                font-weight: 700;
                letter-spacing: -0.2rem;
                color:var(--w-color);
                text-transform: capitalize;
                margin-bottom: 15px;
                &:after{
                    content: "";
                    position: absolute;
                    width: 160px;
                    left: 0;
                    right: 0;
                    bottom: -10px;
                    height: 2px;
                    background: var(--font-stl-two);
                    margin: 0 auto;
                }
                
                }
                p{
                    font-size: 1.12rem;
                    font-weight: 400;
                    color:var(--w-color);
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
                h1{
                    font-size: 3rem; letter-spacing: 0px;
                    &:after{
                        width: 90px;
                    }
                }
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