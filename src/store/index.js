import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 保存状态
  state: {
    counte:1000
  },
  mutations: {
    //定义方法
    increment(state){
      state.counte++
    },
    decrement(state){
      state.counte--
    }
  },
  actions: {
  },
  modules: {
  },
  getters:{
    powCount(state){
      return state.counte*state.counte
    }
  }
})
