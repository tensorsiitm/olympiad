import './Footer.css'
import { HiPhone } from "react-icons/hi2";
import { IoIosMail } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

function Footer() {
    return <>
   <footer class="footer">
        <div class="contact-us"><p>Contact-us</p></div>
        <div class="contact">
            <div className='icontextone'><div><HiPhone className='icons'/></div> <div><p> Devanarayanan: +91 82819 13830</p></div></div>
            <div className='icontext'><div><HiPhone className='icons'/></div> <div><p>Aadil A: +91 8330020642</p></div> </div>
            <div className='icontextthree'><div><IoIosMail className='icons'/></div> <div> <p>tensorsofficial@gmail.com </p></div></div>
        </div>
        <div class="logo-container">
        <div class="line"></div>
    <div class="logo">
        <img src='logo.png' class='logoimg' alt='Logo'/>
    </div>
    <div class="line"></div>
    </div>

    
        <div class="social-icons">
            <a href="https://www.facebook.com/tensorsofficial/"><BsFacebook className='icon'/></a>
            <a href="https://www.instagram.com/tensors_official/reels/"><FaInstagramSquare className='icon'/></a>
            <a href="https://in.linkedin.com/company/tensors"><IoLogoLinkedin className='icon'/></a>
            <a href="https://www.youtube.com/channel/UCYQ-dJn04bDDjs1t6eUzq7A"><FaYoutube className='icon'/></a>
        </div>
        
        <div class="copyright">
          <p> © 2024 All right reserved - Tensors WebOps</p> 
        </div>
    </footer>

    </>;
}

export default Footer;