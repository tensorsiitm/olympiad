import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Why from "./Why";
import Landing from "./Landing";
import What from "./What";
import FAQ from "./FAQ";
import Model from './Model'
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

function Home() {
const navigate=useNavigate()
    const [open,SetOpen]=useState(false)
 
    const close=()=>{
        SetOpen(true)
    }


const viewResult = () => {
    navigate('/results');
}



    return <>

    { open? <> 
    
    </> :
    
    <div className="fixed flex flex-col bg-[#ffffff11] backdrop-blur-sm w-[100vw] h-[100vh] justify-center items-center">

    <div className="absolute w-[95vw] md:w-[60vw] gap-[4vh] rounded-2xl h-[70vh] flex flex-col justify-center items-center bg-[#007f6cf0]">
   <div className="absolute w-[90%] h-[90%] flex justify-end "><RxCross1 onClick={close} className="text-2xl text-[#fff] font-bold"/>
    </div> 
    <p className="md:text-6xl text-4xl text-[#fff] font-black">TENSORS Jr.OLYMPIAD</p>

        <p className="md:text-5xl text-4xl text-[#ffffff9a] font-bold">RESULTS ARE OUT..!!</p>
        <button onClick={viewResult} className="z-20 cursor-pointer md:px-[2vw] px-[4vw] py-[1vh] rounded-2xl text-lg md:text-xl bg-[#fff]">View Results</button>
    </div>
    </div>
    }
        <Navbar />
        <Landing />
        <Model/>
        <Why />
        <What />
        <FAQ />
        <Footer />
    </>;
}

export default Home;