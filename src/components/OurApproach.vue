<template>
    <section class="section ourapproach">
        <div class="container wd-container">
                <h2 data-aos="fade-up" data-aos-duration="1000">Our Approach</h2>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="opproach">
                        <div class="opproach-count" data-aos="fade-up" data-aos-duration="1000">01</div>
                        <div class="approach-title" data-aos="fade-up" data-aos-duration="1000">Discovery</div>
                        <div class="approach-des" data-aos="fade-up" data-aos-duration="1000">As a first step we will meet with you to map out your exact needs, functionalities, and goals for the project -we will customize the most suitable plan for you and give the best service for your business case.</div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="opproach">
                        <div class="opproach-count" data-aos="fade-up" data-aos-duration="1000">02</div>
                        <div class="approach-title" data-aos="fade-up" data-aos-duration="1000">Concept</div>
                        <div class="approach-des" data-aos="fade-up" data-aos-duration="1000">Your new digital solution will be designed in-house based on data and with the best aesthetics. Our experienced partners take care of developing websites, Apps, platforms, and more integrated solutions.</div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="opproach">
                        <div class="opproach-count" data-aos="fade-up" data-aos-duration="1000">03</div>
                        <div class="approach-title" data-aos="fade-up" data-aos-duration="1000">Design / Development</div>
                        <div class="approach-des" data-aos="fade-up" data-aos-duration="1000">Once you approve our design, we will hold a bi-weekly meeting with you to keep you updated with all the important aspects of your digital project. You will receive the best relationships and support from senior team members.</div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="opproach">
                        <div class="opproach-count" data-aos="fade-up" data-aos-duration="1000">04</div>
                        <div class="approach-title" data-aos="fade-up" data-aos-duration="1000">Launch and support</div>
                        <div class="approach-des" data-aos="fade-up" data-aos-duration="1000">At the end of the project cycle, our priority is to meet all your expectations. We double-down our responsive communication and effort to ensure a fast and on-point project turnover. Your idea is now reality with Dutch Design.</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss">
.ourapproach {
    h2 {
        font-size: 3.5rem;
        font-weight: 600;
        text-align: center;
    }
    .opproach {
            text-align: center;
            transition: all .3s ease-in-out;
            padding: 15px;
            border-radius: 10px;
            margin: 5px;
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
            &::after {
                content: "";
                background: #000000;
                width: 100%;
                height: 50px;
                line-height: 1;
                position: absolute;
                top: -50px;
                left: 0;
                border-bottom-left-radius: 0px;
                border-top-right-radius: 0px;
                z-index: -1;
                transition: all .3s ease;
            }
            &:hover {
                color: #ffffff;
                    &::after {
                    width: 100%;
                    top: 13px;
                    border-bottom-left-radius: 30px;
                    border-top-right-radius: 30px;
                }
            }
        }
        .approach-des {
            margin-bottom: 1.5rem;
            color: var(--font-stl-one);
        }
    }
}
@media screen and (max-width:767px) {
    .ourapproach {
        h2 {
            font-size: 2.5rem;
        }
    }
}
</style>