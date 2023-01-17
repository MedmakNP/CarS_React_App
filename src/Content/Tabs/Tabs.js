import { useState } from "react";
import classes from "./Tabs.module.css"
import TataNexon from "../Images/Tata-Nexon.jpg"
import Porsche from "../Images/Porsche.png"
import range_rover_sport from "../Images/range-rover-sport.jpg"
import Mercedes_Benz from "../Images/Mercedes-Benz.jpg"
import THAR from "../Images/THAR.png" 
import TabButton from "../TabsElements/TabElementButton.js"
import tabData from "../Constants/CatalogArray.js"
function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  return (
    <div className={classes.container}>
      <div className={classes.block}>
      { tabData.map (i => < TabButton text = {i.text} id = {i.id} />)}  
      </div>

      <div className={classes.contentTabs}>
        <div className={toggleState === 1 ? `${classes.content} ${classes.activeContent}` :classes.content}>
          <img src={Porsche} className={classes.img} alt='Porsche' />
        </div>

        <div
          className={toggleState === 2 ? `${classes.content} ${classes.activeContent}` :classes.content}>
            <img src={TataNexon} className={classes.img} alt='TataNexon' />
        </div>

        <div
          className={toggleState === 3 ? `${classes.content} ${classes.activeContent}` : classes.content}>
            <img src={Mercedes_Benz} className={classes.img} alt='Mercedes_Benz' />
        </div>
        <div
          className={toggleState === 4 ? `${classes.content} ${classes.activeContent}` : classes.content}>
            <img src={range_rover_sport} className={classes.img} alt='range_rover_sport' />        
        </div>
        <div
          className={toggleState === 5 ? `${classes.content} ${classes.activeContent}` : classes.content}>
            <img src={THAR} className={classes.img} alt='THAR' />
        </div>
      </div>
    </div>
  );
}

export default Tabs;