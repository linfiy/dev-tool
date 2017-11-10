import * as types from './mutation-types'
import * as protoActions from './action.proto'

const rest = {
  state: {
    origin: [],
    pIndex: -1,
    qIndex: -1
  },
  mutations: {
    [types.initOrigin] (state, o) {
      if (!Array.isArray(o) || o.length === 0) return
      state.origin = o
      if (state.origin.length === 0) return
      state.pIndex = 0
      if (state.origin[0].length === 0) return
      state.qIndex = 0
    },

    [types.setCurrent] (state, { pIndex, qIndex }) {
      if (state.origin.length <= pIndex) return
      state.pIndex = pIndex
      if (state.origin[pIndex].quests.length <= qIndex && qIndex !== -1) return
      state.qIndex = qIndex
    }
  },
  actions: {
    initialize ({ state, commit }, originJson) {
      commit(types.initOrigin, originJson)
    },
    createProject ({ state, commit }, name) {
      const o = [...state.origin, {
        project: name,
        url: '',
        vars: [],
        quests: []
      }]
      commit(types.initOrigin, o)
      commit(types.setCurrent, { pIndex: o.length - 1, qIndex: -1 })
    },
    deleteProject ({ state, commit }, pIndex) {
      const o = [...state.origin]
      o.splice(pIndex, 1)
      if (o.length === state.origin.length) return
      commit(types.initOrigin, o)
      commit(types.setCurrent, { pIndex: o.length - 1, qIndex: -1 })
    },
    setCurrentProject ({ state, commit }, { pIndex, qIndex = 0 }) {
      commit(types.setCurrent, { pIndex, qIndex })
    },

    setCurrentQuest ({ state, commit }, qIndex) {
      commit(types.setCurrent, { pIndex: state.pIndex, qIndex })
    },
    addProto: protoActions.addProto,
    delProto: protoActions.delProto,
    editProto: protoActions.editProto
  },
  getters: {
    curProject: state => state.origin[state.pIndex] || null,
    curQuest: state => state.origin[state.pIndex].quests[state.qIndex] || null
  }
}

export default rest
