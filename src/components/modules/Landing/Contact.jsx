import '../../../assets/css/Contact.css'
import map from '../../../assets/images/map.png'

export const Contact = () => {
    return <main>
        <section className='contact-section'>
            <div className="contact-container">
                <div className='contact-content flex'>
                    <div className='map flex align-center justify-center'>
                        <div className='contact-img'>
                            <img src={map} alt="map" />
                        </div>
                    </div>
                    <div className='form flex flex-col align-center justify-center'>
                    <div className="contact-title text-center">
                        Get In Touch
                    </div>
                    <form>
                        <div className='m-10'>
                            <div className='name'>Name:</div>
                            <input type="text" placeholder='Enter your Text*' />
                        </div>
                        <div className='m-10'>
                            <div className='name'>Email Address:</div>
                            <input type="text" placeholder='Enter your Email Address*' />
                        </div>
                        <div className='m-10'>
                            <div className='name'>Message:</div>
                            <textarea placeholder='Enter your Message*' />
                        </div>
                        <div className='form-btn m-10'>
                            Send Message
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </section>
    </main>
}