import './Catalog.css'
import Tabs from '../Tabs/Tabs.js'
 
const Catalog = () =>{
    return(
        <div className='catalog'>
            <div className='container'>
                <p className='title-catalog'>Get all Luxurious Car</p>
                <p className='catalog-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been he industry's standar</p>
                <div className='catalog-inner'>
                    <Tabs />
                </div>
            </div>
        </div>
    );
};

export default Catalog;