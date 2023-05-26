import PropTypes from 'prop-types';
import { useContext } from 'react';
import classes from './searchElement.module.css';
import { ThemeContext } from '../../Provider/ThemeProvider';

function SearchElement(props) {
  const { type } = useContext(ThemeContext);
  const { texts } = props;
  return (
    <div className={`${classes.elem} ${classes[type]}`}>
      <p className={classes.texts}>{texts}</p>
      <div className={classes.arrow} />
    </div>
  );
}
SearchElement.propTypes = {
  texts: PropTypes.string.isRequired
};
export default SearchElement;
