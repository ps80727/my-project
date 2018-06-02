// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//rem
import './modules/rem'
//filter : premiere
import './modules/filter'
//animate.css
import '_animate.css@3.6.1@animate.css'

//引入全局scss文件
//在webpack中有一个特性，一切皆模块，在这里，webpack检测到scss文件之后会编译之后再将其拿出去的
import './stylesheets/main.scss'



import Vue from 'vue'
import App from './App'
import router from './router'

//MintUi
import MintUI from 'mint-ui'
import '../node_modules/mint-ui/lib/style.css'
Vue.use(MintUI)

// import { InfiniteScroll } from 'mint-ui';
// Vue.use(InfiniteScroll);

//自定义插件----mz-ui 返回顶部功能
import MZUI from './mz-ui'
import './mz-ui/stylesheets/main.scss'
Vue.use(MZUI)

//directives
import './modules/directive'

Vue.config.productionTip = false

//处理axios，让组件通过this.$http来使用
import axios from 'axios'
Vue.prototype.$http = axios


//Vuex
import store from './store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


//                            _ooOoo_
//                           o8888888o
//                           88" . "88
//                           (| -_- |)
//                            O\ = /O
//                        ____/`---'\____
//                      .   ' \\| |// `.
//                       / \\||| : |||// \
//                     / _||||| -:- |||||- \
//                       | | \\\ - /// | |
//                     | \_| ''\---/'' | |
//                      \ .-\__ `-` ___/-. /
//                   ___`. .' /--.--\ `. . __
//                ."" '< `.___\_<|>_/___.' >'"".
//               | | : `- \`.;`\ _ /`;.`/ - ` : | |
//                 \ \ `-. \_ __\ /__ _/ .-` / /
//         ======`-.____`-.___\_____/___.-`____.-'======
//                            `=---='
//
//         .............................................
//                  佛祖保佑             永无BUG