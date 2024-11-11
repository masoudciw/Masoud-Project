import React, { useEffect } from 'react';

import { Link, Outlet } from 'react-router-dom';

import useTitle from "../../hooks/useTitle";

import styles from "./AboutUs.module.css";

const AboutUS = () => {

    useTitle("Masoud | About Us");

    useEffect(() => {
        changeColor2();
        document.getElementById("aTag2").click();
    }, []);

    return (
        <>
            <div id="container" className={styles.container}>
                <h1>Making goals come true</h1>
                <div className={styles.wrapper}>
                    <div className={styles.containerForm}>
                        <h2>We are a team of creators, strategists, developers and communicators with one mission: to make goals come true.</h2>
                        <p>We do this through different streams within Futuretheory – we cultivate imagination and experimentation in our Creator’s Space, designed to give everyday people access to not-so-everyday equipment. We make knowledge accessible through Latest, a dynamic collection of expertise, lessons and findings from our team and industry experts. We amplify the voices of go-getters, optimists, doers and innovators on the Future Tribe Podcast, because we recognise the power of listening to people who have done and are doing. We share our time and expertise in line with our GoodFuture philosophy because we have the responsibility to contribute to and enable organisations who are doing good in the world.</p>
                        <div className={styles.links}>
                            <Link id="aTag2" onClick={() => changeColor2()} to='ourteam'>Our Team</Link> <br /> <br />
                            <Link id="aTag1" onClick={() => changeColor1()} className={styles.link2} to='frontendprogrammers'>Frontend Developers</Link> <br /> <br />
                            <Link id="aTag3" onClick={() => changeColor3()} to='backendprogrammers'>Backend Programmers</Link>
                        </div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

const changeColor1 = () => {
    const selected1 = document.getElementById("aTag1");
    const selected2 = document.getElementById("aTag2");
    const selected3 = document.getElementById("aTag3");
    if (selected1) {
        selected1.style.color = "rgb(255, 36, 36)";
        selected1.style.opacity = "1";
        selected2.style.color = "#03408F";
        selected3.style.color = "#03408F";
    }
}
const changeColor2 = () => {
    const selected1 = document.getElementById("aTag1");
    const selected2 = document.getElementById("aTag2");
    const selected3 = document.getElementById("aTag3");
    if (selected2) {
        selected1.style.color = "#03408F";
        selected2.style.color = "rgb(255, 36, 36)";
        selected2.style.opacity = "1";
        selected3.style.color = "#03408F";
    }
}
const changeColor3 = () => {
    const selected1 = document.getElementById("aTag1");
    const selected2 = document.getElementById("aTag2");
    const selected3 = document.getElementById("aTag3");
    if (selected2) {
        selected1.style.color = "#03408F";
        selected2.style.color = "#03408F";
        selected3.style.color = "rgb(255, 36, 36)";
        selected3.style.opacity = "1";
    }
}

export default AboutUS;