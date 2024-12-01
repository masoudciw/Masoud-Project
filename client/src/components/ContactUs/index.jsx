import React from 'react';
import Location from '../../assets/location.svg';
import Phone from '../../assets/phone.svg';
import Clock from '../../assets/clock.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import useTitle from "../../hooks/useTitle";
import './index.css';

const ContactUs = () => {

    useTitle("Masoud | Contact Us");

    return (
        <>
            <div className='contact'>
                <div className='contactInfo'>
                    <h7>Our Location</h7>
                    <h8>Cherry Hill Showroom</h8>
                    <p>Our Cherry Hill, NJ showroom, located on Rt. 70, seconds off 295, <br /> is geared up
                        to serve all of our clients in New Jersey,New York, and beyond.<br />
                        We welcome you to visit, browse, learn, and enjoy!</p>
                    <ul>
                        <li>
                            <img src={Location} alt="Location Icon" />
                            <p>198 Allendale Rd., King of Prussia, PA 19406</p>
                        </li>
                        <li>
                            <img src={Phone} alt="Phone Icon" />
                            <p>123-456-7890</p>
                        </li>
                        <li>
                            <img src={Clock} alt="Clock Icon" />
                            <p>Tuesday-Saturday: 11am - 6pm
                                Sundays: 12pm - 5pm</p>
                        </li>
                    </ul>
                </div>
                <form className='formBox'>
                    <h6>Contact Us</h6>
                    <p>Leave your message and we'll get back to you shortly.</p>
                    <label for="name">Your Name *</label>
                    <input type="text" class="form-control" id="name" />
                    <label for="email">Email *</label>
                    <input type="email" class="form-control" id="email" placeholder="name@example.com" />
                    <label for="phone">Phone *</label>
                    <input type="text" class="form-control" id="phone" />
                    <label for="options">Interested In *</label>
                    <select class="form-control" id="options">
                        <option>New Pianos</option>
                        <option>Pre-Owned Pianos</option>
                        <option>Selling Piano</option>
                        <option>Digital Pianos</option>
                        <option>Piano Rentals</option>
                        <option>Music School</option>
                        <option>Other</option>
                    </select>
                    <label for="message">Message *</label>
                    <textarea class="form-control" id="message" rows="3"></textarea>

                    <label for="photos" className='photoLabel'>Choose Your File</label>
                    <input type="file" class="form-control-file" id="photos" />
                    <button type="submit" class="btn btn-primary mb-2">Submit</button>
                </form>
            </div>
        </>
    );
};

export default ContactUs;