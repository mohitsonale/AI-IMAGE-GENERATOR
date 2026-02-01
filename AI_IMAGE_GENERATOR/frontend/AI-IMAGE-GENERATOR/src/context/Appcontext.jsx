import { createContext, useState } from "react";

export const Usercontext=createContext()

function Appcontext(props){

    const[user,Setuser]=useState(null)
    const[showlogin,Setshowlogin]=useState(false)

    const value={
        user,
        Setuser,
        showlogin,
        Setshowlogin
       
    }

    return(
      <Usercontext.Provider value={value}>
        {props.children}

      </Usercontext.Provider>
    )
}

export default Appcontext;