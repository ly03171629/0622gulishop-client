import {reqCategoryList} from '@/api'

const state = {
  //存数据 
  categoryList:[]
}
const mutations = {
  //直接修改state数据
  RECEIVECATEGORYLIST(state,categoryList){
    state.categoryList = categoryList
  }
}
const actions = {
  //异步action  因为一般我们都是在action当中去发请求拿数据
  async getCategoryList(context){
    const result = await reqCategoryList()
    if(result.code === 200){
      context.commit('RECEIVECATEGORYLIST',result.data)
    }
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}