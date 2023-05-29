import { useTranslation } from 'react-i18next';
import classes from './Catalog.module.css';
import Tabs from '../Tabs/Tabs';
 
function Catalog() {
  const { t } = useTranslation();
  return (
    <div className={classes.catalog}>
      <div className={classes.container}>
        <p className={classes.title}>{t('catalog.title')}</p>
        <p className={classes.text}>{t('catalog.text')}</p>
        <div className={classes.inner}>
          <Tabs />
        </div>
      </div>
    </div>
  );
}

export default Catalog;
