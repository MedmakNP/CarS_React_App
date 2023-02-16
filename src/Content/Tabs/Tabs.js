import { useState } from "react";
import classes from "./Tabs.module.css"
import TabButton from "../TabsElements/TabElementButton.js"
import TabContent from "../TabsElements/TabElementContent.js"
import tabData from "../Constants/CatalogArray.js"
function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  return (
    <div className={classes.container}>
      <div className={classes.block}>
      { tabData.map ((item, index) => < TabButton toggleState = {toggleState} setToggleState = {setToggleState} text = {item.text} id = {item.id} key = {index} />)}  
      </div>

      <div className={classes.contentTabs}>
      { tabData.map ((item, index) => < TabContent toggleState = {toggleState} img = {item.img}  text = {item.text} id = {item.id} key = {index} />)}
      </div>
    </div>
  );
}

export default Tabs;