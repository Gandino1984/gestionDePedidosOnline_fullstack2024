async function getAll() {
    return "Get all clients"
}

async function getAById(id) {
    return `Get all clients by id. Id = ${id}`;
}

async function create() {
    return "Create new client"
}   

async function update(id, clientData) {
    const {id_client, name_client, pass_client, location_client } = clientData;
    return `Update client: Data = ${id_client} , ${name_client} , ${pass_client} , ${location_client}`
}

