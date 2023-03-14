import classes from './searchElement.module.css';

function SearchElement(props) {
  return (
    <div className={classes.elem}>
      <p className={classes.texts}>{props.texts}</p>
      <div className={classes.arrow} />
    </div>
  );
}
export default SearchElement;
