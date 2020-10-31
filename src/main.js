import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
// import '@/api' //这里直接引入api文件，那么api文件就会运行

// import {reqCategoryList} from '@/api'
// reqCategoryList()



Vue.config.productionTip = false

//这里是全局注册的组件
import TypeNav from '@/components/TypeNav'
Vue.component('TypeNav',TypeNav)


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
