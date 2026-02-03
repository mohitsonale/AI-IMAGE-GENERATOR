import jwt from 'jsonwebtoken';

const authMiddleware=async(req,res,next)=>{

    let {token}=req.headers;

    if(!token){
        return res.json({success:false,message:"No token provided"});
    }

    try {

        let tokendecode=jwt.verify(token,process.env.JWT_SECRET);

        if(tokendecode.id){
            req.body.userId=tokendecode.id;
        }
        else{
            return res.json({success:false,message:"Invalid token"});
        }

        next();
        
    } catch (error) {
        console.log(error); 

        return res.json({success:false,message:"Token verification failed",error:error.message});
    }
}

export default authMiddleware;