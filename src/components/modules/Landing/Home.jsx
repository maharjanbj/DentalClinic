import '../../../assets/css/Home.css'
import smile from '../../../assets/images/smile-removebg.png';
import { Service } from './Service';

export const Home = () => {
    return <main>
    <section className='home-section'>
        <div className='home-container flex'>
            <div className="text-area flex flex-col justify-center">
                <div className='home-title'>Time To</div>
                <div className='home-title-2'>Smile!</div>
                <div className='home-sub-title'>Enjoy our new dental offers, they’re online immediately. Choose your service and start smiling again!</div>
                <div className='flex'>
                    <div className='home-btn mr-10'>Make Appointment</div>
                    <div className='home-btn'>See More</div>
                </div>
            </div>
            <div className="image-area flex justify-center align-center">
                <div className='img'>
                    <img src={smile} alt="smile" />
                </div>
            </div>
        </div>
    </section>
    </main>
}

// https://dentistree.ae/wp-content/uploads/2023/03/slide-2.jpg
// https://emch.com.bd/wp-content/uploads/2022/01/web1.jpg
// https://walkindentalclinic.ca/wp-content/uploads/2022/05/Group-126-1.png

// https://i0.wp.com/mydiscover.net.in/blog/wp-content/uploads/2023/01/Smile-because-it-confuses-people.jpg?fit=703%2C812&ssl=1