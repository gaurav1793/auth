import express from 'express'
import UserRouter from './Routes/UserRoutes.js';
import connectDb from './Db/Db.js'
import {config} from 'dotenv';
const app = express()

config();
connectDb();

app.use(express.json());
app.use('/User',UserRouter);
app.listen(3000,()=>{
    console.log("server is started on port :3000");
})