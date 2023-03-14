import { Component } from 'react';
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
export default TabContent;
