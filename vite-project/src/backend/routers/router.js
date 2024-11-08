import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("GET request to main project route")  
  })


export default router;