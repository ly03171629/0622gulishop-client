import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import '@/mock/mockServer' //引入mock接口文件，引入完成，本地就已经模拟好接口了
import * as API from '@/api'
// import '@/api' //这里直接引入api文件，那么api文件就会运行

// import {reqCategoryList} from '@/api'
// reqCategoryList()
import "swiper/css/swiper.css";

import './validate' //引入和表单验证相关的模块


//添加图片懒加载的功能   插件会为vue添加一个指令  v-lazy
import VueLazyload from 'vue-lazyload'
import loading from '@/assets/images/loading.gif'

Vue.use(VueLazyload,{
  loading
})


//按需引入element-ui当中的组件
import { Message,MessageBox,Button,Input} from 'element-ui';

//第一大类是组件标签形式的组件注册
Vue.use(Button)  // Vue.component(Button.name,Button)
Vue.use(Input)  // Vue.component(Button.name,Button)


//第二大类是函数或者对象形式的组件注册
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;




Vue.config.productionTip = false

//这里是全局注册的组件
import TypeNav from '@/components/TypeNav'
import SliderLoop from '@/components/SliderLoop'
import Pagination from '@/components/Pagination'
Vue.component('TypeNav',TypeNav)
Vue.component('SliderLoop',SliderLoop)
Vue.component('Pagination',Pagination)


new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  render: h => h(App),
  router,
  store
}).$mount('#app')
