import ten_2 from '../../Images/ten_2.png'
import ten_3 from '../../Images/ten_3.png'
import trust from '../../Images/Trust.png'
import school from '../../Images/ten_school.png'
import place from '../../Images/Place Marker.png'
import pen from '../../Images/Ball Point Pen.png'
import users from '../../Images/Users.png'
import ellipse from '../../Images/ellipse.png'
import ellipse_1 from '../../Images/Ellipse 1.png'
import ellipse_2 from '../../Images/ellipse 2.png'
import '../../components/Navbar/Navbar.css'

function Landing() {
    return (
        <>
            <section className='first_section  '>
                <div className="flex items-center">
                    <div className="left bg-gradient-to-r from-indigo-400 ... w-[54px] h-[239px] mx-10"></div>
                    <div className="center text-center  w-[503px] pr-[150px]">
                        <div>"Preparing You for</div>
                        <div>Olympaids and Competitive</div>
                        <div>Exams Alike"</div>
                    </div>
                    <div className="right ">
                        <img src={ten_2} width={376} height={376} alt="Illustration" />
                    </div>
                </div>
            </section>
            {/* second section */}
            <section className='second_section mb-6 '>
                <div className="flex items-center flex-row-reverse  ">
                    <div className="left bg-gradient-to-r from-white to-blue-400 ... w-[60px] h-[239px] mr-10 "></div>
                    <div className="center text-center w-[454px] h-[102px] pl-[100px] pr-[30px] ">
                        <div>"Your Talent Deserves the  </div>
                        <div>Best Prizes"</div>
                    </div>
                    <div className="right w-1/3 ">
                        <img src={ten_3} width={345} height={296} alt="Illustration" />
                    </div>
                </div>

            </section>
            <section className='third_section mb-4 '>
                <div className=' bg-[rgb(197,215,255)] py-[23px]  '>
                    <div className='text-[rgb(64,83,255)]  font-bold'>ALL INDIA SCIENCE,MATHS AND APTITUDE OLYMPAIDS</div>
                    <div className='text-[rgb(64,123,255)]'>FOR CLASS 6 TO 10</div>
                </div>
                <div className=' box bg-[rgb(52,152,219)] grid grid-cols-5 divide-x py-2'>
                    <div className=' box-1 flex items-center justify-center  '>
                        <div className='flex items-center '>
                            <div className=''>
                            <img src={trust} alt="" className='w-8 h-8 mr-2'/> 

                            </div>
                                    <ul className='flex flex-col  text-white  items-center'>
                                <li className='text-[20px] font-bold mr-[58px]' >16+</li>
                                <li className='text-[14px] mt-[-10px]'>Years of Trust</li>
                                </ul>
                        </div>
                    </div>
                    <div className=' box-2 flex items-center justify-center  '>
                        <div className='flex items-center '>
                            <div className=''>
                            <img src={school} alt="" className='w-8 h-8 mr-2'/> 

                            </div>
                                    <ul className='flex flex-col  text-white  items-center'>
                                <li className='text-[20px] font-bold '>5000+</li>
                                <li className='text-[14px] mt-[-10px] ml-[-6px]'>schools</li>
                                </ul>
                        </div>
                    </div>
                    <div className=' box-3 flex items-center justify-center  '>
                        <div className='flex items-center '>
                            <div className=''>
                            <img src={place} alt="" className='w-8 h-8 mr-2'/> 

                            </div>
                                    <ul className='flex flex-col  text-white  items-center'>
                                <li className='text-[20px] font-bold'>16+</li>
                                <li className='text-[14px] mt-[-10px]'>state</li>
                                </ul>
                        </div>
                    </div>
                    <div className=' box-4 flex items-center justify-center  '>
                        <div className='flex items-center '>
                            <div className=''>
                            <img src={pen} alt="" className='w-8 h-8  '/> 

                            </div>
                                    <ul className='flex flex-col  text-white  items-center'>
                                <li className='text-[20px] font-bold'>500+</li>
                                <li className='text-[14px]  mt-[-10px] '>Assessments</li>
                                </ul>
                        </div>
                    </div>
                    <div className=' box-5 flex items-center justify-center  '>
                        <div className='flex items-center '>
                            <div className=''>
                            <img src={users} alt="" className='w-8 h-8 mr-2'/> 

                            </div>
                                    <ul className='flex flex-col  text-white  items-center'>
                                <li className='text-[20px] font-bold'>10,000+</li>
                                <li className='text-[14px] ml-[-36px] mt-[-10px]'>users</li>
                                </ul>
                        </div>
                    </div>
                    </div>
                   
            </section>
            <section className='four_section'>
                <div>
                    <h2 className='text-center text-2xl'>Awards and Prizes</h2>
                </div>
                <div className='box_ flex py-2'>
                    <div className='box-1  w-1/3 h-[230px] m-4 border-2 rounded-lg py-4'>
                        <div className='flex  flex-col items-center'>
                            <img src={ellipse_1} alt="" className='w-[40%] mb-2' />
                            <div><h6 className='font-bold mb-3'>International Topper</h6></div>
                            <div>
                                <p className='text-sm '>Trophy, medal, badge and</p>
                                <p className='text-sm mt-[-4px]'>printed certificates</p>
                                </div>
                            </div>
                    </div>
                    <div className='box-2  w-1/3 h-[230px] m-4 border-2 rounded-lg py-4'>
                        <div className='flex  flex-col items-center'>
                            <img src={ellipse} alt=""  className='w-[40%] mb-2' />
                            <div><h6 className='font-bold mb-3'>Zonal Topper</h6></div>
                            <div>
                                <p className='text-sm '>Trophy, medal, badge and</p>
                                <p className='text-sm mt-[-4px]'>printed certificates</p>
                                </div>
                            </div>
                    </div>
                    <div className='box-3  w-1/3 h-[230px] m-4 border-2 rounded-lg py-4'>
                        <div className='flex  flex-col items-center'>
                            <img src={ellipse_2} alt="" className='w-[40%] mb-2' />
                            <div><h6 className='font-bold mb-3'>High Scorers (90% & above)</h6></div>
                            <div>
                                <p className='text-sm '>Gold medal, badge and</p>
                                <p className='text-sm mt-[-4px]'>printed certificates</p>
                                </div>
                            </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Landing;
