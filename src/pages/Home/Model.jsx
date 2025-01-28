import React from 'react'

const Model = () => {

    const openPDF = () => {
        const pdfURL = "/Tensor8th.pdf";
        window.open(pdfURL, "_blank");
      };
      const openPDF9 = () => {
        const pdfURL = "/Tensors9.pdf";
        window.open(pdfURL, "_blank");
      };
      const openPDF10 = () => {
        const pdfURL = "/Tensors10th.pdf";
        window.open(pdfURL, "_blank");
      };



  return (
    <div className='py-[10vh] h-full flex flex-col justify-center items-center '>
      <h1 className=' md:text-7xl  text-3xl font-semibold text-[#0fa487]'>MODEL PAPERS</h1>
      <div className='flex flex-col md:flex-row justify-center items-center gap-[10px] '>
      <div onClick={openPDF} className='md:w-[20vw] md:h-[20vw] h-[60vw] w-[60vw] flex flex-col justify-center items-center align-middle  text-[#0fa487] rounded-2xl bg-[#ffffff] hover:bg-[#96d6cd] shadow-lg '><span className='font-black md:text-7xl text-4xl italic'>8TH</span> <br/> <p className='w-[60%]'>Model paper & ans key</p></div>
      <div onClick={openPDF9} className='md:w-[20vw] md:h-[20vw] h-[60vw] w-[60vw] flex flex-col justify-center items-center align-middle  text-[#0fa487] rounded-2xl bg-[#ffffff] hover:bg-[#96d6cd] shadow-lg '><span className='font-black md:text-7xl text-4xl italic'>9TH</span> <br/> <p className='w-[60%]'>Model paper & ans key</p></div>
      <div onClick={openPDF10} className='md:w-[20vw] md:h-[20vw] h-[60vw] w-[60vw] flex flex-col justify-center items-center align-middle  text-[#0fa487] rounded-2xl bg-[#ffffff] hover:bg-[#96d6cd] shadow-lg '><span className='font-black md:text-7xl text-4xl italic'>10TH</span> <br/> <p className='w-[60%]'>Model paper & ans key</p></div>
      </div>
    </div>
  )
}

export default Model
