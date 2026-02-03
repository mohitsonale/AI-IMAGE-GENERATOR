import express from "express";
import authMiddleware from "../Middlewares/auth.js";
import imagegenerate from "../Controllers/Imagegenerate.js";

let imageRouter=express.Router();

imageRouter.post('/generate-image',authMiddleware,imagegenerate)

export default imageRouter;