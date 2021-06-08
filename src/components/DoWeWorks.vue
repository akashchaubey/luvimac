<template>
    <section class="section we-works">
        <div class="row m-0">
            <div class="col-md-10 mx-auto main-title">
                <div class="subtitle-text-work">How Do We</div>
                <div class="works">Works</div>
                <div class="subtitle-text-work">for Web Development</div>
            </div>
        </div>
        <div class="row col-md-10 mx-auto px-0 my-4 py-4">
            <div class="col-md-6">
                <div class="first-item">
                    <div class="first-item-title mb-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, necessitatibus.
                    </div>
                    <div class="first-item-dec mb-3">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque adipisci dolore, maiores ex harum labore! Accusamus dignissimos quae quo et nemo magnam nobis consectetur ab ea id architecto illum dolore, corporis quam facere atque possimus.
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="second-item">
                    <div class="second-item-content mb-3" v-for="n in 10">
                        <div class="second-item-title mb-2 mb-md-3">Flexibility</div>
                        <div class="second-item-dec">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque adipisci dolore, maiores ex harum labore! Accusamus dignissimos quae quo et nemo magnam nobis consectetur ab ea id architecto illum dolore, corporis quam facere atque possimus.</div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.subtitle-text-work {
    font-size: 10vw;
    line-height: 10vw;
    font-weight: 800;
}
.works {
        font-size: 14vw;
        line-height: 14vw;
        -webkit-text-stroke: 1.4px #000;
        color: #fff;
        letter-spacing: -.9vw;
        font-weight: 800;
    }
.we-works {
    
    .first-item {
        position: sticky;
        top: 70px;
        left: 0;
        .first-item-title {
            font-size: 22px;
            line-height: 26px;
            font-weight: 600;
        }
        // .first-item-dec {
        //     font-size: 22px;
        //     line-height: 26px;
        // }
    }
    .second-item {
        .second-item-content {
            .second-item-title {
                font-size: 32px;
                line-height: 45px;
                letter-spacing: -2px;
                font-weight: 800;
            }
        }
    }
}

@media screen and (min-width:576px) {
    .subtitle-text-work {
        font-size: 6vw;
        line-height: 6vw;
    }
    .works {
        font-size: 12vw;
        line-height: 12vw;
    }
}
@media screen and (min-width:992px) {
    .subtitle-text-work {
        font-size: 4.4vw;
        line-height: 4.4vw;
    }
    .works {
        font-size: 11vw;
        line-height: 11vw;
    }
}
</style>