import classes from ""
import { useState } from "react";
const TabButton = (props) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
    return(
        <button
          className={toggleState === props.id ? `${classes.tabs} ${classes.activeTab}` : classes.tabs}
          onClick={() => toggleTab(props.id)}>
          <p className={toggleState === props.id ? `${classes.title} ${classes.activeTitle}` : classes.title}>{props.text}</p>
        </button>
    )
}
export default TabButton;
