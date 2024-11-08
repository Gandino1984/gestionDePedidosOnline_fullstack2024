import { Router } from "express";

import clientApiRouter from "./client_api_router.js";
import shopApiRouter from "./shop_api_router.js";

const router = Router();

router.use("/client", clientApiRouter);

router.use("/shop", shopApiRouter);

export default router;