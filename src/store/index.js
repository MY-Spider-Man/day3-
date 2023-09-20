import { createStore } from 'vuex'
import persistedstate from "vuex-persistedstate";
export default createStore({
  state: {
    goodss: []
  },
  getters: {
  },
  mutations: {
    add(state, val) {
      // console.log(val);
      state.goodss.push(val)
    },
   
    del(state) {
      state.goodss = state.goodss.filter(item => item.basicInfo.limitation === false)
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [persistedstate()]
})
