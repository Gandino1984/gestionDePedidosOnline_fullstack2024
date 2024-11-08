import { Router } from "express";

import clientApiRouter from "./client_api_router.js";

const router = Router();

router.use("/client", clientApiRouter);

export default router;