import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import classes from './Contacts.module.css';
import logo from '../../assets/Images/logo.png';
import telephone from '../../assets/Images/telephone.png';
import placeholder from '../../assets/Images/placeholder.png';
import mail from '../../assets/Images/mail.png';
import linkedin from '../../assets/Images/linkedin.png';
import instagram from '../../assets/Images/instagram.png';
import facebook from '../../assets/Images/facebook.png';
import twitter from '../../assets/Images/twitter.png';

function ContactsView({ title, text }) {
  const { t } = useTranslation();

  return (
    <div className={classes.contacts}>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.logoWrap}>
            <img src={logo} className={classes.logo} alt="logo" />
            <p className={classes.logoTitle}>CarS</p>
          </div>
          <div className={classes.inner}>
            <p className={classes.title}>{t('contacts.name')}</p>
            <a href="https://github.com/MedmakNP/test123" className={classes.link}>
              https://github.com/MedmakNP/test123
            </a>
            <p />
            <a 
              href="https://www.figma.com/file/0NIWEwA3N0YrEMvdnfT2Dy
                /CarDealership?node-id=113%3A977&t=PoZrAlLbrVhbswlm-0" 
              className={classes.link}
            >
              {title}
            </a>
          </div>
        </div> 
        <div className={classes.wrap}>
          <div className={classes.element}>
            <p className={classes.title}>{t('contacts.servises.title')}</p>
            <p className={classes.text}>{t('contacts.servises.carServices')}</p>
            <p className={classes.text}>{t('contacts.servises.buyCar')}</p>
            <p className={classes.text}>{t('contacts.servises.sellCar')}</p>
            <p className={classes.text}>{t('contacts.servises.washingCar')}</p>
          </div>
          <div className={classes.element}>
            <p className={classes.title}>{t('contacts.company.title')}</p>
            <p className={classes.text}>{t('contacts.company.aboutUs')}</p>
            <p className={classes.text}>{t('contacts.company.careers')}</p>
            <p className={classes.text}>{t('contacts.company.press')}</p>
            <p className={classes.text}>{t('contacts.company.blog')}</p>
            <p className={classes.text}>{t('contacts.company.sustainability')}</p>
          </div>
          <div className={classes.element}>
            <p className={classes.title}>Contact Us</p>
            <p className={classes.text}>
              <img src={telephone} className={classes.icon} alt="" />
              +91 9979477741
            </p>
            <p className={classes.text}>
              <img src={placeholder} className={classes.icon} alt="" />
              {text}
            </p>
            <p className={classes.text}>
              <img src={mail} className={classes.icon} alt="" />
              tommyshelby156@gmail.com
            </p>
            <div className={classes.imgWrap}>
              <img src={twitter} className={classes.img} alt="" />
              <img src={linkedin} className={classes.img} alt="" />
              <img src={instagram} className={classes.img} alt="" />
              <img src={facebook} className={classes.img} alt="" /> 
            </div>
          </div>                    
        </div> 
      </div>
    </div>  
  );
}    
ContactsView.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired    
};
export default ContactsView;
