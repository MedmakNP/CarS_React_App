import { Component } from 'react';
import classes from './intro.module.css';
import SearchElement from '../SearchElement/searchElement.js';

class IntroView extends Component {
  render() {
    const { introData, title, brand } = this.props;
    return (
      <div className={classes.intro}>
        <div className={classes.container}>
          <p className={classes.title}>{title}</p>
          <p className={classes.brand}>{brand}</p>
          <p className={classes.content}>
            The BMW 3 Series GT is a fine luxury offering, one with notably more road presence and character than
            a lot of traditional sedans including BMW’s own 3 Series.
          </p>
          <button className={classes.btn}>Book Now</button>
          <div className={classes.wrap}>
            <div className={classes.search}>
              <div className={classes.elemWrap}>
                { introData.map((item, id) => <SearchElement texts={item.texts} key={id} />)}
                <button className={classes.btn}>Search Now</button> 
              </div>                       
            </div>
          </div>
        </div>
      </div>
    );
  } 
}
export default IntroView;
