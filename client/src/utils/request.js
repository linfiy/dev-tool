/*
* company : 北京兔卡科技有限公司
 * date    : 2016.8.11
 * desc    : http
 * depend  : es6
 * version : 3.0.0
 * ----------------------------------------------------------------------
 * usage:
 *  @get             : request.<pathMethod>(actExparams{Object}, [rootExParams{Object}]) => promise
 *  @post            : request.post.<pathMethod>(actExparams{Object}, [rootExParams{Object}]) => promise
 *  @setRootExParams : request.setRootExParams(rootExparams{Object}) => undefined
 *
 * ----------------------------------------------------------------------
 * 3.*   调用setRootExParams方法可以单独配置rootParams, 或者可以在方法后多传一个参数
 * 2.1.* 后端模块对应的路径要到 common.js 中配置
*/

const TEST_HOST = 'test.gfplay.cn'
const pathMethods = commonValues.pathMethods || [
  ['user', 'user_php70', TEST_HOST],
  ['agent', 'mahjong/game_agent/big_agent', TEST_HOST]
]
const env = commonValues.env || 'development'

let rootParams = { 'randkey': '', 'c_version': '0.0.1' }
let actExParamsKey = {}

function generateRootParameter (path, actExParams) {

  let actParams = { mod: path === 'user' ? 'User' : 'Business', platform: 'gfplay' }

  Object.assign(actParams, actExParamsKey)
  Object.assign(actParams, actExParams)

  const actParamsString = encodeURIComponent(JSON.stringify(actParams))

  return Object.assign(rootParams, { parameter: actParamsString })
}

function ajaxAndReturnData (path, option = {}) {
  return new Promise((resolve, reject) => {
    const req = new window.XMLHttpRequest()

    req.open(option.method || 'GET', path)
    option.method === 'POST' ? req.send(option.body) : req.send()

    req.onreadystatechange = function () {
      if (req.readyState !== 4) return
      const res = JSON.parse(req.responseText)

      if ((req.status >= 200 && req.status <= 300 || req.status === 304) &&
        (res.code === 0 && res.sub_code === 0)) {
          resolve(res)
        }
      else {
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

function renderGetMethod (path, host) {
  return function (actExParams, rootExParams) {
    const rootParams = generateRootParameter(path, actExParams)
    let rootParamsString = ''
    let ran = ''
    rootExParams !== undefined && Object.assign(rootParams, rootExParams)
    return ajaxAndReturnData(requestString)
  }
}

function renderPostMethod (path, host) {
  return function (actExParams, rootExParams) {
    let rootParams = generateRootParameter(path, actExParams)
    const formData = new window.FormData()

    rootExParams !== undefined && Object.assign(rootParams, rootExParams)

    for (var key in rootParams) {
      formData.append(key, rootParams[key])
    }

    const requestString = `http://${host}/${path}/index.php`

    return ajaxAndReturnData(requestString, { method: 'POST', body: formData })
  }
}

let request = {
  post: {}
}

pathMethods.map(([name, path, host]) => {
  request[name] = renderGetMethod(path, host)
  request.post[name] = renderPostMethod(path, host)
})

export default request
