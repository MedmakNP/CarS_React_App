import React, { Component } from 'react';
import classes from './TabElem.module.css';

class TabButton extends Component {
  render() {
    const {
      text, id, toggleState, setToggleState 
    } = this.props;
    return (
      <button
        className={toggleState === id ? `${classes.tabs} ${classes.activeTab}` : classes.tabs}
        onClick={() => setToggleState(id)}
      >
        <p className={toggleState === id ? `${classes.title} ${classes.activeTitle}` : classes.title}>
          {text}
        </p>
      </button>
    );
  }
}

export default TabButton;
