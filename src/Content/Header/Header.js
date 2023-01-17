import classes from './Header.module.css'
import logo from '../Images/logo.png'
const Header = () => {
    return(
        <div className={classes.header}>
            <div className={classes.container}>
                <div className={classes.inner}>
                    <div className={classes.wrap}>
                        <img src={logo} className={classes.logo} alt='logo' />
                        <p className={classes.title}>CarS</p>
                    </div>
                    <div className={classes.hotBar}>
                        <a className={classes.menu}>Home</a>
                        <a className={classes.menu}>About Us</a>
                        <a className={classes.menu}>Servises</a>
                        <a className={classes.menu}>Stock</a>
                        <a className={classes.menu}>Contakt Us</a>
                        <button className={classes.btn}>Login</button>
                    </div>
                </div>
            </div>   
        </div>
    );
}
export default Header;
