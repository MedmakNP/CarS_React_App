import classes from './CustomElement.module.css';

function CustElement(props) {
  return (
    <div className="icon">
      <img src={props.img} className="icon-img" alt="" />
      <p className={classes.text}> 
        {' '}
        {props.text}
      </p>
    </div>
  );
}
export default CustElement;
