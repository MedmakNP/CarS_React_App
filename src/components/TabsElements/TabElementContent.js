import { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './TabElem.module.css';

class TabContent extends Component {
  render() {
    const {
      toggleState, text, img, id 
    } = this.props;
    return (
      <div className={toggleState === id ? `${classes.content} ${classes.activeContent}` : classes.content}>
        <img src={img} className={classes.img} alt={text} />
      </div>        
    );
  }
}

TabContent.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  toggleState: PropTypes.number.isRequired
};
export default TabContent;
