import express from 'express'; 
import dotenv from 'dotenv';

dotenv.config();

const APP_PORT = process.env.APP_PORT;

const app = express();

app.get("/", (req, res) => {
  res.send("GET request to main project route")  
})

app.listen(APP_PORT, () => {
  console.log(`SERVER RUNNING ON PORT = ${APP_PORT}`)
})