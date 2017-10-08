export function setParams (rootParams, parameter) {
  var rootPar = rootParams
  var parameterString = encodeURIComponent(JSON.stringify(parameter))
  Object.assign(rootPar, { parameter: parameterString })
  return rootPar
}
