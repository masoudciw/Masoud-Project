import React from 'react';
import Bösendorfer from '../../assets/Bösendorfer-Logo.wine.svg';
import Bluethner from '../../assets/julius-bluethner-pianofortefabrik-logo.svg';
import Kawai from '../../assets/kawai-logo.svg';
import Steinway from '../../assets/steinway-and-sons-logo.svg';
import Schimmel from '../../assets/wilhelm-schimmel-pianofortefabrik-logo.svg';
import Yamaha from '../../assets/yamaha-2-1.svg';
import './index.css';

const Brands = () => {
    return (
        <>
            <div className='brand'>
                <div className='brandBox'>
                    <h3>We Carry the Most Popular Piano Brands!</h3>
                </div>
                <div className='brandImages'>
                    <img className='brandImages1' src={Yamaha} alt="Yamaha Icon" />
                    <img className='brandImages2' src={Steinway} alt="Steinway Icon" />
                    <img className='brandImages3' src={Bösendorfer} alt="Bösendorfer Icon" />
                    <img className='brandImages4' src={Schimmel} alt="Schimmel Icon" />
                    <img className='brandImages5' src={Bluethner} alt="Bluethner Icon" />
                    <img className='brandImages6' src={Kawai} alt="Kawai Icon" />
                </div>
            </div>
        </>
    );
};

window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    const showContainer = document.getElementsByClassName('brandBox');
    const showContainer1 = document.getElementsByClassName('brandImages1');
    const showContainer2 = document.getElementsByClassName('brandImages2');
    const showContainer3 = document.getElementsByClassName('brandImages3');
    const showContainer4 = document.getElementsByClassName('brandImages4');
    const showContainer5 = document.getElementsByClassName('brandImages5');
    const showContainer6 = document.getElementsByClassName('brandImages6');
    if (scrolled >= 700) {
        for (let i = 0; i < showContainer.length; i++) {
            showContainer[i].classList.add('showContainerForm');
        }
    }
    if (scrolled >= 900) {
        for (let i = 0; i < showContainer.length; i++) {
            showContainer1[i].classList.add('showContainerForm1');
            showContainer2[i].classList.add('showContainerForm2');
            showContainer3[i].classList.add('showContainerForm3');
        }
    }
    if (scrolled >= 950) {
        for (let i = 0; i < showContainer.length; i++) {
            showContainer4[i].classList.add('showContainerForm4');
            showContainer5[i].classList.add('showContainerForm5');
            showContainer6[i].classList.add('showContainerForm6');
        }
    }
})

export default Brands;