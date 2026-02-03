import express from 'express';
import cors from 'cors';
import 'dotenv/config'

import connectDB from './config/mongodb.js';   
import Userrouter from './routes/Userroutes.js';

const PORT = process.env.PORT || 8080;

const app=express();
app.use(cors());
app.use(express.json());
await connectDB();


app.get('/',(req,res)=>{
   res.send('AI Image Generator Backend is running');
});

app.use('/api',Userrouter);

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));

