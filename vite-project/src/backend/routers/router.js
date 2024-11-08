import { Router } from "express";

import clientRouter from "./client_router.js";

const router = Router();

router.get("/", (req, res) => {
    console.log("Action: / route called from router.js");
    res.send("GET request to main project route")  
  })

router.use("/client", clientRouter);

export default router;