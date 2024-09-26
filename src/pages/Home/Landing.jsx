// import ten_2 from '../../Images/ten_2.png'
// import ten_3 from '../../Images/ten_3.png'
import cash_image from '../../Images/image 2.png'
import trust from '../../Images/Trust.png'
import school from '../../Images/ten_school.png'
import place from '../../Images/Place Marker.png'
import pen from '../../Images/Ball Point Pen.png'
import users from '../../Images/Users.png'
import '../../components/Navbar/Navbar.css'
import similing from '../../Images/similing_woman.png'
import flat_university from '../../Images/flat-university-background 1.png'
import image_3 from '../../Images/image 3.png'
import image_4 from '../../Images/image 4.png'

function Landing() {
    return (
        <>
            <section className='first_section '>
                <div className="flex items-center justify-around   ">
                    <div className="left   p-4 ">
                        <p>"Preparing You for Olympaids</p>
                        <p>and Competitive Exams Alike"</p>
                    </div>
                    <div className="right ">
                        <img src={similing} width={292} height={226} alt="Illustration" />
                    </div>
                </div>
            </section>
            {/* second section 250 and 301 */}
            <section className='second_section mb-14   '>
                <div className="flex items-center justify-around   ">
                    <div className="right  ">
                        <img src={flat_university} width={272} height={226} alt="Illustration" />
                    </div>
                    <div className="left   p-4 ">
                        <p>"Your Talent Deserves Nothing  </p>
                        <p>But The Best"</p>
                    </div>
                </div>

            </section>
            <section className='third_section mb-4 '>
                <div className=' info  py-[23px] bg-gradient-to-b from-white from-40% to-[rgba(0,158,134,0.22)] to-55%  '>
                    <div className='text-[rgb(37,161,142)]  font-bold'>ALL INDIA SCIENCE,MATHS AND APTITUDE OLYMPAIDS</div>
                    <div className=' text-[rgb(37,161,142)]'>FOR CLASS 5 TO 10</div>
                </div>
                <div className=' box bg-[rgb(0,127,108)] grid grid-cols-5 divide-x py-2'>
                    <div className=' box-1 flex items-center justify-center  '>
                        <div className='flex items-center '>
                            <div className=''>
                                <img src={trust} alt="" className='w-8 h-8 mr-2' />

                            </div>
                            <ul className='flex flex-col  text-white  items-center'>
                                <li className='item-1 text-[23px] font-bold mr-[58px]' >15+</li>
                                <li className='item-2 text-[17px] mt-[-10px]'>Years of Trust</li>
                            </ul>
                        </div>
                    </div>
                    <div className=' box-2 flex items-center justify-center  '>
                        <div className='flex items-center '>
                            <div className=''>
                                <img src={school} alt="" className='w-8 h-8 mr-2' />

                            </div>
                            <ul className='flex flex-col  text-white  items-center'>
                                <li className='item-1 text-[23px] font-bold '>5000+</li>
                                <li className='item-2 text-[17px] mt-[-10px] ml-[-6px]'>schools</li>
                            </ul>
                        </div>
                    </div>
                    <div className=' box-3 flex items-center justify-center  '>
                        <div className='flex items-center '>
                            <div className=''>
                                <img src={place} alt="" className='w-8 h-8 mr-2' />

                            </div>
                            <ul className='flex flex-col  text-white  items-center'>
                                <li className='item-1 text-[23px] font-bold'>14+</li>
                                <li className='item-2 text-[17px] mt-[-10px]'>state</li>
                            </ul>
                        </div>
                    </div>
                    <div className=' box-4 flex items-center justify-center  '>
                        <div className='flex items-center '>
                            <div className=''>
                                <img src={pen} alt="" className='w-8 h-8  ' />

                            </div>
                            <ul className='flex flex-col  text-white  items-center'>
                                <li className='item-1 text-[23px] font-bold'>500+</li>
                                <li className='item-2 text-[17px]  mt-[-10px] '>Assessments</li>
                            </ul>
                        </div>
                    </div>
                    <div className=' box-5 flex items-center justify-center  '>
                        <div className='flex items-center '>
                            <div className=''>
                                <img src={users} alt="" className='w-8 h-8 mr-2' />

                            </div>
                            <ul className='flex flex-col  text-white  items-center'>
                                <li className='item-1 text-[23px] font-bold'>20,000+</li>
                                <li className='item-2 text-[17px] ml-[-36px] mt-[-10px]'>users</li>
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
                <div className='box-1 w-1/3  m-4 border-2 rounded-lg '>
                <div className='flex  flex-col items-center'>
                            <img src={cash_image} alt="" className='w-[35%] ' />
                            <h6 className='font-bold '>Cash Prizes</h6>
                            <div>
                                <p className='text-xs px-3 '>To be Discussed</p>
                                    {/* <p className='text-xs '>In each grade</p> */}
                            </div>
                        </div>
                    </div>
                    <div className='box-2  w-1/3  m-4 border-2 rounded-lg py-2 '>
                        <div className='flex  flex-col items-center'>
                            <img src={image_3} alt="" className='w-[25%] ' />
                            <h6 className='font-bold '>Campus Visit</h6>
                            <div>
                                <p className='text-xs px-3 '>  A fully sponsored, guided visit to the </p>
                                    <p className='text-xs px-3'>prestigious <b>Indian Institute of Technology </b></p>
                                   <p className='text-xs px-3'> <b>Madras</b> for top 3 from each grade.</p>
                            </div>
                        </div>
                    </div>
                    <div className='box-3  w-1/3  m-4 border-2 rounded-lg  py-4'>
                        <div className='flex  flex-col items-center'>
                            <img src={image_4} alt="" className='w-[25%] ' />
                            <h6 className='font-bold  '>Certificates</h6>
                            <div>
                                <p className='text-xs px-3'>Students making it to top 10% gets best </p>
                                <p className='text-xs '>performer Certificate</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Landing;
