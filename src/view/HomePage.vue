<template>
  <div id="HomePage">
    <!-- 泥好铝安 -->
    <div class="container-fuild" id="HelloLvAn">
      <div class="hellolvan">
        <img src="@/assets/img/hello_lvan.svg" alt="" class="excavator">
        <div class="learnmore">
          <a href="#"><img src="@/assets/img/learn_more.svg" alt=""></a>
        </div>
      </div>
    </div>
    <!-- 高效脱碱 -->
    <div class="container-fuild" id="Dialkalization">
      <div class="dialkalization">
        <span>&nbsp;</span>
        <img src="@/assets/img/dial_info.svg" alt="">
      </div>
    </div>
    <!-- 赤泥转化技术 -->
    <div class="container-fuild" id="Transfrom">
      <div class="transfrom">
        <span>&nbsp;</span>
        <img src="../assets/img/chini_trans_tech.svg" alt="">
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
        <div class="intr">
          <img src="../assets/img/intr.svg" alt="">
          
        </div>
        <div class="learn">
         <a href="#"><img src="../assets/img/learn.svg" alt=""></a> 
        </div>
      </div>
    </div>
    <!-- 降碱赤泥综合利用技术 -->
    <div class="container-fuild" id="Comprehensive">
      <div class="comprehensive">
        <span>&nbsp;</span>
        <img src="..\assets\img\dial_chini_tech.svg" alt="" class="dial_chini_tecl">
        <div class="product">
          <div class="pro_info">
            <div class="pro_info_img">
              <img src="../assets/img/pro_info_img_1.svg" alt="">
            </div>
            <div class="pro_info_TitleAndButto">
              <a href=""><img src="../assets/img/product_information_1.svg" alt=""></a>
            </div>
          </div>
          <div class="pro_info">
            <div class="pro_info_img">
              <img src="../assets/img/pro_info_img_2.svg" alt="">
            </div>
            <div class="pro_info_TitleAndButto">
              <a href=""><img src="../assets/img/product_information_2.svg" alt=""></a>
            </div>
          </div>
          <div class="pro_info">
            <div class="pro_info_img">
              <img src="../assets/img/pro_info_img_3.svg" alt="">
            </div>
            <div class="pro_info_TitleAndButto">
              <a href=""><img src="../assets/img/product_information_3.svg" alt=""></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 企业信息 -->
    <div class="container-fuild" id="Enterprise">
      <div class="enterprise">
        <span>&nbsp;</span>
        <img src="..\assets\img\enterprise_information.svg" alt="" class="dial_chini_tecl">
        <div class="introduce">
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;武汉鑫普利环保科技有限公司结合“双碳”战略大背景，以开创最具前景的赤泥综合利用产业为目标，以赤泥无害化、资源化处理为核心导向，凭借公司先进的赤泥降碱装置和赤泥综合利用产品，助力国家加快实现赤泥规模化高效利用，提升赤泥综合利用能力。公司以武汉理工大学硅酸盐建筑材料国家重点实验室及非金属矿物、材料、矿业等领域知名专家组成的技术顾问团队为该项目技术支撑提供双重保障，发展前景光明。</span>
          <div class="br"></div>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 公司净利润预计2022
            年实现754.62万元，至2027年实现24,956.06万元；总资产净利率呈快速上升趋势，从第二年起稳居 20%以上，到2027年总资产净利率预计达到39.94%。</span>
        </div>
        <div class="numbers">
          <img src="..\assets\img\exp_info_numbers.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  name: "HomePage",
  data() {
    return {
      swiperList: [
        {
          img: require("../assets/img/transform_swipper_1.svg"),
          path: ''
        },
        {
          img: require("../assets/img/transform_swipper_2.svg"),
          path: ''
        },
        {
          img: require("../assets/img/transform_swipper_3.svg"),
          path: ''
        }
      ]
    };
  },
  mounted() {
    /* banner-swiper */
    new Swiper(".banner-swiper", {
      loop: true, // 循环模式选项
      effect: 'cube',
      //自动播放
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true
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
    /* customer-swiper */
    // new Swiper(".customer-swiper", {
    //   loop: true, // 循环模式选项
    //   slidesPerView: 3,
    //   //自动播放
    //   autoplay: {
    //     delay: 3000,
    //     stopOnLastSlide: false,
    //     disableOnInteraction: false
    //   },
    //   // 如果需要前进后退按钮
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev"
    //   },
    //   observer: true, //修改swiper自己或子元素时，自动初始化swiper
    //   observeParents: true //修改swiper的父元素时，自动初始化swiper
    // });
    /* wowjs动画 */
    // var wow = new WOW({
    //   boxClass: 'wow',
    //   animateClass: 'animated',
    //   offset: 0,
    //   mobile: true,
    //   live: true
    // })
    // wow.init();
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}

/* 整体盒子 */
#HomePage {
  width: 100%;

}

/* 泥好铝安 */
#HelloLvAn {
  display: flex;
  align-items: center;
  justify-content: center;
}

.hellolvan {
  /* width: auto;
  height: auto; */
  max-width: 1440px;
  max-height: 720px;
  position: relative;
}

.hellolvan>img {
  width: 100%;
  height: 100%;
}

.hellolvan>.learnmore {
  width: 296px;
  height: 96px;
  position: absolute;
  bottom: 226px;
  right: 299px;
}

/* 高效脱碱 */
#Dialkalization {
  display: flex;
  align-items: center;
  justify-content: center;
}

.dialkalization {
  width: 1440px;
  height: 440px;
  position: relative;
}

.dialkalization>span {
  line-height: 78px;
}

.dialkalization>img {
  display: block;
  margin: 0 auto;
}


/* 赤泥转化技术 */
#Transfrom {
  display: flex;
  align-items: center;
  justify-content: center;
}

.transfrom {
  width: 1440px;
  height: 680px;
  position: relative;
  background-image: url('../assets/img/transfrom.png');
}

.transfrom>span {
  line-height: 46px;
}

.transfrom>img {
  display: block;
  margin: 0 auto;
}

.banner-swiper {
  height: 500px;
  width: 451.29px;
  position: absolute;
  top: 119px;
  right: 200px;
  border-radius: 34px;
  overflow: hidden;
}

.intr {
  position: absolute;
  top: 130px;
  left: 200px;
}

.learn {
  position: absolute;
  left: 300px;
  bottom: 75px;
}

/* 降碱赤泥综合利用技术 */
#Comprehensive {
  display: flex;
  align-items: center;
  justify-content: center;
}

.comprehensive {
  width: 1440px;
  height: 658px;
  position: relative;
  background-color: white;
}

.comprehensive>span {
  line-height: 30px;
}

/* 标题 */
.comprehensive>img {
  display: block;
  margin: 0 auto;
}

/* 信息 */
.product {
  width: 100%;
  margin-top: 61.97px;
  margin-bottom: 35px;
  display: flex;
  justify-content: space-evenly;
}

/* 单个介绍 */
/* 图片 */
.pro_info_img {
  width: 298px;
  height: 384px;
  background-color: #D9D9D9;
  border-radius: 21px;
  overflow: hidden;
}

/* 产品标题与了解详情 */
.pro_info_TitleAndButto {
  margin-top: 17px;
  display: flex;
  justify-content: center;
}

/* 企业信息 */
#Enterprise {
  display: flex;
  align-items: center;
  justify-content: center;
}

.enterprise {
  width: 1440px;
  height: 645px;
  position: relative;
  background-color: #f4f4f4;
}

.enterprise>span {
  line-height: 74px;
}

/* 标题 */
.enterprise>img {
  display: block;
  margin: 0 auto;
}

/* 介绍内容 */
.introduce {
  width: 1115px;
  height: 214px;
  margin: 39px 158px 78px 167px;
  font-size: 24px;
  line-height: 32px;
}

/* 段落间距 */
.br {
  width: 100%;
  height: 10px;
}

/* 数字 */
.numbers {
  margin: 0 364px 32.86px 289px;
}

/* 轮播图 */
/* #swiper {
  height: 600px;
}

#swiper .banner-swiper {
  width: 100%;
  height: 100%;
}

#swiper .banner-swiper .swiper-slide img {
  width: 100%;
  height: 100%;
}

#swiper .banner-swiper .swiper-slide {
  position: relative;
}

#swiper .banner-swiper .swiper-slide-title {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999999;
  width: 100%;
  height: 100%;
  color: #fff;
  background: rgba(51, 51, 51, 0.534);
  text-align: center;
  line-height: 80px;
}

#swiper .banner-swiper .swiper-slide-title>h1 {
  font-size: 50px;
  margin-top: 12%;
}

#swiper .banner-swiper .swiper-slide-title>p {
  font-size: 20px;
  margin-top: 1%;
  font-weight: 700;
} */

/* 大数据管理系统 */
/* #bigData {
  padding: 100px;
  transition: all ease 0.6s;
  box-sizing: border-box;
}

#bigData .bigData-title {
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}

#bigData p {
  font-size: 14px;
  color: #333;
  line-height: 2rem;
}

#bigData .bigData-device {
  margin: 50px 0 20px;
} */

/* 您身边的IT专家 */
/* #contactUs {
  color: #fff;
  height: 400px;
  background: url("../assets/img/contact_us_bg.jpg") 0 0 no-repeat;
  background-size: 100% 100%;
  transition: all ease 0.6s;
}

#contactUs .contactUs-container {
  padding-top: 50px;
}

#contactUs .contactUs-container button {
  width: 300px;
  height: 50px;
  margin-top: 40px;
}

#contactUs .contactUs-container .contactUs-contactWay span {
  display: inline-block;
  width: 48px;
  height: 48px;
  margin: 30px;
}

#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(1) {
  background: url("../assets/img/weixin.png") 0 0 no-repeat;
  background-size: 100% 100%;
}

#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(2) {
  background: url("../assets/img/weibo.png") 0 0 no-repeat;
  background-size: 100% 100%;
}

#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(3) {
  background: url("../assets/img/twitter.png") 0 0 no-repeat;
  background-size: 100% 100%;
} */

/* 客户评价 */
/* #customer {
  padding: 50px 0;
  box-sizing: border-box;
  background: #efefef;
  transition: all ease 0.6s;
}

#customer .customer-title {
  font-size: 30px;
  color: rgb(102, 102, 102);
  margin: 0 0 30px;
}

#customer .customer-block {
  background: #fff;
  padding: 30px;
}

#customer .customer-logo img {
  width: 94px;
  height: 94px;
  border: 1px solid #ccc;
}

#customer .customer-yh img {
  width: 34px;
  height: 34px;
}

#customer .customer-content1 {
  padding-bottom: 20px;
  border-bottom: 1px solid #0ce9f1;
}

#customer .customer-content2 {
  padding-top: 20px;
} */

/* 为什么选择我们 */
/* #whyChooseUs {
  padding: 100px;
}

#whyChooseUs .whyChooseUs-title {
  margin-bottom: 50px;
}

#whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
  font-size: 25px;
  font-weight: 500;
}

#whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
  font-size: 14px;
}

#whyChooseUs .server-block {
  padding: 50px 20px;
  border: 1px solid #ccc;
  border-bottom: 5px solid #ccc;
}

#whyChooseUs .server-block img {
  width: 48px;
  height: 48px;
}

#whyChooseUs .server-block>p {
  font-size: 20px;
  margin: 30px 0;
}

#whyChooseUs .server-block>div {
  color: #ccc;
} */

/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
  #swiper {
    height: 200px;
  }

  #bigData {
    padding: 30px;
  }

  #bigData .bigData-title {
    font-size: 20px;
  }

  #bigData .bigData-device {
    font-size: 20px;
    margin: 10px 0 10px;
  }

  #contactUs {
    height: 200px;
    transition: all ease 0.6s;
  }

  #contactUs .contactUs-container {
    padding-top: 0;
  }

  #contactUs .contactUs-container h1 {
    font-size: 25px;
  }

  #contactUs .contactUs-container h3 {
    font-size: 18px;
  }

  #contactUs .contactUs-container button {
    width: 200px;
    height: 30px;
    margin-top: 20px;
  }

  #contactUs .contactUs-container .contactUs-contactWay span {
    display: inline-block;
    width: 28px;
    height: 28px;
    margin: 10px;
  }

  #customer {
    padding: 30px 0;
    box-sizing: border-box;
    background: #fff;
  }

  #customer .customer-title {
    font-size: 16px;
    font-weight: bold;
  }

  #customer .customer-logo img {
    width: 48px;
    height: 48px;
  }

  #customer .customer-block {
    padding: 30px;
  }

  #customer .customer-block>div {
    padding: 30px 0;
  }

  #whyChooseUs {
    padding: 20px 0;
    transition: all ease 0.6s;
  }

  #whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
    font-size: 20px;
    font-weight: 700;
  }

  #whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
    font-size: 12px;
  }

  #whyChooseUs .server-block {
    padding: 50px 0;
    border: 1px solid #ccc;
    border-bottom: 5px solid #ccc;
  }

  #whyChooseUs .server-block img {
    width: 48px;
    height: 48px;
  }

  #whyChooseUs .server-block>p {
    font-size: 20px;
    margin: 30px 0;
  }

  #whyChooseUs .server-block>div {
    color: #ccc;
  }
}

/* 媒体查询（平板） */
@media screen and (min-width: 768px) and (max-width: 996px) {
  #swiper {
    height: 400px;
  }

  #bigData {
    padding: 60px;
  }

  #bigData .bigData-title {
    font-size: 30px;
  }

  #bigData .bigData-device {
    font-size: 30px;
    margin: 30px 0 15px;
  }

  #contactUs {
    height: 300px;
  }

  #contactUs .contactUs-container {
    padding-top: 50px;
  }

  #contactUs .contactUs-container h1 {
    font-size: 30px;
  }

  #contactUs .contactUs-container h3 {
    font-size: 20px;
  }

  #contactUs .contactUs-container button {
    width: 300px;
    height: 50px;
    margin-top: 30px;
  }

  #contactUs .contactUs-container .contactUs-contactWay span {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin: 15px;
  }

  #customer .customer-title {
    font-size: 24px;
  }

  #whyChooseUs {
    padding: 20px 0;
  }
}
</style>

