import express from "express";
import imagegenerate from "../Controllers/Imagegenerate.js";
import authMiddleware from "../Middlewares/auth.js";

let imageRouter=express.Router();

console.log("image router loaded");

imageRouter.post('/generate-image',authMiddleware,imagegenerate)

export default imageRouter;