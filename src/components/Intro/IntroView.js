import { useContext } from 'react';
import PropTypes from 'prop-types';
import classes from './intro.module.css';
import SearchElement from '../SearchElement/searchElement';
import { ThemeContext } from '../../Provider/ThemeProvider';

function IntroView({ introData, title, brand }) {
  const { type } = useContext(ThemeContext);
  console.log(classes[type]);
  return (
    <div className={classes.intro}>
      <div className={classes.container}>
        <p className={classes.title}>{title}</p>
        <p className={classes.brand}>{brand}</p>
        <p className={classes.content}>
          The BMW 3 Series GT is a fine luxury offering, one with notably more road presence and character than
          a lot of traditional sedans including BMW’s own 3 Series.
        </p>
        <button type="button" className={classes.btn}>Book Now</button>
        <div className={classes.wrap}>
          <div className={`${classes.search} ${classes[type]}`}>
            <div className={classes.elemWrap}>
              { introData.map((item,) => <SearchElement texts={item.texts} key={item.id} />)}
              <button type="button" className={classes.btn}>Search Now</button> 
            </div>                       
          </div>
        </div>
      </div>
    </div>
  );
} 
IntroView.propTypes = {
  introData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  title: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired
};
export default IntroView;
