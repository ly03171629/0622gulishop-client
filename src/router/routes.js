// import Home from '@/views/Home'
const Home = () => import('@/views/Home')  // import 打包会打包成一个单独问价   
                                          // 加载会第一次访问这个路由的时候才会加载


// import Search from '@/views/Search'
const Search = () => import('@/views/Search')

import Login from '@/views/Login'
import Register from '@/views/Register'
import Detail from '@/views/Detail'
import AddCartSuccess from '@/views/AddCartSuccess'
import ShopCart from '@/views/ShopCart'
import Trade from '@/views/Trade'
import Pay from '@/views/Pay'
import PaySuccess from '@/views/PaySuccess'
import Center from '@/views/Center'
import MyOrder from '@/views/Center/MyOrder'
import GroupOrder from '@/views/Center/GroupOrder'

import store from '@/store'

export default [
  {
    path:'/center',
    component:Center,
    children:[
      {
        path:'myorder',
        component:MyOrder
      },
      {
        path:'grouporder',
        component:GroupOrder
      },
      {
        path:'',
        redirect: 'myorder'
      },
    ]
  },
  {
    path:'/paysuccess',
    component:PaySuccess,
    beforeEnter: (to, from, next) => {
      if(from.path === '/pay'){
        next()
      }else{
        next('/')
      }
    }
  },
  {
    path:'/pay',
    component:Pay,
    beforeEnter: (to, from, next) => {
      if(from.path === '/trade'){
        next()
      }else{
        next('/')
      }
    }
  },
  {
    path:'/trade',
    component:Trade,
    beforeEnter: (to, from, next) => {
      if(from.path === '/shopcart'){
        next()
      }else{
        next('/')
      }
    }
  },
  {
    path:'/shopcart',
    component:ShopCart
  },
  {
    path:'/addcartsuccess',
    component:AddCartSuccess,
    beforeEnter: (to, from, next) => {
      let skuNum = to.query.skuNum
      let skuInfo = sessionStorage.getItem('SKUINFO_KEY')
      if(skuInfo && skuNum){
        next()
      }else{
        next('/')
      }
    }
  },
  {
    path:'/detail/:skuId',
    component:Detail
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/search/:keyword?',
    component:Search,
    name:'search',
    // props: (route)=>({keyword:route.params.keyword, keyword1: route.query.keyword1 })
  },
  {
    path:'/login',
    component:Login,
    meta:{
      isHidden:true
    },
    // beforeEnter: (to, from, next) => {
    //   if(store.state.users.userInfo.name){
    //     next('/')
    //   }else{
    //     next()
    //   }
    // }
  },
  {
    path:'/register',
    component:Register,
    meta:{
      isHidden:true
    }
  },
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/communication',
    component: () => import('@/views/Communication/Communication'),
    children: [
      {
        path: 'event',
        component: () => import('@/views/Communication/EventTest/EventTest'),
        meta: {
          isHideFooter: true
        },
      },
      {
        path: 'model',
        component: () => import('@/views/Communication/ModelTest/ModelTest'),
        meta: {
          isHideFooter: true
        },
      },
      {
        path: 'sync',
        component: () => import('@/views/Communication/SyncTest/SyncTest'),
        meta: {
          isHideFooter: true
        },
      },
      {
        path: 'attrs-listeners',
        component: () => import('@/views/Communication/AttrsListenersTest/AttrsListenersTest'),
        meta: {
          isHideFooter: true
        },
      },
      {
        path: 'children-parent',
        component: () => import('@/views/Communication/ChildrenParentTest/ChildrenParentTest'),
        meta: {
          isHideFooter: true
        },
      },
      {
        path: 'scope-slot',
        component: () => import('@/views/Communication/ScopeSlotTest/ScopeSlotTest'),
        meta: {
          isHideFooter: true
        },
      }
    ],
  },
]