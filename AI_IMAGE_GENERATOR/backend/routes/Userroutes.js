import express from "express";

import {login, registeruser, Usercredit} from "../Controllers/Usercontroller.js";
import authMiddleware from "../Middlewares/auth.js";

let Userrouter=express.Router();

Userrouter.post('/register',registeruser)
Userrouter.post('/login',login)
Userrouter.get('/credits',authMiddleware,Usercredit)

export default Userrouter;