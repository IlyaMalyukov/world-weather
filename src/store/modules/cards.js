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
        commit('saveCards', data)
      })
    }
  },
  getters: {
    cards: (state) => state.cards,
  }
}

export default cards