import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

import cards from './modules/cards'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    cards
  },
  plugins: [
    new VuexPersist({
      modules: ['cards']
    }).plugin
  ]
})

export default store