const getProto = (proto, pos) => {
  while (pos.length > 0) {
    proto = proto[pos.shift()]
  }
  return proto
}

export const delProto = ({ state, commit }, position) => {
  if (!Array.isArray(position)) return
  // 可以删的都是数组项所以都是 splice
  try {
    const delIndex = position.pop()
    const editProto = getProto(state.origin, position)
    editProto.splice(delIndex, 1)
  } catch (e) { console.log(e) }
}

export const editProto = ({ state, commit }, { position, type, newName }) => {
  if (!Array.isArray(position)) return
  try {
    const editProto = getProto(state.origin, position)
    editProto[type] = newName
  } catch (e) { console.error(e) }
}

export const addProto = ({ state, commit }, { position, data }) => {
  if (!Array.isArray(position)) return
  try {
    const editProto = getProto(state.origin, position)
    editProto.push(data)
  } catch (e) { console.log(e) }
}

