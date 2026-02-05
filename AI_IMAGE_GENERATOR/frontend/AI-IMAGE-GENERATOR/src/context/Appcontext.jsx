import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const Usercontext=createContext()

function Appcontext(props){

    const[user,Setuser]=useState(null)
    const[showlogin,Setshowlogin]=useState(false)
    const[token,Settoken]=useState(localStorage.getItem("token"))
    const[credit,Setcredit]=useState(false)

    const backendurl=import.meta.env.VITE_BACKEND_URL; 

    const loadcreditdata=()=>{

      try {
        
      } catch (error) {

        console.log(error);
        toast.error(error.message)
        
      }
    }

    const value={
        user,
        Setuser,
        showlogin,
        Setshowlogin,
        backendurl,
        token,
        Settoken,
        credit,
        Setcredit
       
    }

    return(
      <Usercontext.Provider value={value}>
        {props.children}

      </Usercontext.Provider>
    )
}

export default Appcontext;