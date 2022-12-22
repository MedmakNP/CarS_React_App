import './Header.css'
import logo from '../Images/logo.png'
const Header = () => {
    return(
        <div className='header'>
            <div className='container'>
                <div className='header-inner'>
                    <div className='logo-wrap'>
                        <img src={logo} className='logo' alt='logo' />
                        <p className='logo-p'>CarS</p>
                    </div>
                    <div className='hot-bar'>
                        <a className='elem-menu'>Home</a>
                        <a className='elem-menu'>About Us</a>
                        <a className='elem-menu'>Servises</a>
                        <a className='elem-menu'>Stock</a>
                        <a className='elem-menu'>Contakt Us</a>
                        <button className='login-btn'>Login</button>
                    </div>
                </div>
            </div>   
        </div>
    );
}
export default Header;
