import classes from "./searchElement.module.css"

const SearchElement = (props) => {
    return(
        <div className={classes.elem}>
           <p className={classes.text}>{props.text}</p>
           <div className={classes.arrow}></div>
        </div>
    );
}
export default SearchElement;