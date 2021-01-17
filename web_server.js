var http = require('http'); // Import Node.js core module

var server = http.createServer(
    function (req, res) {   //create web server
        if (req.url == '/') { //check the URL of the current request
            
            // TODO: SIMPLE PAGE EXPLAINING DBA AUTOMATION

            // set response header
            res.writeHead(200, { 'Content-Type': 'text/html' }); 
            
            // set response content    
            res.write('<html><body><p>This is home Page.</p></body></html>');
            res.end();
        
        }
        else if (req.url == "/login") {
            // TODO: SHOW LOGIN PAGE
            // TODO: HENDLE LOGINS
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<html><body><p>This is login Page.</p></body></html>');
            res.end();
        
        }
        else if (req.url == "/clusters") {
            // TODO: CHECK PERMISSIONS
            // TODO: PAGE THAT SHOWS ALL THE CLUSTERS AND  -> SENDING REQUEST TO THE INVENTORY TO GET THE HOSTS AND CLUSTERS 
            // AND SHOW THEM
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<html><body><p>This is clusters Page.</p></body></html>');
            res.end();
        
        }
        else
            res.end('Invalid Request!');

    });

server.listen(8080); //6 - listen for any incoming requests

console.log('Node.js web server at port 8080 is running..')