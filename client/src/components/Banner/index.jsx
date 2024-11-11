import { useState } from 'react';
import React from 'react';
import './index.css';
import { useSpring, animated } from 'react-spring';
import Piano from '../../assets/pianoKeys.jpg';

const Banner = () => {
    const [flip, setFlip] = useState(false);
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: true,
        // reverse: flip,
        delay: 1900,
        onRest: () => setFlip(flip),
        // onRest: () => setFlip(!flip),
    });
    const props1 = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: true,
        // reverse: flip,
        delay: 2400,
        onRest: () => setFlip(flip),
        // onRest: () => setFlip(!flip),
    });
    const props2 = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: true,
        // reverse: flip,
        delay: 2800,
        onRest: () => setFlip(flip),
        // onRest: () => setFlip(!flip),
    });
    const props3 = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: true,
        // reverse: flip,
        delay: 3200,
        onRest: () => setFlip(flip),
        // onRest: () => setFlip(!flip),
    });
    return (
        <>
            <div className='banner'>
                <div className='bannerText'>
                    <animated.div style={props}>
                        <h1>WELCOME TO MASOUD PAINO CO.</h1>
                    </animated.div>
                    <animated.div style={props1}>
                        <p>One of American's Oldest and Most Respected Piano Store since 1891.</p>
                    </animated.div>
                    <animated.div style={props2}>
                        <span>Visit Our Store or Shop Online.</span>
                    </animated.div>
                    <animated.div style={props3}>
                        <img src={Piano} alt="" />
                    </animated.div>
                </div>
            </div>
        </>
    );
};

export default Banner;