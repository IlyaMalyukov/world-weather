const cards = {
  state: {
    cards: []
  },
  mutations: {
    saveCards(state, cards) {
      state.cards = cards
    },
  },
  actions: {
    setCards({commit}) {
      let cards = []
      commit('saveCards', cards)
    }
  },
  getters: {
    cards: (state) => state.cards,
  }
}

export default cards