import mongoose from "mongoose";

const connectMongoDB = async ()=>{
    mongoose.set("strictQuery", false);
    const connected = await mongoose.connect(process.env.MONGO_DB_CONNECTION!)
    console.log(`Connected to DB`);
    
}
export default connectMongoDB

