import React from 'react';

import useTitle from "../../hooks/useTitle";

// styles
import styles from "./FrontendDevelopers.module.css";

// images
import programmer01 from "../../assets/programmers/programmer01.jpg";
import programmer02 from "../../assets/programmers/programmer02.jpg";
import programmer03 from "../../assets/programmers/programmer03.jpg";

const FrontendDevelopers = () => {

    useTitle("Masoud | Frontend Debelopers");

    return (
        <div className={styles.container}>
            <div className={styles.contain}>
                <img src={programmer02} alt="frontEndDebeloper" />
                <h2>Scarlett</h2>
                <p>From Georgia</p>
            </div>
            <div className={styles.contain}>
                <img src={programmer01} alt="frontEndDebeloper" />
                <h2>William</h2>
                <p>From Montana</p>
            </div>
            <div className={styles.contain}>
                <img src={programmer03} alt="frontEndDebeloper" />
                <h2>Ella</h2>
                <p>From Carolina</p>
            </div>
        </div>
    );
};

export default FrontendDevelopers;