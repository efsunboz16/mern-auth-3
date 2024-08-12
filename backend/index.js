import express from 'express';
import { connectDB } from './db/connectDB.js';
import dotenv from 'dotenv';
import authRoute from './routes/auth.route.js'

dotenv.config();


const app = express();
const PORT = process.env.PORT;


app.use(express.json());


app.use("/api/auth", authRoute)

app.listen(PORT, () => {
    connectDB()
    console.log("server is running")
})