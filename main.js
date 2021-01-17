var username = 'admin'
var password = 'password'
const host_getter = require("./host_getter")
const post_tester = require("./post_tester")


async function handle_request(){
    options =  host_getter.options_setter('51.145.179.67','/api/v2/inventories/','8052',`${username}:${password}`);
    response_output =  await host_getter.get_request(options);
    console.log(response_output);
    console.log(response_output.results[0].related);
}



handle_request() 