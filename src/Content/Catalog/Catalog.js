import classes from './Catalog.module.css'
import Tabs from '../Tabs/Tabs.js'
 
const Catalog = () =>{
    return(
        <div className={classes.catalog}>
            <div className={classes.container}>
                <p className={classes.title}>Get all Luxurious Car</p>
                <p className={classes.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been he industry's standar</p>
                <div className={classes.inner}>
                    <Tabs />
                </div>
            </div>
        </div>
    );
};

export default Catalog;