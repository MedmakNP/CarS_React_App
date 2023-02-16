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
                        <p className={classes.menu}>Home</p>
                        <p className={classes.menu}>About Us</p>
                        <p className={classes.menu}>Servises</p>
                        <p className={classes.menu}>Stock</p>
                        <p className={classes.menu}>Contakt Us</p>
                        <button className={classes.btn}>Login</button>
                    </div>
                </div>
            </div>   
        </div>
    );
}
export default Header;
