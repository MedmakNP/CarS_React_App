import './Review.css'
import Response from './Response';
import { Carousel } from 'react-responsive-carousel';

const Review = () => {
    return(
        <div className='review'>
            <div className='container'>
            <Carousel>
                <div>
                <Response />
                </div>
            </Carousel>
            </div>
        </div>
    );
};

export default Review;