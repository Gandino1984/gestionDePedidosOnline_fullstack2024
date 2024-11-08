import { Router } from "express";

import { create, getAll, getById, removeById, updateById } from "../controllers/client_controller.js";

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