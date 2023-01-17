import '../Custom/Custom.css'

const CustElement = (props) =>{
    return(
            <div className='icon'>
                <img src={props.img} className='icon-img' alt=''/>
                <p className='icon-text' > {props.text}</p>
            </div>
    );
};
export default CustElement;