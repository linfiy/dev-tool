var liveServer = require('live-server')
var config = require('./config')


function main (req, res, next) {
  next()
}

var params = config.liveServer

params.middleware = [main]

liveServer.start(params)
