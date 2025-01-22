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
    <div className='w-[100vw] flex flex-col justify-center items-center '>
      <h1 className=' md:text-7xl  text-3xl font-semibold text-[#0fa487]'>MODEL PAPERS</h1>
      <div className='flex flex-col justify-center items-center gap-[10px] '>
      <div onClick={openPDF} className='md:w-[60vw] md:h-[20vh] h-[10vh] w-[90vw] flex justify-center items-center align-middle md:text-3xl font-semibold text-[#0fa487] rounded-2xl bg-[#c7eae4] hover:bg-[#96d6cd] border-2 cborder-grey-100 '>8TH STANDARD  MODEL AND ANSWER KEY</div>
      <div onClick={openPDF9} className='md:w-[60vw] md:h-[20vh] h-[10vh] w-[90vw] flex justify-center items-center align-middle md:text-3xl font-semibold text-[#0fa487] rounded-2xl  bg-[#c7eae4] hover:bg-[#96d6cd] border-2 cborder-grey-100 '>9TH STANDARD  MODEL AND ANSWER KEY</div>
      <div onClick={openPDF10} className='md:w-[60vw] md:h-[20vh] h-[10vh] w-[90vw] flex justify-center items-center align-middle  md:text-3xl font-semibold text-[#0fa487] rounded-2xl bg-[#c7eae4] hover:bg-[#96d6cd] border-2 cborder-grey-100 '>10TH STANDARD  MODEL AND ANSWER KEY</div>
      </div>
    </div>
  )
}

export default Model
