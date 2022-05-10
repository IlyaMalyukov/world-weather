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
    updateCardData(state, newData) {
      let index = state.cards.findIndex(i => i.id === newData.id)
      let card = state.cards[index]
      console.log(newData)
      card.weather[0].main = newData.weather[0].main
      card.main.temp = newData.main.temp
      card.main.humidity = newData.main.humidity
      card.dt = newData.dt
    },
    deleteCard(state, index) {
      state.cards.splice(index, 1)
    }
  },
  actions: {
    addCard({commit, state}, cityName) {
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
        const card = state.cards.find(i => i.name === cityName)
        if (!card) {
          commit('saveCards', data.data)
        } else {
          commit('updateCardData', data.data)
        }
      })
    },
    updateCard({dispatch, state}, cardId) {
      const card = state.cards.find(i => i.id === cardId)
      dispatch('addCard', card.name)
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