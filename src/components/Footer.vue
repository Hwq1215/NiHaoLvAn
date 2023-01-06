<template>
  <div id="footer" class="container-fluid">
    <!-- <div class="logo">
      <img src="@/assets/img/logo_white.png" alt="logo图">
    </div> -->
    <div class="link">
      <!-- <div class="relatedlink">相关链接</div> -->
      <ul>
        <li class="relatedlink">相关链接:</li>
        <li><a href="#">企业服务</a></li>
        <li><a href="#">企业服务</a></li>
        <li><a href="#">企业服务</a></li>
        <li><a href="#">企业服务</a></li>
      </ul>
    </div>
    <!-- <p class="title">公司企业网站模板</p>
    <p class="address_tel_fax">
      <span>地址：公司地址公司地址公司地址公司地址</span>
      <span>Tel：888-888-888</span>
      <span>Fax：8888-88888888</span>
    </p>
    <p class="email_wx">
      <span>邮箱：liyunkun_11@163.com</span>
      <span>公司微信号：ilyk_gg</span>
    </p>
    <p class="copy">Copyright &copy; 2018 - 2019 公司名称公司名称</p> -->
    <div class="footer">
      <ul class="helplist">
        <li class="help">帮助中心</li>
        <li><a>版本更新</a></li>
        <li><a>登陆系统</a></li>
        <li><a>资讯产品</a></li>
      </ul>
      <ul class="helplist">
        <li class="help">帮助中心</li>
        <li><a>版本更新</a></li>
        <li><a>登陆系统</a></li>
        <li><a>资讯产品</a></li>
      </ul>
      <ul class="helplist">
        <li class="help">帮助中心</li>
        <li><a>版本更新</a></li>
        <li><a>登陆系统</a></li>
        <li><a>资讯产品</a></li>
      </ul>
      <div class="tel">服务热线：400-233-222</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>
<style scoped>
* {
  margin: 0 !important;
  padding: 0 !important;
}

#footer {
  width: 100%;
  height: 400px;
  color: #fff;
  background: #474747;
  overflow: hidden;
  text-align: center;
}

.link {
  width: 100%;
  height: 100px;
  background-color: #FF8F50;
}

.link>ul {
  width: auto;
  height: 100px;
  background: #FF8F50;
  margin: 0px;
  padding:0 148px !important;
  /*左边距，使li看起来在中间*/
  /*position: relative;*/
  text-align: center;
}

.link > ul > li {
  float: left;
			width: 20%;
			height: 100px;
			padding: 0px;
			/* margin-right: 1%;  两个li之间的距离 */
      line-height: 100px ;
      font-size: 32px;
      color: #fff;
}

.link >ul > li > a {
  /* display: block; */
  color: #fff;
}
.link >ul > li > a:hover{
  text-decoration: none;
}

.footer {
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #8E8E8E;
  /* line-height: 300px; */
}

.footer > .helplist  {
  /* line-height: calc(300px/4) ; */
  /* flex: 0 0 30%; */
  text-align: left;
}

.footer > .helplist > .help {
  font-size: 24px;
  color: #fff;
  line-height: 57px;
}

.footer > .helplist > li > a {
  color: #fff;
  font-size: 18px;
  line-height: 36px;
}

.footer > .tel {
  font-size: 28px;
  flex: 0 0 30%;
}

/* .logo {
  width: 95px;
  height: 45px;
  margin: 50px auto 20px;
}
.title {
  font-size: 25px;
  margin-bottom: 20px;
}
.address_tel_fax {
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0;
}
.email_wx {
  color: #d3d3d3;
  font-size: 14px;
} 
.copy {
  color: #d3d3d3;
  font-size: 14px;
  margin: 50px 0 10px;
}*/
@media screen and (max-width: 997px) {
  .title {
    font-size: 20px;
  }

  .address_tel_fax {
    font-size: 12px;
  }

  .email_wx {

    font-size: 12px;
  }

  .copy {
    font-size: 12px;
    margin: 30px 0 10px;
  }
}
</style>

