import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Bycredit from "./pages/Bycredit";
import Results from "./pages/Results";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

function App(){

  return(
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50">
      
      <Navbar />
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