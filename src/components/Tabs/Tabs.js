import React, { useState } from 'react';
import classes from './Tabs.module.css';
import TabButton from '../TabsElements/TabElementButton';
import TabContent from '../TabsElements/TabElementContent';
import tabData from '../../Api/CatalogArray';

function Tabs() {
  const [toggleState, setToggleState] = useState(1);
  const ChangeId = (id) => {
    setToggleState(id);
  };
  return (
    <div className={classes.container}>
      <div className={classes.block}>
        {tabData.map((item) => (
          <TabButton 
            toggleState={toggleState} 
            setToggleState={ChangeId} 
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

export default Tabs;
