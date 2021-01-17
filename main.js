var username = 'admin'
var password = 'password'
const host_getter = require("./host_getter")
callback = function(response) {
    var str = ''
    response.on('data', function (chunk) {
      str += chunk;
    });
  
    response.on('end', function () {
      console.log(JSON.stringify(str));
      return str;
    });
  }

options = host_getter.options_setter('51.145.179.67','/api/v2/inventories/','8052',`${username}:${password}`)
host_getter.get_request(options,callback);
