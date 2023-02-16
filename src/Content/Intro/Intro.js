import classes from './intro.module.css';
import introData from '../Constants/IntroArray';
import SearchElement from '../SearchElement/searchElement.js';
import { Component } from 'react';
class Intro extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title : "The All-New Series",
            brand : "BMW-GT"
        }
    }
    render(){
        const {title, brand} = this.state;
    return(
        <div className={classes.intro}>
            <div className={classes.container}>
                <p className={classes.title}>{title}</p>
                <p className={classes.brand}>{brand}</p>
                <p className={classes.content}>The BMW 3 Series GT is a fine luxury offering, one with notably more road presence and character than
                 a lot of traditional sedans including BMW’s own 3 Series.</p>
                <button className={classes.btn}>Book Now</button>
                <div className={classes.wrap}>
                    <div className={classes.search}>
                        <div className={classes.elemWrap}>
                        { introData.map ((item, index) => < SearchElement texts = {item.texts} key = {index} />)}
                        <button className={classes.btn}>Search Now</button> 
                        </div>                       
                    </div>
                </div>
            </div>
        </div>
    );
  }; 
};
export default Intro;