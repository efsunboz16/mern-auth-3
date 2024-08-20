import mongoose from "mongoose"
import dotenv from 'dotenv';

dotenv.config()


// const MONGO_URL = "mongodb+srv://MERN-AUTH-3:1rBbIqZJtrKMH3Qj@first-project-1.zqgodfx.mongodb.net/mern-auth-3 "

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log("mongodb connected")
    } catch (error) {
        console.log("error connection to mongodb", error.message)
        process.exit(1) // 1 is failure , 0 is success
    }
}