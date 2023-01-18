import classes  from "./TabElem.module.css"

const TabContent = ({img, toggleState, id ,text}) => {
    return(
      <div className={toggleState === id ? `${classes.content} ${classes.activeContent}` :classes.content}>
        <img src={img} className={classes.img} alt={text} />
      </div>        
    );
};

export default TabContent;