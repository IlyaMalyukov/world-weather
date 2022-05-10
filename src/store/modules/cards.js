import axios from 'axios'

const cards = {
  state: {
    cards: []
  },
  mutations: {
    saveCards(state, card) {
      card.created = new Date()
      state.cards.push(card)
    },
    updateCardData(state, newData) {
      let index = state.cards.findIndex(i => i.id === newData.id)
      let card = state.cards[index]
      card.weather[0].main = newData.weather[0].main
      card.main.temp = newData.main.temp
      card.main.humidity = newData.main.humidity
      card.created = new Date()
    },
    deleteCard(state, index) {
      state.cards.splice(index, 1)
    }
  },
  actions: {
    addCard({commit, state}, cityName) {
      axios({
        method: 'GET',
        url: process.env.VUE_APP_API_BASE_URL,
        params: {
          units: 'metric',
          lang: 'en',
          APPID: process.env.VUE_APP_API_KEY,
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