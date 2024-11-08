async function getAll() {
    console.log("Action: Get all clients. Function getAll() called from: client_router.js");
    return"Action: Get all clients. Function getAll() called from: client_router.js";
}

async function getById(id) {
    console.log("Action: Get clients by id. Function getById() called from: client_router.js");
    return `Action: Get clients by id. Function getById() called from: client_router.js. Id = ${id}`;
}

async function create(clientData) {
    const {id_client, name_client, pass_client, location_client } = clientData;
    return `Create client: Data = ${id_client} , ${name_client} , ${pass_client} , ${location_client}`
}   

async function update(id, clientData) {
    const {id_client, name_client, pass_client, location_client } = clientData;
    return `Update client: Data = ${id_client} , ${name_client} , ${pass_client} , ${location_client}`
}

async function removeById(id) {
    return `Delete client by id. Id = ${id}`
}

export { getAll, getById, create, update, removeById }

