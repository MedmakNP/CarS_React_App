import { useTranslation } from 'react-i18next';
import classes from './Footer.module.css';

function Footer() {
  const { t } = useTranslation();

  return (
    <div className={classes.footer}>
      <p className={classes.text}>{t('footer.title')}</p>
    </div>
  );
}
export default Footer;
