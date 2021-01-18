let ansible_url = '51.145.179.67'
let inventory_id = 2
let path_inventory = '/api/v2/inventories/'
let path_inventory_groups = '/api/v2/inventories/'+inventory_id+'/groups/'
let path_inventory_hosts = '/api/v2/inventories/'+inventory_id+'/groups/'
let ansible_port = '8052'
let username = 'admin'
let password = 'password'
let auth = `${username}:${password}`

var results = '';


const { mainModule } = require("process")
const host_getter = require("./host_getter")

/**
 * Group class to include all the hosts 
 */
class Group {
    
    constructor(id, name)
    {
        this.id = id;
        this.name = name;
        this.host_list = [];
        this.path_group_allhosts = '/api/v2/groups/'+id+'/all_hosts/'
    }

    set hosts(host)
    {
        this.host_list.push(host)
    }

    get hosts()
    {
        return this.host_list;
    }
}


/**
 * This function get the results from the awx api 
 * @param {*} ansible_url 
 * @param {*} path - path for the api 
 * @param {*} ansible_port 
 * @param {*} auth - username and password 
 */
async function handle_request(ansible_url,path,ansible_port, auth )
{
    options =  host_getter.options_setter(ansible_url,path,ansible_port, auth);
    res =  await host_getter.get_request(options);
    //console.log(res);
    return res;
}


async function getGroupDetails(group_name)
{
    handle_request(ansible_url,path_inventory,ansible_port, auth) 
    var res = await handle_request(ansible_url,path_inventory_groups,ansible_port, auth) 
    //console.log(res.results)
    var results = res.results;
    let group_arr = [];
    let group = '';
    
    results.forEach(element => { 
        if(element.name == group_name)
        {
            group = new Group(element.id ,element.name)
            console.log('Found '+group.name +' '+group.id)     
        }

        //else
            //console.log(element.name)
    });


    var g = await getHosts(group)
}


async function getHosts(group)
{

        console.log('Group name is '+group.name+' ID is '+ group.id)
        var res = await handle_request(ansible_url,group.path_group_allhosts,ansible_port, auth) 
        group.hosts = res.results
        //console.log(group.host_list)
        group.host_list[0].forEach( element => {
            console.log(element.name);
        })
        //console.log(res.results)
        console.log('---------------------------------------------------')
   // } )

}


//handle_request(ansible_url,path_inventory,ansible_port, auth) 
getGroupDetails('maayan')