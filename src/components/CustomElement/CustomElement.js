import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import classes from './CustomElement.module.css';

function CustElement(props) {
  const { img, text } = props;
  const { t } = useTranslation();
  return (
    <div className="icon">
      <img src={img} className="icon-img" alt="" />
      <p className={classes.text}> 
        {' '}
        {t(text)}
      </p>
    </div>
  );
}
CustElement.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
export default CustElement;
