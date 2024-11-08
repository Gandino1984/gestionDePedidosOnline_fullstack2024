import { Router } from "express";

import clientApiController from "../controllers/client/client_api_controller.js";

const router = Router();

router.get("/", clientApiController.getAll);
router.get("/create", clientApiController.create);
router.get("/:id", clientApiController.getById);

// router.post("/", clientApiController.create);

export default router;