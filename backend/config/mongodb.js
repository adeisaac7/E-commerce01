import mongoose from "mongoose";

const connectDB = async () => {

    try{
        console.log(process.env.MONGO_URI)
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database Connected!");
        
    } catch (error) {
    console.error("Error connecting to the database:", error.message);
    process.exit(1);
}

   
};

export default connectDB