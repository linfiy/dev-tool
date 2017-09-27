var liveServer = require('live-server')
var config = require('./config')
var url = require('url')
var zipfont = require('./zipFont')

function main (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "Origin, Content-Type, Accept")
  
  var path = url.parse(req.url).pathname

  if (path == '/zipfont') {
    zipfont.post(req, res, next)
    // 处理上传文件
  }
  else {
    next()
  }
}

var params = config.liveServer

params.middleware = [main]

liveServer.start(params)
