// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

/* 路由 */
import router from './router'

/* axios */
import axios from './api'
import api from './api/api'
Vue.prototype.http = axios;
Vue.prototype.api = api;

/* swiper */
import 'swiper/dist/css/swiper.min.css';

/* 重置样式 */
import './assets/css/reset.min.css'

/* jquery */
import 'jquery'

/* bootstarp */
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'

/* animate.css */
import 'animate.css'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/base.css';
/* 头部组件 */
import Header from './components/Header'
Vue.component(Header.name,Header)


/* 尾部组件 */
import Footer from './components/Footer'
Vue.component(Footer.name,Footer)

/* 回到顶部 */
import GoTop from './components/GoTop'
Vue.component(GoTop.name,GoTop)

/*登录表*/
import LoginForm from './components/LoginForm'
Vue.component(LoginForm.name,LoginForm)

Vue.config.productionTip = false

Vue.use(ElementUI)
router.beforeEach((to, from,next) => {
	sessionStorage.setItem("username",'123456');
	const username = sessionStorage.getItem("username");
		if(to.name == 'login'){
			console.log(to.name)
			next();
		}
		else if(username != '123456' ){
			// 没有登录则进入login界面
			console.log("进入")
			next('login');
		}else{
			console.log(to.name + from.name + username);
			next() ;
		}
});


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
