import './Navbar.css'
// import { Link } from 'react-router-dom';
import tensor_logo from '../../Images/tensor_logo.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Navbar() {
    const[isOpen,setisOpen]=useState(false)
    const togglemenu=()=>{
        setisOpen(!isOpen)
    }
    // const closeMenu = () => {
    //     setisOpen(false);
    //   };




    const navigate=useNavigate()
       
    const viewResult = () => {
        navigate('/results');
    }
    
    
    
    return(
     <>    
    <nav className='navbar flex justify-between py-6 px-9'>
        <div className='tensor_logo text-cyan-600   '>
            <img src={tensor_logo} width={130}  alt="" />
        </div>
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={togglemenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className={`nav_list_container ${isOpen ? 'open' : ''}`}>

            <ul className='nav_list flex  '>
                <li><a href="#home">Home</a></li>
                <li><a href="https://tensors.in/" target="_blank" rel="noreferrer">About Us</a></li>
                <li><a href="https://forms.gle/YA5meWcDAdsAyqkd9" target="_blank" rel="noreferrer">School Outreach</a></li>
                <li><a href="#faq-content">FAQ</a></li>
                <li><a href="#contact">Contact</a></li>
                <li onClick={viewResult}>Results</li>
                <li><a href="https://rzp.io/l/nSJIjoTty" target="_blank" rel="noreferrer">Register</a></li>

            </ul>
        </div>
    </nav>
    </>
)}

export default Navbar;