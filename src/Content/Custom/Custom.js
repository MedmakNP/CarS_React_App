import './Custom.css'
import icon1 from "../Images/icon1.png"
import icon2 from "../Images/icon2.png"
import icon3 from "../Images/icon3.png"
import icon4 from "../Images/icon4.png"
import icon5 from "../Images/icon5.png"
import icon6 from "../Images/icon6.png"
import icon7 from "../Images/icon7.png"
import icon8 from "../Images/icon8.png"
import icon9 from "../Images/icon9.png"
import icon10 from "../Images/icon10.png"
import icon11 from "../Images/icon11.png"
const Custom = () => {
    return(
        <div className='custom'>
            <div className='container'>
                <p className='title-custom'>Best Customer Experience</p>
                <div className='custom-inner'>
                    <div className='wrap-icon'>
                        <div className='wrapper-number n1'>
                            <div className='icon'>
                            <img src={icon1} className='icon-img' alt=''/>
                            <p className='icon-text'>Competitive Pricing</p>
                            </div>
                            <div className='icon'>
                            <img src={icon6} className='icon-img' alt=''/>
                            <p className='icon-text R'>Best Extended Auto Warranties</p>
                            </div>
                        </div>
                        <div className='wrapper-number n2'>
                            <div className='icon'>
                            <img src={icon2} className='icon-img' alt=''/>
                            <p className='icon-text'> Easier Rent On Your Budget</p>
                            </div>
                            <div className='icon'>
                            <img src={icon5} className='icon-img' alt=''/>
                            <p className='icon-text R'> Roadside Assistance 24/7</p>
                            </div>
                        </div>
                        <div className='wrapper-number n3'>
                            <div className='icon'>
                            <img src={icon3} className='icon-img' alt=''/>
                            <p className='icon-text'>Most Flexible Payment Plans</p>
                            </div>
                            <div className='icon'>
                            <img src={icon4} className='icon-img' alt=''/>
                            <p className='icon-text R'>Our Choice Of Mechanic</p>
                            </div>                      
                        </div>
                    </div>
                    <div className='more-icon'>
                        <div className='icon '>
                            <img src={icon7} className='icon-img' alt=''/>
                            <p className='icon-text M'>Engine</p>
                        </div> 
                        <div className='icon'>
                            <img src={icon8} className='icon-img' alt=''/>
                            <p className='icon-text M'>Electrical</p>
                        </div>
                        <div className='icon'>
                            <img src={icon9} className='icon-img' alt=''/>
                            <p className='icon-text M'>Cooling</p>
                        </div>
                        <div className='icon'>
                            <img src={icon10} className='icon-img' alt=''/>
                            <p className='icon-text M'>Transmision</p>
                        </div>
                        <div className='icon'>
                            <img src={icon11} className='icon-img' alt=''/>
                            <p className='icon-text M'>20+ More</p>
                        </div>                   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Custom;
