import { Router } from "express";

import { create, getAll, getById, removeById, update } from "../controllers/client/client_controller.js";

const router = Router();

router.get("/", async (req, res) => {
    const resultClients = await getAll();
    console.log("Action: /client route called from client_router.js");
    res.send(resultClients);
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    if(!id){
        return res.status(400).send({error: "Id not found"});
    }
    const resultClient = await getById(id);
    console.log("Action: /client/:id route called from client_router.js,id = " + id);
    res.send(resultClient);
});

//exportamos por default para llamarle como queramos despues a la hora de importarlo
export default router;