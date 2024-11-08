//datos de cliente falseados hasta tener modelo
const clients = [
    {id_client: 1, name_client: "client1", pass_client: "pass1", location_client: "location1"},
    {id_client: 2, name_client: "client2", pass_client: "pass2", location_client: "location2"},
    {id_client: 3, name_client: "client3", pass_client: "pass3", location_client: "location3"},
]

async function getAll() {
    console.log("Action: Get all clients. Function getAll() called from: client_controller.js");
    return {data:clients};
}

async function getById(id) {
    const client = clients.find(client => client.id_client == id);
    if(!client){
        return {error: "Client not found"};
    }
    console.log("Action: Get clients by id. Function getById() called from: client_controller.js");
    return {data: client};
}

async function create(clientData) {
    const {id_client, name_client, pass_client, location_client } = clientData;
    const maxId = Math.max(...clients.map(client => client.id_client));
    const newClient = {id_client: maxId + 1, name_client, pass_client, location_client};
    console.log("Action: Create client. Function create() called from: client_controller.js");
    return {data: newClient};
}   

async function update(id, clientData) {
    const {id_client, name_client, pass_client, location_client } = clientData; 
    const client = clients.find(client => client.id_client == id);
    if(!client){
        return {error: "Client could not be modified"};
    }
    if(client.name_client){
        client.name_client = name_client;    
    }
    if(client.pass_client){
        client.pass_client = pass_client;    
    }
    if(client.location_client){
        client.location_client = location_client;    
    }
    console.log("Action: Update client. Function update() called from: client_controller.js");
    return {data: client};
}

async function removeById(id) {
    const clientIndex = clients.findIndex(client => client.id_client == id);
    if(clientIndex == -1){
        return {error: "Client could not be deleted"};
    }
    const deletedClient = clients.splice(clientIndex, 1);
    console.log("Action: Remove client. Function removeById() called from: client_controller.js. Client removed = " + id);
    return {data: deletedClient};
}

export { getAll, getById, create, update, removeById }

