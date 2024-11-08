import clientController from "./client_controller.js";

async function getAll(req, res) {
    const {error, data} = await clientController.getAll();
    res.json({error, data});
}

async function getById(req, res) {
    const id = req.params.id;
    const {error, data} = await clientController.getById(id);
    res.json({error, data});
}


export {
    getAll,
    getById
}

export default {
    getAll,
    getById
}