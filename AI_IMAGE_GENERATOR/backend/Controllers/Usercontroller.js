
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Usermodel from "../model/Usermodel.js";


let registeruser=async(req,res)=>{

    try {

        let {name,email,password}=req.body;

    if(!name || !email || !password){
        return res.send({success:false, message:"Mising Details"}); 
    }

    let salt=await bcrypt.genSalt(10);
    let hashpassword=await bcrypt.hash(password,salt);

    let newuser=new Usermodel({
        name,
        email,
        password:hashpassword
    })

    await newuser.save();

    let token=jwt.sign({id:newuser._id},process.env.JWT_SECRET,{expiresIn:'7d'})

    res.json({
        success:true,
        token,
        newuser:{name:newuser.name}
    })

    } catch (error) {

        console.log(error)
        res.json({success:false, message:"Registration Failed", error:error.message})
        
    }
}

let login=async(req,res)=>{

     let {email,password}=req.body;

        if(!email || !password){
            return res.send({success:false,message:"Wrong email and password"})
        }

    try {

        let user=await Usermodel.findOne({email});

        if(!user){
            return res.send({success:false,message:"User not found"})
        }

        let isMatch=await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.send({success:false,message:"Invalid credentials"})
        }

        let token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'})

        res.json({
            success:true,
            token,
            user:{name:user.name}
        })
       

        
        
    } catch (error) {

        res.send({success:false,message:"Login failed",error:error.message })
        
    }
}

let Usercredit=async(req,res)=>{

    try {

        const userId = req.user.id;  

        let user=await Usermodel.findById(userId) 

        res.json({success:true,credits:user.creditBalance,user:{name:user.name}})
        
    } catch (error) {

        console.log(error)
        

        res.json({success:false,message:"Unable to fetch user credits", error:error.message})
        
    }
}

export {registeruser,login,Usercredit};
 
  