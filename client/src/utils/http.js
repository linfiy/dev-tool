function request (path, option = {}) {
  return new Promise((resolve, reject) => {
    const xhr = new window.XMLHttpRequest()
    xhr.addEventListener('readystatechange', function () {
      if (xhr.readyState !== 4) return
      resolve(xhr)
    })

    xhr.open(option.method || 'GET', path)
    option.method === 'POST' ? xhr.send(option.body) : xhr.send()
  })
}

function handleResponse (xhr) {
  try {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      return Promise.resolve(JSON.parse(xhr.responseText))
    } else {
      return Promise.reject(xhr.responseText)
    }
  } catch (e) {
    return Promise.reject(e + xhr.responseText)
  }
}

function get (path, params, returnXhr = false) {
  path += '?'
  for (var key in params) path += `${key}=${params[key]}&`
  path.substring(0, path.length - 1)
  return request(path, { method: 'GET' })
  .then(returnXhr ? xhr => xhr : handleResponse)
}

function post (path, params) {
  var postData = new FormData()
  for (var name in params) postData.append(name, params[name])
  return request(path, { method: 'POST', body: postData })
  .then(handleResponse)
}

export default {
  request, get, post
}
