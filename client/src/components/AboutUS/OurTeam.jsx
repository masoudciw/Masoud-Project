import React, { useEffect } from 'react';

import useTitle from "../../hooks/useTitle";

// styles 
import styles from "./Ourteam.module.css";

// image
import ourteam from "../../assets/ourteam.jpg";

const OurTeam = () => {

    useTitle("Masoud | Our Team");

    useEffect(() => {
        if (!document.getElementById("ourteam").length) {
            document.getElementById("ourteam").classList.add(styles.showOurteam)
        }
    }, []);
    return (
        <div id="ourteam" className={styles.ourteam}>
            <img src={ourteam} alt="ourteamImage" />
            <div className={styles.text}>
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum eius
                    ducimus quibusdam perspiciatis rerum ab necessitatibus veritatis
                    praesentium minima placeat quaerat, quidem animi omnis assumenda,
                    dignissimos commodi quod laborum explicabo!</p>
                <p>Our core team are experienced across a range of areas and industries.
                    They are driven and passionate, and have the capacity to make your
                    goals come true. When a project or client requires it, however,
                    we are happy to collaborate with other individuals and organisations
                    – we love working side by side with others. We also have a
                    number of partners and freelancers we work with when required.</p>
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum eius
                    ducimus quibusdam perspiciatis rerum ab necessitatibus veritatis
                    praesentium minima placeat quaerat, quidem animi omnis assumenda,
                    dignissimos commodi quod laborum explicabo!</p>
            </div>
        </div>
    );
};

export default OurTeam;