<template>
  <!-- 头部整体盒子 -->
  <div id="header" class="container-fuild">
    <div class="header-nav container hidden-xs">
      <!-- 导航logo -->
      <div class="header-nav-logo">
        <img src="@/assets/img/Logo.svg">
      </div>
      <!-- 导航内容 -->
      <ul class="header-nav-wrapper">
        <li
          v-for="(item,index) in navList"
          :key="index"
          :class="index==navIndex?'active':''"
          @click="navClick(index,item.name)"
        >
        <div class="nav-link">
          <router-link :to="item.path">
            {{item.name}}
            <!-- <span v-if="item.children.length>0" class="glyphicon glyphicon-menu-down"></span> -->
            <!-- <i class="underline"></i> -->
          </router-link>
          <!-- <dl v-if="item.children.length>0">
            <dt v-for="(i,n) in item.children" :key="n">
              <router-link :to="i.path">{{i.name}}</router-link>
            </dt>
          </dl> -->
        </div>
        </li>
        <li >
          <div class="nav-login">
              <router-link :to="{name:'login'}" > <i class="el-icon-user-solid " ></i></router-link>
          </div>
        </li>
      </ul>
    </div>
    <!-- 手机导航 -->
    <div class="header-nav-m container-fuild visible-xs">
      <div class="header-nav-m-logo">
        <img class="center-block" src="@/assets/img/logo_black.png" alt="logo">
      </div>
      <!-- 导航栏 -->
      <div class="header-nav-m-menu text-center">
        {{menuName}}
        <div
          class="header-nav-m-menu-wrapper"
          data-toggle="collapse"
          data-target="#menu"
          @click="menuClick"
        >
          <span :class="menuClass"></span>
        </div>
        <!-- 导航内容 -->
        <ul id="menu" class="header-nav-m-wrapper collapse">
          <li
            v-for="(item,index) in navList"
            :key="index"
            :class="index==navIndex?'active':''"
            @click="navClick(index,item.name)"
            data-toggle="collapse"
            data-target="#menu"
          >
            <router-link :to="item.path">
              {{item.name}}
              <i class="underline"></i>
            </router-link>
          </li>
          
        </ul>
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      navIndex: sessionStorage.getItem('navIndex') ? sessionStorage.getItem('navIndex') : 0,
      menuName: "首页",
      menuClass: "glyphicon glyphicon-menu-down",
      navList: [
        {
          name: "首页",
          path: "/home",
          children: []
        },
        {
          name: "项目",
          path: "/software",
          // children: [
          //   {
          //     name: "智能小镇管理系统",
          //     path: "/software/smartTown"
          //   },
          //   {
          //     name: "大数据管理系统",
          //     path: "/software/bigData"
          //   }
          // ]
        },
        {
          name: "技术",
          path: "/service",
          children: []
        },
        {
          name: "案例",
          path: "/newsinformation",
          children: []
        },
        // {
        //   name: "公司介绍",
        //   path: "/companyintroduction",
        //   children: []
        // },
        // {
        //   name: "工作机会",
        //   path: "/jobchance",
        //   children: []
        // },
        {
          name: "联系我们",
          path: "/contactus",
          children: []
        },
      ]
    };
  },
  created(){
    this.navIndex = sessionStorage.getItem('navIndex') ? sessionStorage.getItem('navIndex') : 0
  },
  activated() {
    this.navIndex = sessionStorage.getItem('navIndex') ? sessionStorage.getItem('navIndex') : 0
  },  
  methods: {
    navClick(index, name) {
      this.navIndex = index;
      sessionStorage.setItem('navIndex',index)
      this.menuName = name;
      console.log(index + name);
    },
    menuClick() {
      if (this.menuClass == "glyphicon glyphicon-menu-down") {
        this.menuClass = "glyphicon glyphicon-menu-up";
      } else {
        this.menuClass = "glyphicon glyphicon-menu-down";
      }
    }
  }
};
</script>
<style scoped>
/* 顶部 */
* {
  padding: 0 !important;
  margin: 0 !important;
}
#header {
  background: #ffffff;
  transition: all ease 0.6s;
  padding: 0 !important;
  margin: 0 !important;
}
/* #header .header-top {
  height: 50px;
  color: #fff;
  font-size: 12px;
  line-height: 50px;
  background: #474747;
} */
/* 顶部的图标 */
/* #header .header-top span {
  margin: 0 8px;
} */
/* 导航栏 */
#header .header-nav {
  width: 100%;
  height: 100px;
}
/* 导航栏logo */
#header .header-nav .header-nav-logo {
  /* width: 100%; */
  height: 100px;
  left: 30px;
  top: 14px;
  /* float: left; */
  position: absolute;
}
/* 导航栏logo图片 */
#header .header-nav .header-nav-logo img {
  width: 241px;
  height: 74px;
  /* position: absolute; */
  /* top: 14px;
  left: 30px; */
  right: 0;
  bottom: 0;
  margin: auto;
}
/* 导航栏 导航容器 */
/* #header .header-nav-fixed .header-nav-wrapper {
  line-height: 50px;
} */
#header .header-nav .header-nav-wrapper {
  line-height: 100px;
  float: right;
  margin: 0;
  max-width: 900px;
}
/* 导航栏 每个导航 */
#header .header-nav .header-nav-wrapper > li {
  float: left;
  margin: 0 15px;
  position: relative;
}
#header .header-nav .header-nav-wrapper > li > .nav-link{
  width: 120px;
  font-size: 24px !important;
  /* margin: 0 0px !important; */
}

/* 导航栏 每个导航下面的 a 链接 */
#header .header-nav .header-nav-wrapper > li > .nav-link > a {
  color: #000;
  /* font-size: 24px !important; */
  font-weight: bold;
  padding: 15px 0;
  position: relative;
}
#header .header-nav .header-nav-wrapper > li > .nav-login{
  width: 50px;
  font-size: 24px !important;
  /* margin: 0 0px !important; */
}
#header .header-nav .header-nav-wrapper > li > .nav-login > a{
  color: #ec7119;

  /* margin: 0 0px !important; */
}
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
#header .header-nav .header-nav-wrapper > li > .nav-link > a:hover {
  color: #F60C0C;
  text-decoration: none;
}
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
#header .header-nav .header-nav-wrapper > li.active > .nav-link > a {
  color: #F60C0C;
  text-decoration: none;
  border-bottom: 2px solid #F60C0C;
}
/* 导航栏 每个导航下面的二级导航容器 */
/* #header .header-nav .header-nav-wrapper > li > dl {
  display: none;
  position: absolute;
  width: 168px;
  top: 80%;
  left: 0;
  z-index: 999999;
  box-shadow: 0 0 3px 1px #ccc;
  background: #fff;
} */
/* 导航栏 每个导航下面的二级导航容器的每个导航 */
/* #header .header-nav .header-nav-wrapper > li > dl > dt {
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #ccc;
} */
/* 导航栏 每个导航下面的二级导航容器的每个导航 当鼠标滑上时的样式*/
/* #header .header-nav .header-nav-wrapper > li > dl > dt > a:hover {
  text-decoration: none;
} */
/* 导航栏 滑上一级导航显示二级导航 */
/* #header .header-nav .header-nav-wrapper > li:hover dl {
  display: block;
}
#header .header-nav .header-nav-wrapper > li > dl > dt:hover {
  cursor: pointer;
  background: #ccc;
} */
@media screen and (max-width: 997px) {
  #header .header-nav-m {
    position: relative;
  }
  /* 导航栏logo容器 */
  #header .header-nav-m .header-nav-m-logo {
    height: 80px;
    position: relative;
  }
  /* 导航栏logo图片 */
  #header .header-nav-m .header-nav-m-logo img {
    width: 95px;
    height: 45px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  /* 导航栏  菜单容器 */
  #header .header-nav-m .header-nav-m-menu {
    color: #fff;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    background: #474747;
    position: relative;
  }
  /* 导航栏 菜单图标 */
  #header .header-nav-m .header-nav-m-menu-wrapper {
    position: absolute;
    top: 50%;
    right: 20px;
    margin-top: -20px;
    width: 50px;
    height: 40px;
    color: #fff;
    z-index: 999999;
    font-size: 12px;
  }
  /* 导航栏 */
  #header .header-nav-m .header-nav-m-wrapper {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    background: #474747;
    z-index: 9999999;
  }
  /* 导航栏 每个导航 */
  #header .header-nav-m .header-nav-m-wrapper > li {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
  }
  /* 导航栏 每个导航下面的 a 链接 */
  #header .header-nav-m .header-nav-m-wrapper > li > a {
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    padding: 15px 0;
    position: relative;
  }
  /* 导航栏 每个导航下面的 a 链接的右侧小三角 */
  #header .header-nav .header-nav-wrapper > li > a > span {
    font-size: 10px;
  }
}
</style>
