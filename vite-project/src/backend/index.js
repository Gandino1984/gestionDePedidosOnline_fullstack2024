import express from 'express'; 

const APP_PORT = 3001;

const app = express();

app.get("/", (req, res) => {
  res.send("GET request to main project route")  
})

app.listen(APP_PORT, () => {
  console.log(`SERVER RUNNING ON PORT = ${APP_PORT}`)
})