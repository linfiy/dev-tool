import * as types from './mutation-types'

const rest = {
  state: {
    lastPID: 0,
    url: '',
    commonVariable: [],
    origin: [],
    project: {},
    protocol: {}
  },
  mutations: {
    [types.initOrigin] (state, o) {
      if (!Array.isArray(o) || o.length === 0) return
      state.origin = o
      let maxPID = 0
      for (let i = 0; i < o.length; i++) {
        if (o[i].id > maxPID) maxPID = o[i].id
      }
      state.lastPID = maxPID
    },

    [types.setCurrent] (state, { originJson, idxProject, idxProtocol }) {
      const project = originJson[idxProject]
      state.project = project
      state.protocol = project.protocols[idxProtocol]
      state.url = project.url
      state.commonVariable.length = project.common.length
      for (let i = 0; i < project.common.length; i++) {
        state.commonVariable[i] = project.common[i].value
      }
    }
  },
  actions: {
    initialize ({ state, commit }, originJson) {
      commit(types.initOrigin, { originJson })
      commit(types.setCurrent, { originJson, idxProject: 0, idxProtocol: 0 })
    },
    createProject ({ state, commit }, name) {
      const o = [...state.origin, {
        id: ++state.lastPID,
        project: name,
        url: '',
        common: [],
        protocols: []
      }]
      commit(types.initOrigin, { originJson: o })
      commit(types.setCurrent, { originJson: o, idxProject: o.length, idxProtocol: 0 })
    },
    deleteProject ({ state, commit }, pid) {
      const o = state.origin.filters(p => p.id !== pid)
      if (o.length === state.origin.length) return
      commit(types.initOrigin, { originJson: o })
      if (pid !== state.project.id) return
      commit(types.setCurrent, { originJson: o, idxProject: 0, idxProtocol: 0 })
    }
  },
  getters: {

  }
}

export default rest
