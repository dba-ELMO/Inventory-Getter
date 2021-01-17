module.exports = {

    options_setter: function(host,path,port,auth)
{
  
    var options = {
        host: host,
        path: path,
        port: port,
        auth: auth//`${username}:${password}` 
        
      };

      // setting the local options with the setter options
      return options;
},


get_request: function(options, callback)
{
    var http = require('http');
    var req = http.request(options, callback);
    req.end();

}
    
}
