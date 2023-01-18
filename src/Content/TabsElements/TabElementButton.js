import classes from "./TabElem.module.css"
const TabButton = ({text, id ,toggleState,setToggleState}) => {
    return(
        <button
          className={toggleState === id ? `${classes.tabs} ${classes.activeTab}` : classes.tabs}
          onClick={() => setToggleState(id)}>
          <p className={toggleState === id ? `${classes.title} ${classes.activeTitle}` : classes.title}>{text}</p>
        </button>
    )
}
export default TabButton;
