import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Usercontext = createContext()

function Appcontext(props) {

  const [user, Setuser] = useState(null)
  const [showlogin, Setshowlogin] = useState(false)
  const [token, Settoken] = useState(localStorage.getItem("token"))
  const [credit, Setcredit] = useState(false)
  const navigate = useNavigate()

  const backendurl = import.meta.env.VITE_BACKEND_URL;

  const loadcreditdata = async () => {

    try {

      const { data } = await axios.get(`${backendurl}/api/user/credits`, { headers: { token } })

      if (data.success) {
        Setcredit(data.credits)
        Setuser(data.user)
      }

    } catch (error) {

      console.log(error);
      toast.error(error.message)

    }
  }

  const generateimages = async (prompt) => {
    console.log("Token being sent:", token);  
    console.log("Backend URL:", backendurl);


    try {

      let { data } = await axios.post(`${backendurl}/api/image/generate-image`, 
        { prompt }, 
        { headers: { 
          "Content-Type": "application/json",
          "token": token
        
        } })

      if (data.success) { 
       await loadcreditdata();

        return data.resultImage
      }
      else {
        toast.error(data.message)

       await  loadcreditdata();

        if (data.creditBalance === 0) {

          navigate("/bycredit")

        }

      }
    }
    catch (error) {
      console.log(error);
      toast.error(error.message)

    }
  }

  const logout=()=>{ 
    localStorage.removeItem("token")
     Settoken("") 
     
     Setuser(null) 
     navigate("/")
     toast.success("Logged out successfully")
     
  }

  useEffect(() => {
    if (token) {
      loadcreditdata()


    }
  }, [token])

  const value = {
    user,
    Setuser,
    showlogin,
    Setshowlogin,
    backendurl,
    token,
    Settoken,
    credit,
    Setcredit,
    loadcreditdata,
    logout,
    generateimages

  }

  return (
    <Usercontext.Provider value={value}>
      {props.children}

    </Usercontext.Provider>
  )
}

export default Appcontext;