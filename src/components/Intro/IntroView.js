import { useContext } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import classes from './intro.module.css';
import SearchElement from '../SearchElement/searchElement';
import { ThemeContext } from '../../Provider/ThemeProvider';

function IntroView({ introData, title, brand }) {
  const { type } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <div className={classes.intro}>
      <div className={classes.container}>
        <p className={classes.title}>{t(title)}</p>
        <p className={classes.brand}>{brand}</p>
        <p className={classes.content}>{t('intro.text')}</p>
        <button type="button" className={classes.btn}>{t('intro.bookNow')}</button>
        <div className={classes.wrap}>
          <div className={`${classes.search} ${classes[type]}`}>
            <div className={classes.elemWrap}>
              { introData.map((item,) => <SearchElement texts={item.texts} key={item.id} />)}
              <button type="button" className={classes.btn}>{t('intro.searchNow')}</button> 
            </div>                       
          </div>
        </div>
      </div>
    </div>
  );
} 
IntroView.propTypes = {
  introData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  title: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired
};
export default IntroView;
