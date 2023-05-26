import PropTypes from 'prop-types';
import classes from './TabElem.module.css';

function TabButton({
  text, id, toggleState, setToggleState 
}) {
  return (
    <button 
      type="button" 
      className={toggleState === id ? `${classes.tabs} ${classes.activeTab}` : classes.tabs} 
      onClick={() => setToggleState(id)}
    >
      <p className={toggleState === id ? `${classes.title} ${classes.activeTitle}` : classes.title}>{text}</p>
    </button>
  );
}

TabButton.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  toggleState: PropTypes.number.isRequired,
  setToggleState: PropTypes.func.isRequired,
};
export default TabButton;
