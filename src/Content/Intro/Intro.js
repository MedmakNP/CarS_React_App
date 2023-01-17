import classes from './intro.module.css';
import introData from '../Constants/IntroArray';
import SearchElement from '../SearchElement/searchElement.js';
const Intro = () => {
    return(
        <div className={classes.intro}>
            <div className={classes.container}>
                <p className={classes.title}>The All-New Series</p>
                <p className={classes.brand}>BMW-GT</p>
                <p className={classes.content}>The BMW 3 Series GT is a fine luxury offering, one with notably more road presence and character than a lot of traditional sedans including BMW’s own 3 Series.</p>
                <button className={classes.btn}>Book Now</button>
                <div className={classes.wrap}>
                    <div className={classes.search}>
                        <div className={classes.elemWrap}>
                        { introData.map (Srch => < SearchElement text = {Srch.text} />)}
                        <button className={classes.btn}>Search Now</button> 
                        </div>                       
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Intro;