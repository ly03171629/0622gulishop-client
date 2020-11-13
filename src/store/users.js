import {getUserTempId} from '@/utils/userAbout'
import {reqUserLogin, reqUserLogout, reqUserRegister,reqTokenGetUserInfo} from '@/api'
const state = {
  userTempId:getUserTempId(),  //用户的临时标识肯定是存储在users的state当中

  //第一版本  不但包含了token还包含了用户的其它信息（nickName,name）
  // userInfo:{}  //不考虑自动登录 
  // userInfo: JSON.parse(localStorage.getItem('USERINFO_KEY')) || {}  //考虑自动登录


  //第二版本
  //token用来保存登录后返回的token,一定要存储localStorage当中
  token:localStorage.getItem('TOKEN_KEY') || '',
  userInfo:{}  //不存localStorage

}
const mutations = {
  RECEIVETOKEN(state,token){
    state.token = token
  },
  //12版本都用
  RECEIVEUSERINFO(state,userInfo){
    state.userInfo = userInfo
  },

  REMOVEUSERINFO(state){
    state.userInfo = {}
    state.token = ''
  }

  
}
const actions = {
  async userRegister({commit},userInfo){
    const result = await reqUserRegister(userInfo)
    if(result.code === 200){
      return 'ok'
    }else{
      return Promise.reject(new Error('fail'))
    }
  },

  async userLogin({commit},userInfo){
    const result = await reqUserLogin(userInfo)
    if(result.code === 200){
      // commit('RECEIVEUSERINFO',result.data)
      //存储到localStorage当中是为了做自动登录
      // localStorage.setItem('USERINFO_KEY',JSON.stringify(result.data)) //自动登录


      commit('RECEIVETOKEN',result.data.token)//提交修改token的值存储vuex
      localStorage.setItem('TOKEN_KEY',result.data.token)



      return 'ok'
    }else{
      return Promise.reject(new Error('fail'))
    }
  },

  async userLogout({commit}){
    const result = await reqUserLogout()
    if(result.code === 200){
      //一旦请求退出登录成功，需要删除state当中userInfo当中的数据 并且还要删除localStorage当中的用户信息
      // commit('REMOVEUSERINFO')
      // localStorage.removeItem('USERINFO_KEY')  

      commit('REMOVEUSERINFO')
      localStorage.removeItem('TOKEN_KEY') 
      return 'ok'
    }else{
      return Promise.reject(new Error('fail'))
    }
  },


  async tokenGetUserInfo({commit}){
    const result = await reqTokenGetUserInfo()
    if(result.code === 200){
      commit('RECEIVEUSERINFO',result.data)
      return 'ok'
    }else{

      //校验失败了，代表token失效了
      commit('REMOVEUSERINFO')
      localStorage.removeItem('TOKEN_KEY') 
      
      return Promise.reject(new Error('fail'))
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