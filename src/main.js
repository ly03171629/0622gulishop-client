import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import '@/mock/mockServer' //引入mock接口文件，引入完成，本地就已经模拟好接口了
// import '@/api' //这里直接引入api文件，那么api文件就会运行

// import {reqCategoryList} from '@/api'
// reqCategoryList()
import "swiper/css/swiper.css";


Vue.config.productionTip = false

//这里是全局注册的组件
import TypeNav from '@/components/TypeNav'
import SliderLoop from '@/components/SliderLoop'
Vue.component('TypeNav',TypeNav)
Vue.component('SliderLoop',SliderLoop)


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
