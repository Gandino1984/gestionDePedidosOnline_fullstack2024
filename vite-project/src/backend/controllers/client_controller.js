async function getAll() {
    return "Get all clients"
}

async function getAById(id) {
    return `Get all clients by id. Id = ${id}`;
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

export { getAll, getAById, create, update, removeById }

