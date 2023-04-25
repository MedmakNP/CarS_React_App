import PropTypes from 'prop-types';
import classes from './searchElement.module.css';

function SearchElement(props) {
  const { texts } = props;
  return (
    <div className={classes.elem}>
      <p className={classes.texts}>{texts}</p>
      <div className={classes.arrow} />
    </div>
  );
}
SearchElement.propTypes = {
  texts: PropTypes.string.isRequired
};
export default SearchElement;
