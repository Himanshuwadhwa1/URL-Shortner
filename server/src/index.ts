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
const allowedOrigins = ['https://url-shortner-pi.vercel.app'];

app.use(cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST'],
    credentials: true,
}));
app.use('/api',router);
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})