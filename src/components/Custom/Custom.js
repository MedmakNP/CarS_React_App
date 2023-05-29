import { useTranslation } from 'react-i18next';
import classes from './Custom.module.css';
import iconData from '../../Api/CustomArray';
import CustElement from '../CustomElement/CustomElement';

function Custom() {
  const { t } = useTranslation();

  return ( 
       
    <div className={classes.custom}>
      <div className={classes.container}>
        <p className={classes.title}>{t('custom.title')}</p>
        <div className={classes.inner}>
          <div className={classes.wrap}>
            <div className={`${classes.wrapper} ${classes.n1}`}>
              { iconData.slice(0, 2).map(
                (item) => <CustElement img={item.img} text={item.text} key={item.id} />
              )}
            </div>
            <div className={`${classes.wrapper} ${classes.n2}`}>
              { iconData.slice(2, 4).map(
                (item) => <CustElement img={item.img} text={item.text} key={item.id} />
              )}
            </div>
            <div className={`${classes.wrapper} ${classes.n1}`}>
              { iconData.slice(4, 6).map(
                (item) => <CustElement img={item.img} text={item.text} key={item.id} />
              )}                  
            </div>
          </div>
          <div className={classes.moreIcon}>
            { iconData.slice(6).map(
              (item) => <CustElement img={item.img} text={item.text} key={item.id} />
            )}                 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Custom;
