<template>
    <section class="section ourapproach">
        <div class="container wd-container">
                <h2 data-aos="fade-up" data-aos-duration="1000">Our Approach</h2>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="opproach">
                        <div class="opproach-count" data-aos="fade-up" data-aos-duration="1000">01</div>
                        <div class="approach-title" data-aos="fade-up" data-aos-duration="1000">Discovery</div>
                        <div class="approach-des" data-aos="fade-up" data-aos-duration="1000">As a first step, we will meet with you to understand your exact needs, functionalities, and goals for the project. We will then customize a plan specifically tailored to your business case, ensuring that you receive the highest quality of service</div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="opproach">
                        <div class="opproach-count" data-aos="fade-up" data-aos-duration="1000">02</div>
                        <div class="approach-title" data-aos="fade-up" data-aos-duration="1000">Concept</div>
                        <div class="approach-des" data-aos="fade-up" data-aos-duration="1000">We'll start by conceptualizing your website, considering your needs, goals, and desired outcome. Then, we'll design the layout, structure, and features to provide the best user experience possible, ensuring your website meets your expectations.</div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="opproach">
                        <div class="opproach-count" data-aos="fade-up" data-aos-duration="1000">03</div>
                        <div class="approach-title" data-aos="fade-up" data-aos-duration="1000">Design / Development</div>
                        <div class="approach-des" data-aos="fade-up" data-aos-duration="1000">We'll design and prototype your project, including system design, wireframing, UI/UX design, architecture, and development. We ensure clear project scope and requirements, maintaining consistency to deliver on time and to the highest quality standards.</div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="opproach">
                        <div class="opproach-count" data-aos="fade-up" data-aos-duration="1000">04</div>
                        <div class="approach-title" data-aos="fade-up" data-aos-duration="1000">Launch and support</div>
                        <div class="approach-des" data-aos="fade-up" data-aos-duration="1000">We prioritize meeting your expectations by being responsive and efficient in our communication and putting in extra effort to ensure successful project turnover, including deployment, migration, support, and review.</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss">
.ourapproach {
    padding-bottom: 3.5rem;
    h2 {
        font-size: 3.5rem;
        font-weight: 600;
        text-align: center;
    }
    .opproach {
            height: 100%;
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
            // &::after {
            //     content: "";
            //     background: #000000;
            //     width: 100%;
            //     height: 75%;
            //     line-height: 1;
            //     position: absolute;
            //     top: 15px;
            //     left: 0;
            //     transform: scale(0);
            //     z-index: -1;
            //     transition: all .5s ease;
            // }
            // &:hover {
            //     color: #ffffff;
            //     transition: all .5s ease;
            //         &::after {
            //         width: 100%;
            //         border-radius:5px;
            //         transform: scale(1);
            //     }
            // }
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