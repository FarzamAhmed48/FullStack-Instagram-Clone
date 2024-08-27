import mongoose from "mongoose";
const dbConnect =async()=>{
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB Connected successfully")
    } catch (error) {
        console.log(error)   
    }
}

export default dbConnect;