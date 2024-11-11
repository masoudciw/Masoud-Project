import { Link } from 'react-router-dom';
import Instagram from '../../assets/instagram.svg';
import Github from '../../assets/github.svg';
import Linkedin from '../../assets/linkedin.svg';
import AmericanExpress from '../../assets/americanExpress.svg';
import Discover from '../../assets/discover.svg';
import Mastercard from '../../assets/mastercard.svg';
import Paypal from '../../assets/paypal.svg';
import Visa from '../../assets/visa.svg';
import './index.css';

const Footer2 = () => {
    return (
        <>
            <div className='footer2'>
                <div className='help'>
                    <h5>© 2024 Masoud Piano <br /> Powered by Masoud</h5>
                </div>
                <div className='services'>
                    <h5>Follow Us</h5>
                    <ul>
                        <Link to='https://github.com/masoudciw/masoud'><li><img src={Github} alt="Github Icon" /></li></Link>
                        <Link to='https://www.instagram.com/masoudabdi_music/'><li><img src={Instagram} alt="Instagram Icon" /></li></Link>
                        <Link to='https://www.linkedin.com/in/masoud-abdi-57a146272/'><li><img src={Linkedin} alt="Linkedin Icon" /></li></Link>
                    </ul>
                </div>
                <div className='AdditionalInfo'>
                    <h5>We Accept</h5>
                    <ul>
                        <li><img src={AmericanExpress} alt="AmericanExpress Icon" /></li>
                        <li><img src={Discover} alt="Discover Icon" /></li>
                        <li><img src={Mastercard} alt="Mastercard Icon" /></li>
                        <li><img src={Paypal} alt="Paypal Icon" /></li>
                        <li><img src={Visa} alt="Visa Icon" /></li>
                    </ul>
                </div>
            </div>
        </>
    );
};


export default Footer2;