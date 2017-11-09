import Vue from 'vue'
import Vuex from 'vuex'
import rest from './rest'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: { rest }
})

export default store
