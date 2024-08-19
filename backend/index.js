import express from 'express';
import { connectDB } from './db/connectDB.js';
import dotenv from 'dotenv';
import authRoute from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import cors from "cors";
// import crypto from "crypto";
// const hash = crypto.createHash('sha256').update('veri').digest('hex');

dotenv.config();


const app = express();
const PORT = process.env.PORT;

app.use(cors({ origin: "http://localhost:5173", credentials: true }))
app.use(express.json());
app.use(cookieParser()); // allows us to parse incoming cookies


app.use("/api/auth", authRoute)

app.listen(PORT, () => {
    connectDB()
    console.log("server is running")
})