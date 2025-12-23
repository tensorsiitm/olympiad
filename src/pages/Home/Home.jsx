import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Why from "./Why";
import Landing from "./Landing";
import What from "./What";
import FAQ from "./FAQ";
import Model from "./Model";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import ResultSection from "./ResultSection";
// import School from "./School";
// import { motion } from "framer-motion";
// import { RxCross1 } from "react-icons/rx";

function Home() {
  // const navigate = useNavigate();
  // const [showPopup, setShowPopup] = useState(true);

  // const closePopup = () => {
  //   setShowPopup(false);
  // };

  
  // const navigateToSection = (sectionId) => {
  //   document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  //   closePopup();  
  // };

  return (
    <>
     
      {/* {showPopup && (
        <motion.div
          className="fixed z-99 bottom-6 right-6 md:bottom-10 md:right-10 w-[90vw] md:w-[320px] bg-[#007f6c] text-white p-4 rounded-lg shadow-lg flex flex-col gap-3"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          
          <div className="flex justify-between items-center">
            <p className="text-lg font-bold">Results Announced!</p>
            <RxCross1 onClick={closePopup} className="text-2xl text-[#fff] font-bold" />
          </div>

        
          <button
            onClick={() => navigateToSection("results")}
            className="bg-white text-[#007f6c] font-semibold py-2 rounded-md hover:bg-gray-200 transition"
          >
            📜 View Overall Results
          </button>

          <button
            onClick={() => navigateToSection("school")}
            className="bg-white text-[#007f6c] font-semibold py-2 rounded-md hover:bg-gray-200 transition"
          >
            🏆 Best School 2025
          </button>

          <button
            onClick={() => navigate("/results")}
            className="bg-white text-[#007f6c] font-semibold py-2 rounded-md hover:bg-gray-200 transition"
          >
            🔍 View Individual Results
          </button>
        </motion.div>
      )} */}

    
      <Navbar />
      <Landing />
      <Model />
      <Why />
      <What />
      {/* <School  /> */}
      <ResultSection i />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;
