import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import Auth from '../../utils/auth';
import './index.css';

const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <>
            <header>
                <div>
                    <Link to='/'><img src={Logo} alt="Logo Image" /></Link>
                </div>
                <div>
                    <ul>
                        <Link to='/'><li>HOME</li></Link>
                        <Link to='/'><li>PRODUCTS</li></Link>
                        <Link to='/aboutus'><li>ABOUT US</li></Link>
                        <Link to='/contactus'><li>CONTACT US</li></Link>
                        <ul>
                            <div>
                                {Auth.loggedIn() ? (
                                    <>
                                        <span>Hey there, {Auth.getProfile().data.username}!</span>
                                        <Link to='/account'><li>ACCOUNT</li></Link>
                                        <li><button onClick={logout}>
                                            LOGOUT
                                        </button></li>
                                    </>
                                ) : (
                                    <>
                                        <Link to='/signin'><li>LOGIN</li></Link>
                                        <Link to="/signup"><li>SIGN UP</li></Link>
                                    </>
                                )}
                            </div>
                        </ul>
                    </ul>
                </div>
            </header>
        </>
    );
};

export default Header;