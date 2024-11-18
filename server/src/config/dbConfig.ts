import mongoose from "mongoose";

const connectDB =async ()=>{
    try{
        const connect = await mongoose.connect(`${process.env.CONNECTION_STRING}`)
        console.log('MongoDB connected')
    }catch(err){
        console.log(err);
    }
}

export default connectDB;