//这个文件是所有的接口请求函数
//每个接口我们以后都要使用axios去发送请求获取数据
//在这个文件当中我们把每个接口发请求都封装一个函数，以后哪里需要接口的数据，就调用相关的那个接口请求函数就好了
import Ajax from '@/ajax/Ajax'
import mockAjax from '@/ajax/mockAjax'
// /api/product/getBaseCategoryList
// 请求方式  get
// 参数  无

export const reqCategoryList = () => {
  return Ajax({
    url:'/product/getBaseCategoryList',
    method:'get'
  })
}


// reqCategoryList()

//mock的接口

export const reqBannerList = () => {
  return mockAjax({
    url:'/banner',
    method:'get'
  })
}

export const reqFloorList = () => {
  return mockAjax({
    url:'/floor',
    method:'get'
  })
}