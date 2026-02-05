import { Routes,Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Bycredit from "./pages/Bycredit";
import Results from "./pages/Results";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Login from "./component/Login";
import { useContext } from "react";
import { Usercontext } from "./context/Appcontext";

function App(){

  const{showlogin}=useContext(Usercontext)

  return(
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50">
      <ToastContainer  />
      <Navbar />
      {
        showlogin && <Login />
      }
     
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/bycredit" element={<Bycredit />} />
        <Route path="/results" element={<Results />} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App;