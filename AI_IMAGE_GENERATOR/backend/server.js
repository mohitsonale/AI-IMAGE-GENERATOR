import express from 'express';
import cors from 'cors';
import 'dotenv/config'

import connectDB from './config/mongodb.js';   
import Userrouter from './routes/Userroutes.js';
import imageRouter from './routes/ImageRoutes.js';

const PORT = process.env.PORT || 8080;

const app=express();
app.use(cors({
   
   origin: "http://localhost:5173",
  credentials: true,
  allowedHeaders: ["Content-Type", "token"]
}));
app.use(express.json());
await connectDB();


app.get('/',(req,res)=>{
   res.send('AI Image Generator Backend is running');
});

app.use('/api/user',Userrouter);
app.use('/api/image',imageRouter);


app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));

