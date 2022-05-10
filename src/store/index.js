import Vue from 'vue'
import Vuex from 'vuex'

import cards from './modules/cards'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    cards
  }
})

export default store