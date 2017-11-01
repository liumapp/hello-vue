import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  globalCount: 0,
  tmpData: {a: 1, b: 2},
  linkA: 'this is a',
  linkB: 'this is b',
  linkC: 'this is c',
  token: null
}

const mutations = {
  increment (state) {
    state.globalCount++
  },
  setToken (state, token) {
    state.token = token
  }
}

export default new Vuex.Store({
  state,
  mutations
})
