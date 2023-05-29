import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './Services.module.css';
import service1 from '../../assets/Images/service1.png';
import service2 from '../../assets/Images/service2.png';
import service3 from '../../assets/Images/service3.png';
import { ThemeContext } from '../../Provider/ThemeProvider';

function Services() {
  const { type } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <div className={classes.services}>
      <div className={classes.container}>
        <p className={classes.title}>{t('servises.title')}</p>
        <div className={classes.wrap}>
          <div className={`${classes.elem} ${classes[`color1-${type}`]}`}>
            <img src={service1} className={classes.img} alt="service1" />
            <p className={classes.text}>{t('servises.booking')}</p>                       
          </div>
          <div className={`${classes.elem} ${classes[`color2-${type}`]}`}>
            <img src={service2} className={classes.img} alt="service2" />
            <p className={classes.text}>{t('servises.location')}</p>                       
          </div>
          <div className={`${classes.elem} ${classes[`color3-${type}`]}`}>
            <img src={service3} className={classes.img} alt="service3" />
            <p className={classes.text}>{t('servises.customer')}</p>                       
          </div>
        </div>
      </div>
    </div>
        
  );
}
export default Services;
