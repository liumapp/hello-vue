import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  globalCount: 0
}

const mutations = {
  increment (state) {
    state.globalCount++
  }
}

export default new Vuex.Store({
  state,
  mutations
})
