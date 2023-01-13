<template>
    <div id="Technology">
        <div class="container-fuild" id="Show">
            <div class="show">
                <div id="swiper" class="container-fuild">
                    <div class="swiper-container banner-swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(item, index) in swiperList" :key="index">
                                <img class="swiper-lazy" :data-src="item.img" alt="轮播图">
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fuild" id="ChiniTransTech">
            <div class="chini_trans_tech">
                <span>&nbsp;</span>
                <img src="@/assets/img/chini_trans_tech_title.svg" alt="">
                <div class="chini_trans_tech_show">
                    <img src="@/assets/img/chini_trans_tech_show.svg" alt="">
                </div>
                <div class="chini_trans_tech_intr">
                    <img src="@/assets/img/chini_trans_tech_intr.svg" alt="">
                    <div class="buy">
                        <a href="#"><img src="@/assets/img/buy.svg" alt=""></a>
                    </div>
                </div>
                <div class="switch">
                    <div class="theory">
                        <a href="#"><img src="@/assets/img/theory.svg" alt=""></a>
                    </div>
                    <div class="none effect">
                        <a href="#"><img src="@/assets/img/effect.svg" alt="" class="linkA"></a>
                    </div>
                    <div class="none service">
                        <a href="#"><img src="@/assets/img/service.svg" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fuild" id="DiolCompreTech">
            <div class="diol_compre_tech">
                <span>&nbsp;</span>
                <img src="@/assets/img/diol_compre_tech_title.svg" alt="">
                <div class="diol_compre_tech_show">
                    <img src="@/assets/img/diol_compre_tech_show.svg" alt="">
                </div>
                <div class="diol_compre_tech_intr">
                    <img src="@/assets/img/diol_compre_tech_intr.svg" alt="">
                    <div class="buy">
                        <a href="#"><img src="@/assets/img/buy.svg" alt=""></a>
                    </div>
                </div>
                <div class="switch_diol">

                    <div class="none effect">
                        <a href="#"><img src="@/assets/img/effect.svg" alt=""></a>
                    </div>
                    <div class="none trans_value">
                        <a href="#"><img src="@/assets/img/trans_value.svg" alt=""></a>
                    </div>
                    <div class="none service">
                        <a href="#"><img src="@/assets/img/service.svg" alt=""></a>
                    </div>
                    <div class="theory">
                        <a href="#"><img src="@/assets/img/theory.svg" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fuild" id="TransEntIntr">
            <div class="trans_ent_intr">
                <!-- <span>&nbsp;</span> -->
                <img src="@/assets/img/trans_ent_intr_title.svg" alt="">
                <div class="trans_ent_intr_show">
                    <img src="@/assets/img/trans_ent_intr_show.svg" alt="">
                </div>
                <div class="trans_ent_intr_intr">
                    <img src="@/assets/img/trans_ent_intr_intr.svg" alt="">
                    <!-- <div class="buy">
                    <a href="#"><img src="@/assets/img/buy.svg" alt=""></a>
                   </div> -->
                </div>
                <!-- <div class="switch_diol">
                    
                    <div class="none effect">
                        <a href="#"><img src="@/assets/img/effect.svg" alt=""></a>
                    </div>
                    <div class="none trans_value">
                        <a href="#"><img src="@/assets/img/trans_value.svg" alt=""></a>
                    </div>
                    <div class="none service">
                        <a href="#"><img src="@/assets/img/service.svg" alt=""></a>
                    </div>
                    <div class="theory">
                        <a href="#"><img src="@/assets/img/theory.svg" alt=""></a>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from "swiper";
export default {
    name: 'Service',
    data() {
        return {
            swiperList: [
                {
                    img: require("../assets/img/show_1.svg"),
                    path: ''
                },
                {
                    img: require("../assets/img/show_1.svg"),
                    path: ''
                },
                {
                    img: require("../assets/img/show_1.svg"),
                    path: ''
                }
            ]
        };
    },
    mounted() {
        new Swiper(".banner-swiper", {
            loop: true, // 循环模式选项
            effect: 'slide',
            //自动播放
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false
            },
            // 如果需要分页器
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            // 如果需要前进后退按钮
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            // 延迟加载
            lazy: {
                loadPrevNext: true
            },
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true //修改swiper的父元素时，自动初始化swiper
        });
    },
}
</script>
<style scoped>
#Technology {
    width: 100%;
}

/* 轮播图 */
#Show {
    display: flex;
    align-items: center;
    justify-content: center;
}

.show {
    /* width: auto;
  height: auto; */
    width: 1440px;
    height: 518px;
    position: relative;
    background-color: #FFA54D;
}

.banner-swiper {
    height: 518px;
    width: 1440px;
    position: absolute;
    /* top: 119px;
    right: 200px;
    border-radius: 34px; */
    overflow: hidden;
}

/* 赤泥转化技术 */
#ChiniTransTech {
    display: flex;
    align-items: center;
    justify-content: center;
}

.chini_trans_tech {
    width: 1440px;
    height: 748px;
    position: relative;
}

.chini_trans_tech>span {
    line-height: 56px;
}

.chini_trans_tech>img {
    display: block;
    margin: 0 auto;
}

.chini_trans_tech_show {
    width: 570px;
    height: 372px;
    position: absolute;
    top: 134px;
    left: 111px;
    border-radius: 18px;
    overflow: hidden;
}

.chini_trans_tech_intr {
    width: 651.01px;
    height: 368px;
    position: absolute;
    top: 160px;
    right: 54.99px
}

.buy {
    position: absolute;
    bottom: 0;
    right: 4px;
}

.switch {
    width: 542.41px;
    height: 139.43px;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    position: absolute;
    top: 557.57px;
    left: 464.99px;

}

.none {
    filter: grayscale(100%);
}

.switch>div:hover {
    filter: grayscale(0);
}

/* 降碱赤泥综合利用技术 */
#DiolCompreTech {
    display: flex;
    align-items: center;
    justify-content: center;
}

.diol_compre_tech {
    width: 1440px;
    height: 843px;
    position: relative;
}

.diol_compre_tech>span {
    line-height: 52px;
}

.diol_compre_tech>img {
    display: block;
    margin: 0 auto;
}

.diol_compre_tech_show {
    width: 506px;
    height: 279.77px;
    position: absolute;
    bottom: 414.23px;
    right: 272px;
    overflow: hidden;
}

.diol_compre_tech_intr {
    width: 831.05px;
    height: 353.74px;
    position: absolute;
    bottom: 29.26px;
    right: 54.95px;
}

.buy {
    position: absolute;
    bottom: 0px;
    right: 4px;
}

.switch_diol {
    width: 148px;
    height: 667px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    top: 147px;
    left: 252px;
}

.none {
    filter: grayscale(100%);
}

.switch_diol>div:hover {
    filter: grayscale(0);
}

/* 转化企业简介 */
#TransEntIntr {
    display: flex;
    align-items: center;
    justify-content: center;
}

.trans_ent_intr {
    width: 1440px;
    height: 633px;
    position: relative;
}

.trans_ent_intr>img {
    display: block;
    /* margin: 0 auto; */
    position: absolute;
    left: 136px;
}

.trans_ent_intr_show {
    width: 792px;
    height: 456px;
    position: absolute;
    bottom: 83px;
    left: 102px;
    border-radius: 17px;
    overflow: hidden;
}

.trans_ent_intr_intr {
    width: 436px;
    height: 259px;
    position: absolute;
    bottom: 126px;
    right: 84px;
}

/* 遇到问题？ */
#Question {
    display: flex;
    align-items: center;
    justify-content: center;
}

.question {
    width: 1440px;
    height: 581px;
    position: relative;
    overflow: hidden;
}

/* .question>img { */
    /* display: block; */
    /* margin: 0 auto; */
/* } */

/* .Service-container{
    padding: 30px 50px;
}
.Service-item{
    margin-bottom: 50px;
}
.Service-item-wrapper{
    cursor: pointer;
    background: rgba(244,244,244,1);
    overflow: hidden;
    position: relative;
}
.Service-item-top{
    width: 100%;
    height: 120px;
    padding: 30px;
    text-align: center;
}
.Service-item-top>i{
    display: inline-block;
    width: 25px;
    height: 2px;
    background: #28f;
}
.Service-item-top>p{
    color: #b2b2b2;
    opacity: 0;
    transform: translateY(10px);
    transition: all .5s ease;
}
.Service-item-img{
    width: 100%;
    overflow: hidden;
}
.Service-item-img img{
    width: 100%;
    transition: all 0.5s ease;
}
.Service-item-border{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 9999999;
    width: 100%;
    height: 100%;
    transition: all 0.5s ease;
    border: 1px solid #000;
    opacity: 0;
}
.Service-item-wrapper:hover .Service-item-top > i{
    opacity: 0;
}
.Service-item-wrapper:hover .Service-item-top > p{
    opacity: 1;
    transform: translateY(-10px);
}
.Service-item-wrapper:hover .Service-item-img > img{
    transform: scale(1.1,1.1);
}
.Service-item-wrapper:hover > .Service-item-border{
    opacity: 1;
    width: 90%;
    height: 90%;
} */
</style>

