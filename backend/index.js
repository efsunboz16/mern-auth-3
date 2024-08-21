import express from 'express';
import { connectDB } from './db/connectDB.js';
import dotenv from 'dotenv';
import authRoute from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import cors from "cors";
import path from "path";
// import crypto from "crypto";
// const hash = crypto.createHash('sha256').update('veri').digest('hex');

dotenv.config();


const app = express();
const PORT = process.env.PORT;
const _dirname = path.resolve();

app.use(cors({ origin: "http://localhost:5173", credentials: true }))
app.use(express.json());
app.use(cookieParser()); // allows us to parse incoming cookies


app.use("/api/auth", authRoute)

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(_dirname, "/frontend/dist")))

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
    })
}

app.listen(PORT, () => {
    connectDB()
    console.log("server is running")
})