import express from "express";

import {login, registeruser} from "../Controllers/Usercontroller.js";

let Userrouter=express.Router();

Userrouter.post('/register',registeruser)
Userrouter.post('/login',login)

export default Userrouter;