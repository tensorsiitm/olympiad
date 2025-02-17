import React from "react";
import { motion } from "framer-motion";

const BestSchool = () => {
  return (
    <motion.div id="school" className="w-[100vw] flex justify-center items-center">

    <motion.div
      className="relative rounded-2xl flex flex-col items-center w-[90vw] justify-center min-h-screen bg-gradient-to-b from-[#0fa487] to-[#053a30] text-white py-20 px-6"
    >
   
      <motion.h2
        className="md:text-5xl text-3xl font-extrabold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
         Congratulations, MTM Senior Secondary School! 
      </motion.h2>

      <motion.div
        className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <img
          src="mtm.png"
          alt="MTM School"
          className="w-full h-[400px] object-cover"
        />

    
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6">
          <h3 className="text-4xl font-extrabold text-white">
            M.T.M Senior Secondary School
          </h3>
          <p className="text-lg text-gray-300 mt-2">Thiruvananthapuram,Kerala</p>
        </div>
      </motion.div>

     
      <motion.div
        className="mt-6 text-3xl font-bold text-green-300 flex items-center gap-3"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.span
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
        >
          🏆
        </motion.span>
        50+ Students Scored 100+ Marks!
      </motion.div>

    
      <motion.div
        className="mt-6 max-w-3xl text-center bg-white/10 p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <p className="text-lg font-semibold">
          We extend our heartfelt congratulations to MTM Senior Secondary School  
          for their outstanding academic achievements! 🎊  
        </p>
        <p className="text-lg mt-3">
          Your dedication to excellence and commitment to nurturing bright minds  
          have led to remarkable success, with students securing top ranks.  
          A special shoutout to  9th-grade topper for securing 1st place!  
        </p>
        <p className="text-lg mt-3 text-green-300 font-semibold">
          Keep inspiring, keep achieving! 🚀
        </p>
      </motion.div>

     
      <motion.div
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 rounded-full"
            style={{
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              backgroundColor: ["#FFD700", "#FF4500", "#32CD32"][
                Math.floor(Math.random() * 3)
              ],
            }}
            animate={{ y: [0, 700], rotate: [0, 360] }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random(),
            }}
          />
        ))}
      </motion.div>
    </motion.div>
    </motion.div>
  );
};

export default BestSchool;
