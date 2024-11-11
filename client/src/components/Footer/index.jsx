import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import './index.css';

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='help'>
                    <h4>NEED HELP?</h4>
                    <ul>
                        <span>Call Us Toll-Free at</span><Link style={{ textDecoration: 'none' }} to='/'><li>123-456-7890</li></Link>
                        <span>Email:</span><Link style={{ textDecoration: 'none' }} to='/'><li>Piano@masoud-piano.Com</li></Link>
                        <span>Visit Masoud Piano:</span><Link style={{ textDecoration: 'none' }} to='/'><li>198 Allendale Rd., King of Prussia, PA 19406</li></Link>
                    </ul>
                </div>
                <div className='services'>
                    <h4>SERVICESP</h4>
                    <ul>
                        <Link style={{ textDecoration: 'none' }} to='/'><li>Piano Tuning</li></Link>
                        <Link style={{ textDecoration: 'none' }} to='/'><li>Piano Rentals</li></Link>
                        <Link style={{ textDecoration: 'none' }} to='/'><li>Piano Restorations</li></Link>
                        <Link style={{ textDecoration: 'none' }} to='/'><li>Player Installations</li></Link>
                        <Link style={{ textDecoration: 'none' }} to='/'><li>Music School</li></Link>
                    </ul>
                </div>
                <div className='AdditionalInfo'>
                    <h4>ADDITIONAL INFO</h4>
                    <ul>
                        <Link style={{ textDecoration: 'none' }} to='/contactus'><li>Contact Us</li></Link>
                        <Link style={{ textDecoration: 'none' }} to='/'><li>Finance</li></Link>
                        <Link style={{ textDecoration: 'none' }} to='/'><li>Privacy Policy</li></Link>
                        <Link style={{ textDecoration: 'none' }} to='/'><li>Shipping Policy</li></Link>
                        <Link style={{ textDecoration: 'none' }} to='/'><li>Return/Refund Policy</li></Link>
                        <Link style={{ textDecoration: 'none' }} to='/'><li>Terms of Service</li></Link>
                        <Link style={{ textDecoration: 'none' }} to='/'><li>Disclaimer</li></Link>
                    </ul>
                </div>
                <div className='Newsletter'>
                    <h4>NEWSLETTER</h4>
                    <p>Sign up for our newsletter and get a free <br />
                        eBook with the latest piano updates</p>
                    <input type="text" placeholder='Your email' />
                    <button type='submit'>Subscribe</button>
                </div>
            </div>
        </>
    );
};

export default Footer;