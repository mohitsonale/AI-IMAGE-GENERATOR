import mongoose from "mongoose";

let Userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,  
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    creditBalance:{
        type:Number,
        default:10
    }

})

let Usermodel= mongoose.Model.user || mongoose.model('users',Userschema);

export default Usermodel;