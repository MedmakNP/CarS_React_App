import PropTypes from 'prop-types';
import classes from './CustomElement.module.css';

function CustElement(props) {
  const { img, text } = props;
  return (
    <div className="icon">
      <img src={img} className="icon-img" alt="" />
      <p className={classes.text}> 
        {' '}
        {text}
      </p>
    </div>
  );
}
CustElement.propTypes = {
  img: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};
export default CustElement;
