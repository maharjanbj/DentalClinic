import '../../assets/css/Footer.css'
import Logo from '../../assets/images/dental-logo.png'
import {MdSchedule} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'
import {FaLocationDot} from 'react-icons/fa6'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {BiLogoLinkedinSquare} from 'react-icons/bi'

export const Footer = () => {
    return <section>
    <footer className="footer">
        <div className="footer-container flex align-center justify-around">
            <div className='footer-box flex'>
                <div className="footer-img mr-10">
                    <img src={Logo} alt="logo" />
                </div>
                <div className='flex flex-col justify-center'>
                    <div className='f-title'>Smile Face Dental Clinic</div>
                    <div className='mt-10'>We provide all services from NMC<br/> registered doctors and dental hyginist.</div>
                    <div className='flex mt-10'>
                    <div className='flex align-center mr-10 icons'>
                        <MdSchedule />
                    </div>
                    <div>
                        <div>Sun - Fri: 10:00am - 7:00pm</div> 
                        <div>Sat: 10:00am - 2:00pm</div>
                    </div>
                </div>
                </div>
            </div>
            <div className='footer-box'>
                <div className='f-title mt-10 mb-10'>
                    Quick Links
                </div>
                <div className='ul'>Home</div>
                <div className='ul'>Page</div>
                <div className='ul'>About</div>
                <div className='ul'>Service</div>
                <div className='ul'>Pricing</div>
                <div className='ul'>Contact</div>
            </div>
            <div className='footer-box'>
                <div className='f-title mt-10'>
                    Contact Us
                </div>
                <div className='flex align-center mt-10 space ul'><span className='icons'><BsFillTelephoneFill /></span>9843440901</div>
                <div className='flex align-center mt-10 space ul'><span className='icons'><GrMail /></span>smilefacedentalcare@gmail.com</div>
                <div className='flex align-center mt-10 space ul'><span className='icons'><FaLocationDot /></span>Khusibu-17, Kathmandu, Nepal</div>
                <div className='flex mt-10 mb-10'>
                    <div className='flex align-center mr-10 ul'><span className='icons'><BsFacebook /></span></div>
                    <div className='flex align-center mr-10 ul'><span className='icons'><AiFillTwitterCircle /></span></div>
                    <div className='flex align-center mr-10 ul'><span className='icons'><AiFillInstagram /></span></div>
                    <div className='flex align-center ul'><span className='icons'><BiLogoLinkedinSquare /></span></div>
                </div>
            </div>
        </div>
    </footer>
    </section>
}