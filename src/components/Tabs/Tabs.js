import React, { Component } from 'react';
import classes from './Tabs.module.css';
import TabButton from '../TabsElements/TabElementButton';
import TabContent from '../TabsElements/TabElementContent';
import tabData from '../../Api/CatalogArray';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleState: 1,
    };
  }

  setToggleState = (id) => {
    this.setState({ toggleState: id });
  };

  render() {
    const { toggleState } = this.state;
    return (
      <div className={classes.container}>
        <div className={classes.block}>
          {tabData.map((item) => (
            <TabButton 
              toggleState={toggleState} 
              setToggleState={this.setToggleState} 
              text={item.text} 
              id={item.id} 
              key={item.id} 
            />
          ))}
        </div>

        <div className={classes.contentTabs}>
          {tabData.map((item) => (
            <TabContent toggleState={toggleState} img={item.img} text={item.text} id={item.id} key={item.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Tabs;
