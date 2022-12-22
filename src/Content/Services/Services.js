import './Services.css'
import service1 from '../Images/service1.png'
import serviсe2 from '../Images/service2.png'
import service3 from '../Images/service3.png'

const Services = () => {
    return(
        <div className='services'>
            <div className='container'>
                <p className='title-services'>Our Services</p>
                <div className='servise-wrap'>
                    <div className='services-elem elem1'>
                        <img src={service1} className='service-img' alt='service1' />
                        <p className='servise-text'>Fast & Easy Booking</p>                       
                    </div>
                    <div className='services-elem elem2'>
                        <img src={serviсe2} className='service-img' alt='service2' />
                        <p className='servise-text'>Many Pickup Location</p>                       
                    </div>
                    <div className='services-elem elem3'>
                        <img src={service3} className='service-img' alt='service3' />
                        <p className='servise-text'>Satisfied Customer</p>                       
                    </div>
                </div>
            </div>
        </div>
        
    );
};
export default Services;