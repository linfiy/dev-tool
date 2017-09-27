function post (req, res, next) {
  
  if (req.method == 'POST') {
    var body = '';
    req.on('data', function (data) {
       body += data;
    });
    req.on('end', function () {
       res.writeHead(200, {'Content-Type': 'text/html'});
       res.end('post received');
    });
  }
  else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('error');
    next()
  }
        
}


module.exports = {
  post: post
}