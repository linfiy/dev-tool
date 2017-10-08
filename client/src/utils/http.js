function request (path, option = {}) {
  return new Promise((resolve, reject) => {
    const xhr = new window.XMLHttpRequest()
    xhr.addEventListener('readystatechange', function () {
      if (xhr.readyState !== 4) return
      try {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          resolve(JSON.parse(xhr.responseText))
        } else {
          reject(xhr.responseText)
        }
      } catch (e) {
        reject(e + xhr.responseText)
      }
    })

    xhr.open(option.method || 'GET', path)
    option.method === 'POST' ? xhr.send(option.body) : xhr.send()
  })
}

function get (path, params) {
  path += '?'
  for (var key in params) path += `${key}=${params[key]}&`
  path.substring(0, path.length - 1)
  return request(path, { method: 'GET' })
}

function post (path, params) {
  var postData = new FormData()
  for (var name in params) postData.append(name, params[name])
  return request(path, { method: 'POST', body: postData })
}

export default {
  request, get, post
}
