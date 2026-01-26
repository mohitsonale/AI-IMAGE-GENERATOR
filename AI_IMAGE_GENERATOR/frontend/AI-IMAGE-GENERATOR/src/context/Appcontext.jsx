import { createContext, useState } from "react";

export const Usercontext=createContext()

function Appcontext(props){

    const[user,Setuser]=useState(null)

    const value={
        user,
        Setuser 
    }

    return(
      <Usercontext.Provider value={value}>
        {props.children}

      </Usercontext.Provider>
    )
}

export default Appcontext;