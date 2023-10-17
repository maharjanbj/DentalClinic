import '../../../assets/css/Service.css'
import Implants from '../../../assets/images/implant.png'
import Dental from '../../../assets/images/dental.png'
import Denture from '../../../assets/images/denture.png'
import Broken from '../../../assets/images/broken-tooth.png'
import Braces from '../../../assets/images/braces.png'
import Clean from '../../../assets/images/clean-tooth.png'

export const Service = () => {
    return <main>
        <section className='service-section'>
            <div className='service-container'>
                <div className='flex flex-col align-center'>
                    <h1>Healthy Smiles</h1>
                    <div className='service-title'>Everyday!</div>
                    <div className='service-sub-title'>Get your day started with a smile: check our services to see</div>
                    <div className='service-sub-title'> what we can help you with!</div>
                </div>
                <div className='service-content flex flex-wrap'>
                    <div className='service-box flex flex-col align-center justify-center text-center m-16'>
                        <div className='image-icon'>
                            <img src={Implants} alt="Implants" />
                        </div>
                        <div>
                            <h1>Dental Implants</h1>
                            <div className='blur'>Interactively actualize processes with convergence. Synergistically deliver performance methods.</div>
                        </div>
                    </div>
                    <div className='service-box flex flex-col align-center justify-center text-center m-16'>
                        <div className='image-icon'>
                            <img src={Dental} alt="Dental" />
                        </div>
                        <div>
                            <h1>General Dentistry</h1>
                            <div className='blur'>Energistically fabricate an expanded array of niche markets through robust dental end user products.</div>
                        </div>
                    </div>
                    <div className='service-box flex flex-col align-center justify-center text-center m-16'>
                        <div className='image-icon'>
                            <img src={Broken} alt="Broken" />
                        </div>
                        <div>
                            <h1>Urgent Surgery</h1>
                            <div className='blur'>Distinctive enable enabled sources and cost effective principle centered information about products.</div>
                        </div>
                    </div>
                    <div className='service-box flex flex-col align-center justify-center text-center m-16'>
                        <div className='image-icon'>
                            <img src={Denture} alt="Denture" />
                        </div>
                        <div>
                            <h1>Prosthesis</h1>
                            <div className='blur'>Globally myocardinate supply chains distinctive quality vectors through interoperable services.</div>
                        </div>
                    </div>
                   <div className='service-box flex flex-col align-center justify-center text-center m-16'>
                        <div className='image-icon'>
                            <img src={Clean} alt="Clean" />
                        </div>
                        <div>
                            <h1>Whitening</h1>
                            <div className='blur'>Holisticly predominate testing procedures for reliable supply chains via cutting edge deliverables.</div>
                        </div>
                    </div>
                    <div className='service-box flex flex-col align-center justify-center text-center m-16'>
                        <div className='image-icon'>
                            <img src={Braces} alt="Braces" />
                        </div>
                        <div>
                            <h1>Braces</h1>
                            <div className='blur'>Objectively integrate emerging core competencies before communities than client-centric data.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
}