import axios from 'axios'
//import dotenv from 'dotenv'
//dotenv.config()

const cards = {
  state: {
    cards: []
    // ключ - process.env.API_KEY
  },
  mutations: {
    saveCards(state, card) {
      state.cards.push(card)
    },
    deleteCard(state, index) {
      state.cards.splice(index, 1)
    }
  },
  actions: {
    addCard({commit}, cityName) {
      axios({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather',
        params: {
          units: 'metric',
          lang: 'en',
          APPID: '557c6cd48e0aaa226bf5aef775d147dd',
          q: cityName}
        })
      .then(data => {
        commit('saveCards', data.data)
      })
    },
    removeCard({commit, state}, cardId) {
      const index = state.cards.findIndex(i => i.id === cardId)
      commit('deleteCard', index)
    }
  },
  getters: {
    cards: (state) => state.cards,
  }
}

export default cards