<template>
    <div id="Program">
        <!-- <div class="row">
            <div id="left" class="col-md-4 col-xs-12">
                <ul class="left-container wow bounceInLeft">
                    <p>软件产品</p>
                    <li v-for="(item,index) in softwareList" :key="index">
                        <router-link :to=item.path>{{item.name}}</router-link>
                    </li>
                </ul>
            </div>
            <div id="right" class="col-md-8 col-xs-12  wow bounceInRight">
                <router-view></router-view>
            </div>
        </div> -->
        <div class="container-fuild" id="Trust">
            <div class="trust">
                <img src="@/assets/img/trust_team.svg" alt="" class="excavator">
                <div class="picture">
                    <img src="@/assets/img/trust_team_picture.svg">
                </div>
            </div>
        </div>
        <div class="container-fuild" id="About">
            <div class="about">
                <img src="@/assets/img/you_should_know_more.svg" alt="">
            </div>
        </div>
        <div class="container-fuild" id="ChiniDamage">
            <div class="chini_damage">
                <img src="@/assets/img/chini_demage.svg" alt="">
                <div class="demage_video">
                    赤泥危害视频
                    <video src=""></video>
                </div>
            </div>
        </div>
        <div class="container-fuild" id="Introduction">
            <div class="introduction">
                <img src="@/assets/img/introduction.svg" alt="">
                <div class="see_more">
                    <a href="#"><img src="@/assets/img/see_more.svg" alt=""></a> 
                </div>
            </div>
        </div>
        <div class="container-fuild" id="WhatWeDo">
            <div class="what_we_do">
                <img src="@/assets/img/what_we_do.svg" alt="">
            </div>
        </div>
        <div class="container-fuild" id="OurChange">
            <div class="our_change">
                <img src="@/assets/img/our_change.svg" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
    name: 'Software',
    data() {
        return {
            softwareList: [
                {
                    path: '/software/smartTown',
                    name: '智能小镇管理系统'
                }, {
                    path: '/software/bigData',
                    name: '大数据管理系统'
                }
            ]
        }
    },
    mounted() {
        var wow = new WOW();
        wow.init();
    },
}
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
}

/* 整体盒子 */
#Program {
    width: 100%;
}

/* 值得信赖的团队 */
#Trust {
    display: flex;
    align-items: center;
    justify-content: center;
}

.trust {
    /* width: auto;
  height: auto; */
    max-width: 1440px;
    height: 1312px;
    position: relative;
}

.trust>img {
    width: 100%;
    /* height: 100%; */
}

.trust>.picture {
    width: 897px;
    height: 583px;
    position: absolute;
    margin: 0 278px 0 265px;
    top: 465px;

    border-radius: 40px;
}

/* 关于我们你应该知道的几件事 */
#About {
    display: flex;
    align-items: center;
    justify-content: center;
}

/* 关于。。。 */
.about {
    width: 1440px;
    height: 132px;
    position: relative;
}
.about > img {
    position: absolute;
    left: 115px;
}

/* 赤泥危害 */
#ChiniDamage {
    display: flex;
    align-items: center;
    justify-content: center;
}

.chini_damage {
    width: 1440px;
    height: 788px;
    position: relative;
}

.chini_damage>img {
    position: absolute;
    top: 90px;
    left: 101px;
}

.chini_damage>.demage_video {
    width: 740px;
    height: 420px;
    position: absolute;
    top: 80px;
    right: 123px;
    background-color: #D9D9D9;
    border-radius: 40px;
}

/* 企业介绍 */
#Introduction {
    display: flex;
    align-items: center;
    justify-content: center;
}

.introduction {
    width: 1440px;
    height: 1435px;
    position: relative;
    overflow: hidden;
}

.introduction>img {
    position: absolute;
    top: 90px;
    left: 101px;
}

.introduction>.see_more {
    width: 200px;
    height: 60px;
    position: absolute;
    top: 99px;
    right: 120px;
    background-color: #FFA54D;
    border-radius: 15px;
}

/* 我们所做的 */
#WhatWeDo {
    display: flex;
    align-items: center;
    justify-content: center;
}

.what_we_do {
    width: 1440px;
    height: 1075px;
    position: relative;
    overflow: hidden;
}

.what_we_do>img {
    position: absolute;
    right: 0;
}

.what_we_do>.see_more {
    width: 200px;
    height: 60px;
    position: absolute;
    top: 99px;
    right: 120px;
    background-color: #FFA54D;
    border-radius: 15px;
}

/* 我们带来的改善 */
#OurChange {
    display: flex;
    align-items: center;
    justify-content: center;
}

.our_change {
    width: 1440px;
    height: 589px;
    position: relative;
    overflow: hidden;
}

.our_change>img {
    position: absolute;
    right: 0;
}

.our_change>.see_more {
    width: 200px;
    height: 60px;
    position: absolute;
    top: 99px;
    right: 120px;
    background-color: #FFA54D;
    border-radius: 15px;
}
/* #left {
    margin: 50px 0;
}

.left-container {
    width: 60%;
    margin: 0 auto;
    border: 1px solid #474747;
    border-radius: 5px;
}

.left-container>p {
    text-align: center;
    line-height: 45px;
    padding: 0;
    margin: 0;
    background: #474747;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
}

.left-container>li {
    text-align: center;
    height: 38px;
    line-height: 38px;
    margin: 0;
    border-top: 1px solid #474747;
}

.left-container>li>a {
    text-decoration: none;
}

.left-container>li:hover {
    background: #928989;
}

#right {
    padding: 50px 0;
} */

@media screen and (max-width: 768px) {
    #right {
        padding: 15px;
    }
}
</style>

