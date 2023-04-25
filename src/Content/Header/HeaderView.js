import PropTypes from 'prop-types';
import classes from './Header.module.css';
import logo from '../Images/logo.png';

function HeaderView({ navigation }) {
  return (
    <div className={classes.header}>
      <div className={classes.container}>
        <div className={classes.inner}>
          <div className={classes.wrap}>
            <img src={logo} className={classes.logo} alt="logo" />
            <p className={classes.title}>CarS</p>
          </div>
          <div className={classes.hotBar}>
            <a href="#home" className={classes.menu} onClick={() => navigation(0)}>Home</a>
            <a href="#About Us" className={classes.menu} onClick={() => navigation(1100)}>About Us</a>
            <a href="#Servises" className={classes.menu} onClick={() => navigation(1750)}>Catalog</a>
            <a href="#Stock" className={classes.menu} onClick={() => navigation(2950)}>Servises</a>
            <a href="#Contact" className={classes.menu} onClick={() => navigation(6500)}>Contakt Us</a>
            <button type="button" className={classes.btn}>Login</button>
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
