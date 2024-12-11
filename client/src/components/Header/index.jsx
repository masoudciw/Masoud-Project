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
                <nav className="navbar navbar-expand-lg">
                    <div className="header container-fluid sticky-top">
                        <Link to='/'><img src={Logo} alt="Logo Image" /></Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className='navItemLinks' to='/'>HOME</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='navItemLinks' to='/products'>PRODUCTS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='navItemLinks' to='/aboutus'>ABOUT US</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='navItemLinks' to='/contactus'>CONTACT US</Link>
                                </li>
                                {Auth.loggedIn() ? (
                                    <>
                                        <li className="nav-item accountBox">
                                            <span>{Auth.getProfile().data.username}</span>
                                            <Link className='navItemLinks' to='/account'>ACCOUNT</Link>
                                        </li>
                                        <li className="nav-item">
                                            <a className='logoutButton' onClick={logout}>
                                                LOGOUT
                                            </a>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li className="nav-item">
                                            <Link className='navItemLinks' to='/signin'>LOGIN</Link>
                                        </li>
                                        <li className="nav-item"><Link className='navItemLinks' to="/signup">SIGN UP</Link></li>
                                    </>
                                )}
                                <div className='itemsCounterBox'>
                                    <li className="nav-item"><Link className='navItemLinks' to='/checkout'><PiShoppingCartSimpleBold className='checkoutIcon' /></Link></li>
                                    {!!state.itemsCounter && <span className='itemsCounter'>{state.itemsCounter}</span>}
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav >
                {/* <div className='headerBox'>
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
                </div> */}
            </header >
        </>
    );
};

export default Header;