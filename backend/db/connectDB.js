import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log("mongodb connected")
    } catch (error) {
        console.log("error connection to mongodb", error.message)
        process.exit(1) // 1 is failure , 0 is success
    }
}