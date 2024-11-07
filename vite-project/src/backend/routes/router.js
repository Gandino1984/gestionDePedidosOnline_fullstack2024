import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("GET request to main project route")  
  })

router.get("/search", (req, res) => {
   const query = req.query.q;
   res.send(`GET request to search route with query: ${query}`)
  })

export default router;