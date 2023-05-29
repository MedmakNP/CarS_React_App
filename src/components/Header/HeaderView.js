import PropTypes from 'prop-types';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './Header.module.css';
import logo from '../../assets/Images/logo.png';
import { ThemeContext } from '../../Provider/ThemeProvider';

function HeaderView({ navigation }) {
  const { toggleTheme } = useContext(ThemeContext);
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  return (
    <div className={classes.header}>
      <div className={classes.container}>
        <div className={classes.inner}>
          <div className={classes.wrap}>
            <img src={logo} className={classes.logo} alt="logo" />
            <p className={classes.title}>CarS</p>
            <button type="button" className={classes.btn} onClick={toggleTheme}>{t('header.changeTheme')}</button>
            <button type="button" className={classes.btnLngR} onClick={() => i18n.changeLanguage('en')}>Eng</button>
            <button type="button" className={classes.btnLng} onClick={() => i18n.changeLanguage('ua')}>Укр</button>
          </div>
          <div className={classes.hotBar}>
            <a href="#home" className={classes.menu} onClick={() => navigation(0)}>{t('header.home')}</a>
            <a href="#About Us" className={classes.menu} onClick={() => navigation(1100)}>{t('header.aboutUs')}</a>
            <a href="#Servises" className={classes.menu} onClick={() => navigation(1750)}>{t('header.catalog')}</a>
            <a href="#Stock" className={classes.menu} onClick={() => navigation(2950)}>{t('header.servises')}</a>
            <a href="#Contact" className={classes.menu} onClick={() => navigation(6500)}>{t('header.contaktUs')}</a>
            <button type="button" className={classes.btn}>{t('header.login')}</button>
          </div>
        </div>
      </div>   
    </div>
  );
}

HeaderView.propTypes = {
  navigation: PropTypes.func.isRequired,
};
export default HeaderView;
