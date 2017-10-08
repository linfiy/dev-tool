const Fontmin = require('fontmin')
const multiparty = require('multiparty')
const path = require('path')
const fs = require('fs')

function post (req, res, next) {
  if (req.method != 'POST') return next()

  const form  = new multiparty.Form()
  const downloadDir = 'download/'
  form.autoFiles = true
  form.uploadDir = path.resolve(__dirname, `../../public/${downloadDir}`)
  
  form.parse(req, function (err, fields, files) {
    
    if (err) return next()
    // 
    const type = fields.type[0]
    const filterText = fields.filterText[0]
    const file = files.fontFile[0]


    const filePath = file.path.replace(/[-\w]+.ttf$/, '')

    var fontmin = new Fontmin()
    .src(file.path)
    .use(Fontmin.glyph({
      text: filterText
    }))
    .dest(filePath) 
    
    fontmin.run(function (err, files, stream) {
      if (err) return next()

      fs.renameSync(file.path, filePath + file.originalFilename);

      const conf = require('../config').liveServer
      res.writeHead(200, { 'content-type': 'text/plain' })
      res.end(JSON.stringify({ 
        message: '上传成功', 
        download: `http://${conf.host}:${conf.port}/${downloadDir}${file.originalFilename}`
      }))
    })
  })
        
}


module.exports = {
  post: post
}