import express from 'express'; 
import dotenv from 'dotenv';

import router from './routers/router.js';

dotenv.config();

const app = express();

app.use("/", router);

app.listen(process.env.APP_PORT, () => {
  console.log(`SERVER RUNNING ON PORT = ${process.env.APP_PORT}`)
})