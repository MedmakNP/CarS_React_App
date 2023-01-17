import './Review.css'
import avatar from "../Images/avatar.png"
import stars from "../Images/stars.png"
const Response = () =>{
    return(
        <div className="response">
            <div className='response-wrap'>
                <img src={avatar} className='response-avatar' alt='avatar' />
                <div className='description'>
                    <p className='nickName'>Floyd Miles</p>
                    <img src = {stars} alt = 'stars' />
                    <p className='response-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Loremprinting and typesetting industry. Lorem</p>
                </div>
            </div>
        </div>
    );
}; 
export default Response;