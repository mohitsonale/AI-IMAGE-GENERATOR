import { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { Usercontext } from "../context/Appcontext";
import { useNavigate } from "react-router-dom";

function Generatebutton(){

    const{user,Setshowlogin}=useContext(Usercontext)
    const navigate=useNavigate()

    const onclickhandler=()=>{

        if(user){
            navigate("/results")
        } 
        else{
            Setshowlogin(true)
        }
       
    }

    return(
        <motion.div className="pb-16 text-center"

            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={true}
        
        >
            <h1 className="text-2xl md:text-3xl lg:text-4xl mt-4 font-bold text-neutral-800 py-6 md:py-16 ">See the magic. Try now</h1>
            <button onClick={onclickhandler} className="inline-flex items-center gap-2 px-12 py-3 cursor-pointer rounded-full bg-black text-white m-auto hover:scale-105 duration-500 transition-all">Generate Images
                <img src={assets.star_group} alt="" className="h-6" />
            </button>
        </motion.div>
    )
}

export default Generatebutton;