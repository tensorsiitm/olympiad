import './Navbar.css'
import { Link } from 'react-router-dom';
import tensor_logo from '../../Images/tensor_logo.png'
function Navbar() {
    return(
     <>    
    <nav className='navbar flex justify-between py-6 px-9'>
        <div className='tensor_logo text-cyan-600   '>
            <img src={tensor_logo} width={130}  alt="" />
        </div>
        <div >
            <ul className='nav_list flex  '>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="/">School Outreach</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="/">Register</a></li>
                <li><a href="/">FAQ</a></li>
            </ul>
        </div>
    </nav>
    </>
)}

export default Navbar;