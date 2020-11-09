import Home from '@/views/Home'
import Search from '@/views/Search'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Detail from '@/views/Detail'
import AddCartSuccess from '@/views/AddCartSuccess'
import ShopCart from '@/views/ShopCart'
import Trade from '@/views/Trade'

export default [
  {
    path:'/trade',
    component:Trade
  },
  {
    path:'/shopcart',
    component:ShopCart
  },
  {
    path:'/addcartsuccess',
    component:AddCartSuccess
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
    }
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
  }
]