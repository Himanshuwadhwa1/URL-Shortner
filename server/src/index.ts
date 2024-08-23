import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/dbConfig";
import router from "./routes/shortUrl"

dotenv.config();
connectDB();
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin: "http://localhost:4000",
    credentials:true,
}))
app.use('/api',router);
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})