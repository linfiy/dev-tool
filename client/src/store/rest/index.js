const rest = {
  state: {
    commonVariable: {

    },
    intForTest: 1
  },
  mutations: {
    incrementInt (state) {
      state.intForTest++
    }
  },
  actions: {
    increazing ({ state, commit }) {
      commit('incrementInt')
    }
  },
  getters: {

  }
}

export default rest
