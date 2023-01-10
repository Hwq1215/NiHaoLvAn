<template>
  <div id="ContactUs">
    <!-- <div class="banner container-fuild text-center">联系我们</div> -->
    <div class="login container-fuild">
      <img src="@/assets/img/Login.svg" alt="">
      <div class="login_form">
        <div class="login">

        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: "ContactUs",
  data() {
    return {};
  },
  mounted() {
    var map = new BMap.Map("map"); // 创建地图实例
    var point = new BMap.Point(116.301841, 40.156506); // 创建点坐标
    map.centerAndZoom(point, 18); // 初始化地图，设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    var marker = new BMap.Marker(point); // 创建标注
    map.addOverlay(marker); // 将标注添加到地图中
    var opts = {
      width: 50, // 信息窗口宽度
      height: 10, // 信息窗口高度
      title: "黄元公寓" // 信息窗口标题
    };
    var infoWindow = new BMap.InfoWindow(
      "我的家",
      opts
    ); // 创建信息窗口对象
    map.openInfoWindow(infoWindow, map.getCenter()); // 打开信息窗口
    var wow = new WOW();
    wow.init();
  }
};
</script>
<style scoped >
* {
  padding: 0;
  margin: 0 auto;
}

body {
  height: 100%;
}

.login {
  height: 100%;
  width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.login_form {
  position: absolute;
  width: 580px;
  height: 688px;
  background-image: url("../assets/img/login_forrm_background.svg");
  top: 198px;
  right: 102px;
}

/* .banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url("../assets/img/banner_1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
} */

@media screen and (max-width: 997px) {
  .ContactUs-container {
    padding: 20px 0;
  }
}
</style>

