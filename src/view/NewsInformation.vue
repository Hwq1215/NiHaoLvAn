<template>
    <div id="Case">
        <div class="container-fuild" id="Experience">
            <div class="experience">
                <img src="@/assets/img/experience.svg" alt="" class="excavator">
                <div class="learnmore">
                    <a href="#"><img src="@/assets/img/learn_more_2.svg" alt=""></a>
                </div>
            </div>
        </div>

        <div class="container-fuild" id="SpecificCase">
            <div class="materials">
                <div class="purchase">
                        <a href="#">
                            <img src="@/assets/img/purchase.svg" alt="">
                        </a>
                    </div>
                <img src="@/assets/img/material_1.svg" alt="">
            </div>
            <div class="corporation">
                <img src="@/assets/img/corporation_1.svg" alt="">
            </div>
        </div>
        <div class="container-fuild" id="SpecificCase">
            <div class="materials">
                <div class="purchase">
                        <a href="#">
                            <img src="@/assets/img/purchase.svg" alt="">
                        </a>
                    </div>
                <img src="@/assets/img/material_2.svg" alt="">
            </div>
            <div class="corporation">
                <img src="@/assets/img/corporation_2.svg" alt="">
            </div>
        </div>
        <div class="container-fuild" id="SpecificCase">
            <div class="materials">
                <div class="purchase">
                        <a href="#">
                            <img src="@/assets/img/purchase.svg" alt="">
                        </a>
                    </div>
                <img src="@/assets/img/material_3.svg" alt="">
            </div>
            <div class="corporation">
                <img src="@/assets/img/corporation_3.svg" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NewsInformation',
    data() {
        return {
            navIndex: sessionStorage.getItem('navIndex') ? sessionStorage.getItem('navIndex') : 0,
            menuName: "首页",
            menuClass: "glyphicon glyphicon-menu-down",
            navList: [
                {
                    name: "精品案例",
                    path: "/",
                    children: []
                },
                {
                    name: "EPC项目",
                    path: "/software",
                },
                {
                    name: "沙石材料",
                    path: "/service",
                    children: []
                },
                {
                    name: "建筑垃圾固废",
                    path: "/newsinformation",
                    children: []
                },
                {
                    name: "金属矿石破碎",
                    path: "/contactus",
                    children: []
                },
                {
                    name: "工业制粉",
                    path: "/contactus",
                    children: []
                },
                {
                    name: "全部",
                    path: "/contactus",
                    children: []
                }
            ]
        }
    },
    methods: {
        navClick(index, name) {
            this.navIndex = index;
            sessionStorage.setItem('navIndex', index)
            this.menuName = name;
        },
        menuClick() {
            if (this.menuClass == "glyphicon glyphicon-menu-down") {
                this.menuClass = "glyphicon glyphicon-menu-up";
            } else {
                this.menuClass = "glyphicon glyphicon-menu-down";
            }
        }
    }
}
</script>
<style scoped>
/* 整体盒子 */
#Case {
    width: 100%;

}

/* 丰富的服务经验 */
#Experience {
    display: flex;
    align-items: center;
    justify-content: center;
}

.experience {
    /* width: auto;
  height: auto; */
    max-width: 1440px;
    max-height: 420px;
    position: relative;
}

.experience>img {
    width: 100%;
    height: 100%;
}

.experience>.learnmore {
    width: 233px;
    height: 64px;
    position: absolute;
    bottom: 99px;
    right: 381px;
}


#SpecificCase {
    margin-top: 66px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;;
}

.materials {
    width: 974px;
    height: 320px;
    position: relative;
    display: flex;
    margin-bottom: 26px;
}

.corporation {
    width: 974px;
    height: 240px;
    position: relative;
    display: flex;
    margin-bottom: 61px;
}
.left .right {
    width: 480px;
    height: 320px;
}
.purchase{
    position: absolute;
    top: 244px;
    left: 20px;
}



.specific_caser_show {
    width: 792px;
    height: 456px;
    position: absolute;
    bottom: 83px;
    left: 102px;
    background-color: #B9B9B9;
    border-radius: 17px;
}

.specific_case_intr {
    width: 436px;
    height: 259px;
    position: absolute;
    bottom: 126px;
    right: 84px;
}

/* #Example {
    width: 1440px;
    margin: 0 auto;
} */

/* 案例导航 */
/* #Header { */
/* background: #ffffff;
  transition: all ease 0.6s;
  padding: 0 !important;
  margin: 0  auto !important; */
/* display: flex;
    align-items: center;
    justify-content: center;
}
.header-nav {
  width: 100%;
  height: 130px;
} */
/* 导航栏 导航容器 */
/* .header-nav .header-nav-wrapper {
  line-height: 130px; */
/* float: right; */
/* margin: 0; */
/* max-width: 900px; */
/* } */
/* 导航栏 每个导航 */
/* .header-nav .header-nav-wrapper > li {
  float: left;
  margin: 0 15px;
  position: relative;
} */
/* .header-nav .header-nav-wrapper > li > .nav-link{
  width: 120px;
  font-size: 24px !important; */
/* margin: 0 0px !important; */
/* } */
/* 导航栏 每个导航下面的 a 链接 */
/* .header-nav .header-nav-wrapper > li > .nav-link > a {
  color: #000; */
/* font-size: 24px !important; */
/* font-weight: bold;
  padding: 15px 0;
  position: relative;

  
} */


/* 导航栏 每个导航下面的 a 链接的下划线 */
/* #header .header-nav .header-nav-wrapper > li > a > i {
  display: block;
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  opacity: 0;
  transition: all 0.6s ease;
  background-color: #1e73be;
} */
/* 导航栏 每个导航下面的 a 链接的右侧小三角 */
/* #header .header-nav .header-nav-wrapper > li > a > span {
  font-size: 12px;
  transition: transform ease 0.5s;
} */
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去的样式 */
/* #header .header-nav .header-nav-wrapper > li > .nav-link > a:hover {
  color: #F60C0C;
  text-decoration: none;
} */
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去下划线的样式 */
/* #header .header-nav .header-nav-wrapper > li > a:hover .underline {
  opacity: 1;
  width: 100%;
  left: 0;
} */
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去三角标的样式 */
/* #header .header-nav .header-nav-wrapper > li > a:hover span {
  transform: rotate(180deg);
} */
/* 导航栏 每个导航下面的 a 链接 鼠标点击后的样式 */
#header .header-nav .header-nav-wrapper>li.active>.nav-link>a {
    color: #F60C0C;
    text-decoration: none;
    border-bottom: 2px solid #F60C0C;
}

@media screen and (max-width: 767px) {
    .news-container>li {
        width: 100%;
    }

    .news-container>li>.content {
        width: 70%;
        text-align: left;
        float: right;
    }

    .news-container>li>.time {
        width: 30%;
        text-align: left;
        float: right;
    }

    .news-container>li>.circle {
        display: none;
    }
}
</style>

