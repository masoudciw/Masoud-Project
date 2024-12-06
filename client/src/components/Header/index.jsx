import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import Auth from '../../utils/auth';
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useCart } from '../../context/CartContext';
import './index.css';

const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    const [state] = useCart();

    return (
        <>
            <header>
                <div className='headerBox'>
                    <ul>
                        <Link to='/'><li><img src={Logo} alt="Logo Image" /></li></Link>
                        <Link to='/'><li>HOME</li></Link>
                        <Link to='/products'><li>PRODUCTS</li></Link>
                        <Link to='/aboutus'><li>ABOUT US</li></Link>
                        <Link to='/contactus'><li>CONTACT US</li></Link>
                        {Auth.loggedIn() ? (
                            <>
                                <div className='accountBox'>
                                    <span>Hey there, {Auth.getProfile().data.username}!</span>
                                    <Link to='/account'><li>ACCOUNT</li></Link>
                                    <li><button className='logoutButton' onClick={logout}>
                                        LOGOUT
                                    </button></li>
                                </div>
                            </>
                        ) : (
                            <>
                                <Link to='/signin'><li>LOGIN</li></Link>
                                <Link className='signUpButton' to="/signup"><li>SIGN UP</li></Link>
                            </>
                        )}
                        <div className='itemsCounterBox'>
                            <Link to='/checkout'><li><PiShoppingCartSimpleBold className='checkoutIcon' /></li></Link>
                            {!!state.itemsCounter && <span className='itemsCounter'>{state.itemsCounter}</span>}
                        </div>
                    </ul>
                </div>
            </header >
        </>
    );
};

export default Header;