var os = require('os')

function getLocalIP() {
  var ip
  ifaces=os.networkInterfaces();
  for (var dev in ifaces) {
    
    ifaces[dev].forEach(function(details, alias){
      if ((details.family=='IPv4') && (details.internal == false)) {
        ip = details.address;
      }
    });
  }
  return ip;
}

module.exports = {
  getLocalIP: getLocalIP
}