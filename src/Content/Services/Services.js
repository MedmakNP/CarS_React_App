import classes from './Services.module.css';
import service1 from '../Images/service1.png';
import service2 from '../Images/service2.png';
import service3 from '../Images/service3.png';

function Services() {
  return (
    <div className={classes.services}>
      <div className={classes.container}>
        <p className={classes.title}>Our Services</p>
        <div className={classes.wrap}>
          <div className={`${classes.elem} ${classes.color1}`}>
            <img src={service1} className={classes.img} alt="service1" />
            <p className={classes.text}>Fast & Easy Booking</p>                       
          </div>
          <div className={`${classes.elem} ${classes.color2}`}>
            <img src={service2} className={classes.img} alt="service2" />
            <p className={classes.text}>Many Pickup Location</p>                       
          </div>
          <div className={`${classes.elem} ${classes.color3}`}>
            <img src={service3} className={classes.img} alt="service3" />
            <p className={classes.text}>Satisfied Customer</p>                       
          </div>
        </div>
      </div>
    </div>
        
  );
}
export default Services;
