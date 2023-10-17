import '../../../assets/css/Info.css'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'
import {FaLocationDot} from 'react-icons/fa6'

export const Info = () => {
    return <main>
        <section className='info-section'>
            <div className="info-container">
                <div className='info-title text-center'>Contact US</div>
                <div className='info-content flex'>
                    <div className='info-box flex flex-col align-center justify-center m-16'>
                        <div className='contact-icon'><BsFillTelephoneFill /></div>
                        <div className='contact-text mt-10'>Call Us</div>
                        <div className='mt-10'>9843440901</div>
                    </div>
                    <div className='info-box flex flex-col align-center justify-center m-16'>
                        <div className='contact-icon'><GrMail /></div>
                        <div className='contact-text mt-10'>Email</div>
                        <div className='mt-10'>smilefacedentalcare@gmail.com</div>
                    </div>
                    <div className='info-box flex flex-col align-center justify-center m-16'>
                        <div className='contact-icon'><FaLocationDot /></div>
                        <div className='contact-text mt-10'>Address</div>
                        <div className='mt-10'>Khusibu-17, Kathmandu, Nepal</div>
                    </div>
                </div>
            </div>
        </section>
    </main>
}