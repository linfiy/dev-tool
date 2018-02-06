import * as types from './mutation-types'
import * as protoActions from './action.proto'

const rest = {
  state: {
    origin: [],
    pIndex: -1,
    qIndex: -1,
    res: [],
    cacheVars: []
  },
  mutations: {
    [types.initOrigin] (state, o) {
      if (!Array.isArray(o) || o.length === 0) return
      state.origin = o
      state.res = []
      o.forEach(p => state.res.push([]))
      if (state.origin.length === 0) return
      state.pIndex = 0
      if (state.origin[0].length === 0) return
      state.qIndex = 0
    },

    [types.setCurrent] (state, { pIndex, qIndex }) {
      if (state.origin.length <= pIndex) return
      if (pIndex !== state.pIndex) {
        state.cacheVars = new Array(state.origin[pIndex].vars.length)
      }
      state.pIndex = pIndex
      if (state.origin[pIndex].quests.length <= qIndex && qIndex !== -1) return
      state.qIndex = qIndex
    },
    [types.setCacheVar] (state, { index, val }) {
      state.cacheVars[index] = val
    }
  },
  actions: {
    initialize ({ state, commit }, originJson) {
      commit(types.initOrigin, originJson)
    },
    createProject ({ state, commit }, name) {
      const o = [...state.origin, {
        name: name,
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
    editProto: protoActions.editProto,
    saveVar ({ state, commit }, { index, val }) {
      console.log('!!!!!!!!!!!!!!1')
      commit(types.setCacheVar, { index, val })
    }
  },
  getters: {
    curProject: state => state.origin[state.pIndex] || null,
    curQuest: state => state.origin[state.pIndex].quests[state.qIndex] || null,
    curQuestFormatData: state => {
      const quest = state.origin[state.pIndex].quests[state.qIndex] || null
      if (quest === null) return quest
      const vars = state.origin[state.pIndex].vars
      const paramSets = quest.parameter
      const result = {}
      const parents = [result]
      let toTopLen = [0]
      const params = [paramSets[0]]

      while (parents.length > 0) {
        const currParams = params[params.length - 1]
        if (toTopLen[toTopLen.length - 1] === currParams.length) {
          toTopLen.pop()
          parents.pop()
          params.pop()
          continue
        }

        const parent = parents[parents.length - 1]
        const curr = currParams[toTopLen[toTopLen.length - 1]]

        switch (curr.type) {
          case 1: // 普通
            parent[curr.name] = curr.value
            toTopLen[toTopLen.length - 1] += 1
            break
          case 12: // commonV
            if (vars[curr.value].type === 1) {
              parent[curr.name] = vars[curr.value].value
            } else if (vars[curr.value].type === 2) {
              parent[curr.name] = state.cacheVars[curr.value]
            }
            // vars[curr.value].value
            toTopLen[toTopLen.length - 1] += 1
            break
          case 13: // 嵌套
            const aimParams = quest.parameter[curr.value]
            parents.push(parent[curr.name] = {})
            toTopLen[toTopLen.length - 1] += 1
            toTopLen.push(0)
            params.push(aimParams)
            break
        }
      }
      return result
    }
  }
}

export default rest
