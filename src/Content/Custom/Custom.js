import './Custom.css'
import iconData from "../Constants/CustomArray"
import CustElement from "../CustomElement/CustomElement.js"

const Custom = () => {
   
    return( 
       
        <div className='custom'>
            <div className='container'>
                <p className='title-custom'>Best Customer Experience</p>
                <div className='custom-inner'>
                    <div className='wrap-icon'>
                        <div className='wrapper-number n1'>
                            { iconData.slice(0,2).map (iconi => < CustElement img={iconi.img} text = {iconi.text} />)}
                        </div>
                        <div className='wrapper-number n2'>
                            { iconData.slice(2,4).map (iconi => < CustElement img={iconi.img} text = {iconi.text} />)}
                        </div>
                        <div className='wrapper-number n3'>
                            { iconData.slice(4,6).map (iconi => < CustElement img={iconi.img} text = {iconi.text} />)}                    
                        </div>
                    </div>
                    <div className='more-icon'>
                        { iconData.slice(6).map (iconi => < CustElement img={iconi.img} text = {iconi.text} />)}                 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Custom;
