import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Business = () => {
    return (
        <>
            <div className='business'>
                <div className='businessText'>
                    <h2>Buy a Piano or Sell Your Piano!</h2>
                    <p>We Help You to Find Your New Piano or Sell Your Piano at the Best Price!</p>
                </div>
                <div>
                    <Link to='/'><button className='buyButton'>Buy Your Piano</button></Link>
                    <Link to='/contactus'><button className='sellButton'>Sell Your Piano</button></Link>
                </div>
            </div>
        </>
    );
};

window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    const showContainer = document.getElementsByClassName('businessText');
    const showSellButtonButton = document.getElementsByClassName('sellButton');
    const showBuyButton = document.getElementsByClassName('buyButton');
    if (scrolled >= 300) {
        for (let i = 0; i < showContainer.length; i++) {
            showContainer[i].classList.add('showContainerForm');

        }
    }
    if (scrolled >= 350) {
        for (let i = 0; i < showContainer.length; i++) {
            showSellButtonButton[i].classList.add('showSellutton');
            showBuyButton[i].classList.add('showBuyButton');

        }
    }
    // if (scrolled <= 400) {
    //     for (let i = 0; i < showContainer.length; i++) {
    //         showContainer[i].classList.remove('showContainerForm')
    //     }
    // }

})

export default Business;