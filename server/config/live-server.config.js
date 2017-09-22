var util = require('../util')

module.exports = {
  port: 3000,               //端口号
  host: util.getLocalIP(),  //本地局域网IP
  root: './public',
  // open: false,             // 自动打开
}

/* 
  更多配置参考：
  https://github.com/tapio/live-server
*/

