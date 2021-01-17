const { promises } = require('fs');

module.exports = {

    options_setter: function(host,path,port,auth)
{
  
    let options = {
        host: host,
        path: path,
        port: port,
        auth: auth//`${username}:${password}` 
        
      };

      // setting the local options with the setter options
      return options;
},


get_request: function(options)
{
    return new Promise(function(resolve, reject) 
    { 
        let body = "";
        let http = require('http');
        let req = http.request(options, function(response) 
        {
            
            response.on('data', function (chunk) 
            {
            body += chunk;
            });
        
            response.on('end', function () 
            {
                try {
                    //console.log("here")
                    body = JSON.parse(body);
                    //console.log(body)
                } catch(e) {
                    console.log("here");
                    console.log(body);
                    reject(e);
                }
                
                resolve(body);
            })
        });
        // reject on request error
        req.on('error', function(err) {
            // This is not a "Second reject", just a different sort of failure
            reject(err);
        });
        req.end();
    });
}
}