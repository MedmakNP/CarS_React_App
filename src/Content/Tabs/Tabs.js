import React, { Component } from 'react';
import classes from './Tabs.module.css';
import TabButton from '../TabsElements/TabElementButton.js';
import TabContent from '../TabsElements/TabElementContent.js';
import tabData from '../Constants/CatalogArray.js';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleState: 1,
    };
  }

  setToggleState = (id) => {
    this.setState({ toggleState: id });
  }

  render() {
    return (
      <div className={classes.container}>
        <div className={classes.block}>
          {tabData.map((item, id) => (
            <TabButton toggleState={this.state.toggleState} setToggleState={this.setToggleState} text={item.text} id={item.id} key={id} />
          ))}
        </div>

        <div className={classes.contentTabs}>
          {tabData.map((item, id) => (
            <TabContent toggleState={this.state.toggleState} img={item.img} text={item.text} id={item.id} key={id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Tabs;
