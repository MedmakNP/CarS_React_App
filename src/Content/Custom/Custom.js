import classes from './Custom.module.css'
import iconData from "../Constants/CustomArray"
import CustElement from "../CustomElement/CustomElement.js"

const Custom = () => {
   
    return( 
       
        <div className={classes.custom}>
            <div className={classes.container}>
                <p className={classes.title}>Best Customer Experience</p>
                <div className={classes.inner}>
                    <div className={classes.wrap}>
                        <div className={`${classes.wrapper} ${classes.n1}`}>
                            { iconData.slice(0,2).map ((item , id) => < CustElement img={item.img} text = {item.text} key = {id} />)}
                        </div>
                        <div className={`${classes.wrapper} ${classes.n2}`}>
                            { iconData.slice(2,4).map ((item , id) => < CustElement img={item.img} text = {item.text} key = {id} />)}
                        </div>
                        <div className={`${classes.wrapper} ${classes.n1}`}>
                            { iconData.slice(4,6).map ((item , id) => < CustElement img={item.img} text = {item.text} key = {id} />)}                  
                        </div>
                    </div>
                    <div className={classes.moreIcon}>
                        { iconData.slice(6).map ((item , id) => < CustElement img={item.img} text = {item.text} key = {id} />)}                 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Custom;
