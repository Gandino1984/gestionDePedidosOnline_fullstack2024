import { Router } from "express";

import { create, getAll, getById, removeById, update } from "../controllers/client/client_controller.js";

const router = Router();

router.get("/", async (req, res) => {
    const resultClients = await getAll();
    res.send(resultClients);
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const resultClient = await getById(id);
    res.send(resultClient);
});

//exportamos por default para llamarle como queramos despues a la hora de importarlo
export default router;