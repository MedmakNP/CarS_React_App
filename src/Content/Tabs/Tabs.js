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
      { tabData.map (i => < TabButton toggleState = {toggleState} setToggleState = {setToggleState} text = {i.text} id = {i.id} />)}  
      </div>

      <div className={classes.contentTabs}>
      { tabData.map (cont => < TabContent toggleState = {toggleState} img = {cont.img}  text = {cont.text} id = {cont.id} />)}
      </div>
    </div>
  );
}

export default Tabs;