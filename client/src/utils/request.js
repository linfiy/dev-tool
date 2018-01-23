const env = 'development'
function ajaxAndReturnData (path, option = {}) {
  return new Promise((resolve, reject) => {
    const req = new window.XMLHttpRequest()

    req.open(option.method || 'GET', path)
    option.method === 'POST' ? req.send(option.body) : req.send()

    req.onreadystatechange = function () {
      if (req.readyState !== 4) return
      const res = JSON.parse(req.responseText)

      if ((req.status >= 200 && req.status <= 300 || req.status === 304) && (res.code === 0 && res.sub_code === 0)) {
        resolve(res)
      } else {
        reject(res)
      }
    }
  })
  .then(res => {
    env === 'development' && console.info('request data:', JSON.parse(JSON.stringify(res.data)), ` => ${res.action}`)
    return res.data
  })
  .catch(error => {
    env === 'development' && console.warn(error)
    return Promise.reject(error)
  })
}

function setParams (url, rootParams, parameter) {
  var rootParamsString = ''
  var rootPar = rootParams
  var parameterString = encodeURIComponent(JSON.stringify(parameter))
  Object.assign(rootPar, { parameter: parameterString })
  for (let key in rootPar) {
    rootParamsString += `&${key}=${rootParams[key]}`
  }
  rootParamsString = rootParamsString.substring(1)
  var requestString = `${url}?${rootParamsString}`

  return ajaxAndReturnData(requestString)
}

let request = {}

request.get = setParams

export default request
